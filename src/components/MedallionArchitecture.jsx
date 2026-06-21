import { motion } from "framer-motion";
import Section from "./Section";

const layers = [
  { emoji: "🏢", title: "Source Systems", desc: "Transactional DBs · APIs · CSV/JSON", border: "border-teal-500/40", iconBg: "bg-teal-500/10" },
  { emoji: "🪣", title: "AWS S3 Data Lake", desc: "Parquet · ORC · Delta · Partitioned", border: "border-teal-400/50", iconBg: "bg-teal-400/10" },
  { emoji: "🥉", title: "Bronze Layer", desc: "Raw ingestion · Immutable · Audit trail", border: "border-orange-500/40", iconBg: "bg-orange-500/10" },
  { emoji: "🥈", title: "Silver Layer", desc: "Cleaned · SCD Type 2 · Quality checks", border: "border-slate-400/50", iconBg: "bg-slate-400/10" },
  { emoji: "🥇", title: "Gold Layer", desc: "Aggregated KPIs · Star schema · Serving", border: "border-yellow-400/50", iconBg: "bg-yellow-400/10" },
  { emoji: "🏛️", title: "Amazon Redshift", desc: "Columnar DWH · RA3 nodes · Sort keys", border: "border-teal-400/50", iconBg: "bg-teal-400/10" },
  { emoji: "📊", title: "BI & Analytics", desc: "QuickSight · Tableau · Power BI", border: "border-teal-500/40", iconBg: "bg-teal-500/10" },
];

export default function MedallionArchitecture() {
  return (
    <Section id="medallion" title="Medallion Architecture" subtitle="Battle-tested layered data architecture powering enterprise pipelines.">
      <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-6 -mt-4">
        System Design
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
        {layers.map((layer, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
            className={`rounded-xl border ${layer.border} glass p-4 text-center hover:-translate-y-1 transition-transform`}
          >
            <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${layer.iconBg} mb-2 text-xl`}>
              {layer.emoji}
            </div>
            <h3 className="text-white font-semibold text-sm">{layer.title}</h3>
            <p className="text-slate-400 text-xs mt-1 leading-relaxed">{layer.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Flow arrow */}
      <div className="flex justify-center mt-6">
        <div className="flex items-center gap-2 text-teal-400 text-xs font-medium tracking-wider">
          <span>SOURCE</span>
          <div className="flex gap-1">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="w-4 h-0.5 bg-teal-500/60"></div>
            ))}
          </div>
          <span>BI LAYER</span>
        </div>
      </div>
    </Section>
  );
}
