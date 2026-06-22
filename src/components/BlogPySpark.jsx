import { FiArrowLeft, FiClock, FiCalendar, FiUser } from "react-icons/fi";

export default function BlogPySpark() {
  return (
    <div className="min-h-screen bg-navy-950 text-slate-200 px-4 py-12 max-w-4xl mx-auto">
      
      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="flex items-center gap-2 text-brand-400 hover:text-brand-300 mb-8 transition-colors"
      >
        <FiArrowLeft /> Back to Portfolio
      </button>

      {/* Header */}
      <div className="mb-10">
        <span className="text-xs px-3 py-1 rounded-full bg-accent/15 text-accent border border-accent/20 mb-4 inline-block">
          PySpark
        </span>
        <h1 className="font-display font-bold text-3xl md:text-4xl text-slate-100 mb-4 leading-tight">
          PySpark Performance Tuning Tips — Real Lessons from Target Corporation
        </h1>
        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
          <span className="flex items-center gap-1"><FiUser size={14}/> Dhananjay Sitap</span>
          <span className="flex items-center gap-1"><FiCalendar size={14}/> June 2026</span>
          <span className="flex items-center gap-1"><FiClock size={14}/> 8 min read</span>
        </div>
      </div>

      {/* Intro */}
      <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-brand-400 pl-5 mb-10">
        Processing 5M+ transactional records daily on Databricks taught me that PySpark performance 
        is not about one magic trick — it's a combination of smart partitioning, join strategies, 
        and config tuning. Here are the real techniques I used that cut our pipeline execution time by 25–30%.
      </p>

      {/* Tip 1 */}
      <div className="mb-10">
        <p className="text-xs text-brand-400 font-semibold tracking-widest mb-1">TIP 01</p>
        <h2 className="text-xl font-semibold text-slate-100 mb-3">Partition wisely — not just more partitions</h2>
        <p className="text-slate-400 leading-relaxed mb-4">
          Most engineers default to <code className="bg-white/10 px-1 rounded">repartition(200)</code> and move on. 
          But at Target, our retail data had massive skew — some store IDs had 10x more records than others. 
          Random partitioning made things worse. The fix? Salting.
        </p>
        <pre className="bg-black/40 border border-white/10 rounded-xl p-4 text-sm text-green-300 overflow-x-auto leading-relaxed">
{`# Without salting — skewed, slow
df_skewed.join(df_small, "store_id")

# With salting — balanced, fast
import pyspark.sql.functions as F

salt_factor = 10
df_large = df_large.withColumn("salt", (F.rand() * salt_factor).cast("int"))
df_small = df_small.withColumn("salt", F.explode(F.array(*[F.lit(i) for i in range(salt_factor)])))

df_large.join(df_small, ["store_id", "salt"])`}
        </pre>
      </div>

      {/* Tip 2 */}
      <div className="mb-10">
        <p className="text-xs text-brand-400 font-semibold tracking-widest mb-1">TIP 02</p>
        <h2 className="text-xl font-semibold text-slate-100 mb-3">Use Broadcast joins for small dimension tables</h2>
        <p className="text-slate-400 leading-relaxed mb-4">
          In our Medallion pipeline, the Gold layer aggregates data against store and product dimension 
          tables (usually under 100MB). Broadcasting these small tables eliminates the shuffle entirely.
        </p>
        <pre className="bg-black/40 border border-white/10 rounded-xl p-4 text-sm text-green-300 overflow-x-auto leading-relaxed">
{`from pyspark.sql.functions import broadcast

# Auto broadcast
spark.conf.set("spark.sql.autoBroadcastJoinThreshold", "100mb")

# Manual broadcast — guaranteed behavior
df_transactions.join(
    broadcast(df_store_dim),
    "store_id"
).groupBy("region").agg(F.sum("sales_amount"))`}
        </pre>
      </div>

      {/* Tip 3 */}
      <div className="mb-10">
        <p className="text-xs text-brand-400 font-semibold tracking-widest mb-1">TIP 03</p>
        <h2 className="text-xl font-semibold text-slate-100 mb-3">Enable Adaptive Query Execution (AQE)</h2>
        <p className="text-slate-400 leading-relaxed mb-4">
          AQE was a game-changer for our dynamic retail workloads. It re-optimizes query plans 
          at runtime based on actual data statistics — no manual tuning needed for every query.
        </p>
        <pre className="bg-black/40 border border-white/10 rounded-xl p-4 text-sm text-green-300 overflow-x-auto leading-relaxed">
{`spark.conf.set("spark.sql.adaptive.enabled", "true")
spark.conf.set("spark.sql.adaptive.coalescePartitions.enabled", "true")
spark.conf.set("spark.sql.adaptive.skewJoin.enabled", "true")`}
        </pre>
      </div>

      {/* Tip 4 */}
      <div className="mb-10">
        <p className="text-xs text-brand-400 font-semibold tracking-widest mb-1">TIP 04</p>
        <h2 className="text-xl font-semibold text-slate-100 mb-3">Cache smartly — not everything</h2>
        <p className="text-slate-400 leading-relaxed mb-4">
          We had a multi-step Silver layer transformation that re-read the same Bronze table 4 times. 
          Caching it once saved massive I/O and network overhead.
        </p>
        <pre className="bg-black/40 border border-white/10 rounded-xl p-4 text-sm text-green-300 overflow-x-auto leading-relaxed">
{`# Cache once, reuse many times
bronze_df.cache()
bronze_df.count()  # trigger the cache

silver_df1 = bronze_df.filter(F.col("category") == "electronics")
silver_df2 = bronze_df.filter(F.col("category") == "clothing")

# Always unpersist when done!
bronze_df.unpersist()`}
        </pre>
      </div>

      {/* Tip 5 */}
      <div className="mb-10">
        <p className="text-xs text-brand-400 font-semibold tracking-widest mb-1">TIP 05</p>
        <h2 className="text-xl font-semibold text-slate-100 mb-3">Partition pruning with Delta Lake</h2>
        <p className="text-slate-400 leading-relaxed mb-4">
          On AWS S3, our Delta tables were partitioned by date. Always filter on partition 
          columns early — otherwise Spark scans the entire 2-year history!
        </p>
        <pre className="bg-black/40 border border-white/10 rounded-xl p-4 text-sm text-green-300 overflow-x-auto leading-relaxed">
{`df = spark.read.format("delta").load("s3://bucket/silver/transactions")

# Push partition filter BEFORE any joins
df_filtered = df.filter(
    (F.col("transaction_date") >= "2026-06-01") &
    (F.col("transaction_date") <= "2026-06-22")
)

# Verify pruning worked
df_filtered.explain(mode="formatted")`}
        </pre>
      </div>

      {/* Results */}
      <div className="glass p-6 rounded-2xl mb-10">
        <p className="text-xs text-brand-400 font-semibold tracking-widest mb-4">RESULTS AT TARGET</p>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-brand-400">25–30%</p>
            <p className="text-xs text-slate-400 mt-1">Execution time cut</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-brand-400">5M+</p>
            <p className="text-xs text-slate-400 mt-1">Records/day</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-brand-400">30%</p>
            <p className="text-xs text-slate-400 mt-1">Better availability</p>
          </div>
        </div>
      </div>

      {/* Author */}
      <div className="glass p-5 rounded-2xl flex gap-4 items-start">
        <div className="w-12 h-12 rounded-full bg-brand-400/20 flex items-center justify-center text-brand-400 font-bold text-lg flex-shrink-0">
          DS
        </div>
        <div>
          <p className="font-semibold text-slate-100">Dhananjay Sitap</p>
          <p className="text-sm text-slate-400 leading-relaxed">
            Data Engineer at 2GBR Software · Client: Target Corporation. 
            Building scalable ETL/ELT pipelines on Databricks, PySpark & AWS. 
            NPTEL IIT Madras Silver Medalist.
          </p>
        </div>
      </div>

    </div>
  );
}
