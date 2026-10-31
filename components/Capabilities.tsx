'use client'
import { motion } from 'framer-motion'
import { Binary, Zap, ShieldCheck, Activity, Layers } from 'lucide-react'

const capabilities = [
  {
    Icon: Binary,
    label: '01',
    title: 'The Decision Token',
    body: 'A window of signal → a class-discriminant subspace → a ≤256-cell codebook → one 8-bit token. The lookup table is the decision, computed bit-exactly in microseconds.',
    accent: '#38bdf8',
  },
  {
    Icon: Zap,
    label: '02',
    title: 'Extreme Efficiency',
    body: '10–60× less inference energy and ~150–4,000× fewer bytes than conventional pipelines. Bandwidth and power stop being the constraint on where intelligence can live.',
    accent: '#38bdf8',
  },
  {
    Icon: ShieldCheck,
    label: '03',
    title: 'Auditable & Deterministic',
    body: 'The entire decision function is a lookup table of at most 256 entries — inspectable, reproducible bit-for-bit, and built for regulated and safety-critical use (EU AI Act, IEC 61508).',
    accent: '#818cf8',
  },
  {
    Icon: Activity,
    label: '04',
    title: 'Always-On Safety Interlock',
    body: 'The same frozen token runs as an independent Tier-0 competence monitor — a deterministic second channel that flags when inputs drift outside the commissioned envelope.',
    accent: '#818cf8',
  },
  {
    Icon: Layers,
    label: '05',
    title: 'Cross-Modality Reach',
    body: 'One primitive, validated across more than a dozen sensing modalities — vibration, ECG, acoustic, radar, RF, wearable PPG, quantum readout, and agentic-AI traces.',
    accent: '#38bdf8',
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-32 px-6 overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 dot-bg opacity-60 pointer-events-none" />

      {/* Top glow */}
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(28,135,215,0.15), transparent)' }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-brand-400/50" />
            <span className="text-[11px] font-mono text-brand-400/65 tracking-[0.22em] uppercase">
              Core Capabilities
            </span>
            <div className="h-px w-8 bg-brand-400/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="text-4xl md:text-5xl font-extralight text-slate-100 leading-tight mb-4"
          >
            Built for the Edge,
            <br />
            <span className="text-brand-400/85">Designed for Trust</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="max-w-xl mx-auto text-slate-400 font-light leading-relaxed"
          >
            Five composable capabilities — from the core encoder to always-on safety and cross-modality reach.
          </motion.p>
        </div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {capabilities.map(({ Icon, label, title, body, accent }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="interactive-panel group relative bg-[#0d0d16]/70 border border-white/[0.05] rounded-[3px] p-8 overflow-hidden"
              style={{ ['--panel-glow-rgb' as string]: accent === '#38bdf8' ? '56 189 248' : '129 140 248' }}
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-6 bottom-6 w-[2px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to bottom, transparent, ${accent}, transparent)` }}
              />

              <div
                className="panel-accent-line absolute top-0 inset-x-6 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${accent}66, transparent)` }}
              />

              {/* Corner number */}
              <span className="panel-label absolute top-6 right-7 text-[11px] font-mono text-slate-700 tracking-widest">
                {label}
              </span>

              {/* Icon */}
              <div
                className="panel-icon w-10 h-10 rounded-sm flex items-center justify-center mb-6 border border-white/[0.06]"
                style={{ background: `rgba(${accent === '#38bdf8' ? '28,135,215' : '129,140,248'},0.07)` }}
              >
                <Icon
                  size={18}
                  style={{ color: accent, opacity: 0.8 }}
                />
              </div>

              <h3 className="panel-title text-[17px] font-light text-slate-200 mb-3 leading-snug">{title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light">{body}</p>

              {/* Hover corner glow */}
              <div
                className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 100% 100%, ${accent}18 0%, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}

          {/* Final card — composition principle */}
          <motion.div
            variants={cardVariants}
            className="hidden lg:block bg-[#0d0d16]/30 border border-white/[0.03] rounded-[3px] p-8"
          >
            <div className="h-full flex flex-col justify-end">
              <div className="text-[11px] font-mono text-slate-700 tracking-widest uppercase mb-2">Composable</div>
              <p className="text-sm text-slate-700 font-light leading-relaxed">
                The platform composes across orthogonal axes — capabilities stack without interference, always at the cheapest-sufficient frontier.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
