import { motion } from "framer-motion";
import Section from "./Section";

const layers = [
  { emoji: "🏢", title: "Source Systems", desc: "Transactional DBs · APIs · CSV/JSON", border: "border-teal-500/40", iconBg: "bg-teal-500/10" },
  { emoji: "🪣", title: "AWS S3 (Data Lake)", desc: "Parquet · ORC · Delta · Partitioned by date", border: "border-teal-400/50", iconBg: "bg-teal-400/10" },
  { emoji: "🥉", title: "Bronze Layer", desc: "Raw ingestion · Immutable · Full audit trail", border: "border-orange-500/40", iconBg: "bg-orange-500/10" },
  { emoji: "🥈", title: "Silver Layer", desc: "Cleaned & deduped · SCD Type 2 · Quality checks", border: "border-slate-400/50", iconBg: "bg-slate-400/10" },
  { emoji: "🥇", title: "Gold Layer", desc: "Aggregated KPIs · Star schema · Serving layer", border: "border-yellow-400/50", iconBg: "bg-yellow-400/10" },
  { emoji: "🏛️", title: "Amazon Redshift", desc: "Columnar DWH · RA3 nodes · Sort keys", border: "border-teal-400/50", iconBg: "bg-teal-400/10" },
  { emoji: "📊", title: "BI & Analytics", desc: "QuickSight · Tableau · Power BI", border: "border-teal-500/40", iconBg: "bg-teal-500/10" },
];

export default function MedallionArchitecture() {
  return (
    <Section id="medallion" title="Medallion Architecture" subtitle="The battle-tested layered data architecture powering enterprise pipelines.">
      <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-6 -mt-4">
        System Design
      </p>

      <div className="flex flex-col items-center gap-0 max-w-lg mx-auto">
        {layers.map((layer, i) => (
          <div key={i} className="flex flex-col items-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
              className={`w-full rounded-xl border ${layer.border} glass px-4 py-3 flex items-center gap-3`}
            >
              <div className={`inline-flex items-center justify-center w-9 h-9 rounded-lg ${layer.iconBg} text-lg shrink-0`}>
                {layer.emoji}
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold text-sm">{layer.title}</h3>
                <p className="text-slate-400 text-xs mt-0.5">{layer.desc}</p>
              </div>
            </motion.div>

            {i < layers.length - 1 && (
              <div className="flex flex-col items-center my-0.5">
                <div className="w-0.5 h-4 bg-teal-500/60"></div>
                <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[6px] border-l-transparent border-r-transparent border-t-teal-500"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
