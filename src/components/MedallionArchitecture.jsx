import { motion } from "framer-motion";

const layers = [
  {
    emoji: "🏢",
    title: "Source Systems",
    desc: "Transactional DBs · POS Systems · APIs · CSV / JSON feeds",
    border: "border-gray-500",
    glow: "",
  },
  {
    emoji: "🪣",
    title: "AWS S3 (Data Lake)",
    desc: "Centralized object storage · Parquet, ORC, Delta format · Partitioned by date",
    border: "border-teal-500",
    glow: "shadow-teal-500/30",
  },
  {
    emoji: "🥉",
    title: "Bronze Layer",
    desc: "Raw ingestion · Schema-on-read · Immutable records · Full audit trail",
    border: "border-orange-700",
    glow: "shadow-orange-700/30",
  },
  {
    emoji: "🥈",
    title: "Silver Layer",
    desc: "Cleaned & deduped · SCD Type 2 · Data quality checks · Business keys",
    border: "border-gray-400",
    glow: "shadow-gray-400/30",
  },
  {
    emoji: "🥇",
    title: "Gold Layer",
    desc: "Aggregated KPIs · Star schema · Business-ready · Serving layer",
    border: "border-yellow-400",
    glow: "shadow-yellow-400/30",
  },
  {
    emoji: "🏛️",
    title: "Amazon Redshift",
    desc: "Columnar DWH · Distribution keys · Sort keys · RA3 nodes",
    border: "border-teal-400",
    glow: "shadow-teal-400/30",
  },
  {
    emoji: "📊",
    title: "BI & Analytics",
    desc: "QuickSight · Tableau · Power BI · Self-service dashboards",
    border: "border-purple-500",
    glow: "shadow-purple-500/30",
  },
];

export default function MedallionArchitecture() {
  return (
    <section id="medallion" className="py-20 px-4 bg-gray-950">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-2">
            System Design
          </p>
          <h2 className="text-4xl font-bold text-white">
            Medallion{" "}
            <span className="text-teal-400">Architecture</span>
          </h2>
          <p className="text-gray-400 mt-3 text-base">
            The battle-tested layered data architecture powering enterprise pipelines.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-0">
          {layers.map((layer, i) => (
            <div key={i} className="flex flex-col items-center w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`w-full rounded-2xl border ${layer.border} bg-gray-900 shadow-lg ${layer.glow} p-5 text-center`}
              >
                <div className="text-3xl mb-2">{layer.emoji}</div>
                <h3 className="text-white font-bold text-lg">{layer.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{layer.desc}</p>
              </motion.div>

              {i < layers.length - 1 && (
                <div className="flex flex-col items-center my-1">
                  <div className="w-0.5 h-5 bg-teal-500"></div>
                  <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-teal-500"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
