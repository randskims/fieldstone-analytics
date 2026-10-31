'use client'
import { motion } from 'framer-motion'

const benefits = [
  {
    heading: 'Radically Cheaper',
    sub: 'Economics',
    body: 'A full decision for a small fraction of the energy and data footprint a conventional pipeline needs — so inference runs on a commodity microcontroller, not in a data center. Cost and power stop deciding where intelligence can live.',
    stat: '↓',
    statLabel: 'Energy per Decision',
  },
  {
    heading: 'Auditable by Design',
    sub: 'Trust',
    body: 'The whole decision is a ≤256-entry table you can inspect and verify. No black box — reproducible bit-for-bit, every time.',
    stat: '=',
    statLabel: 'Inspectable Decisions',
  },
  {
    heading: 'Private by Construction',
    sub: 'Privacy',
    body: 'The raw waveform never leaves the device — only the byte does. Confidentiality is a property of the architecture, not a policy bolted on.',
    stat: '∅',
    statLabel: 'Raw Data Off-Device',
  },
  {
    heading: 'Safe at the Edge',
    sub: 'Safety',
    body: 'An always-on competence interlock — an independent, deterministic channel that flags when inputs leave the trained envelope.',
    stat: '△',
    statLabel: 'Out-of-Envelope Flags',
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function WhyItMatters() {
  return (
    <section id="why" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-35 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(129,140,248,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-indigo-400/40" />
            <span className="text-[11px] font-mono text-indigo-400/60 tracking-[0.22em] uppercase">
              Why It Matters
            </span>
            <div className="h-px w-8 bg-indigo-400/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="text-4xl md:text-5xl font-extralight text-slate-100 leading-tight"
          >
            The Case for
            <br />
            <span className="text-indigo-400/80">the Decision Token</span>
          </motion.h2>
        </div>

        {/* Benefit cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {benefits.map(({ heading, sub, body, stat, statLabel }) => (
            <motion.div
              key={heading}
              variants={itemVariants}
              className="interactive-panel group relative bg-[#0d0d16]/60 border border-white/[0.05] rounded-[3px] p-8 overflow-hidden"
              style={{ ['--panel-glow-rgb' as string]: '129 140 248', ['--panel-glow-x' as string]: '78%', ['--panel-glow-y' as string]: '18%' }}
            >
              <div className="panel-accent-line absolute top-0 inset-x-6 h-px bg-gradient-to-r from-transparent via-indigo-400/45 to-transparent" />

              {/* Large stat symbol */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="absolute top-7 right-8 text-5xl font-extralight text-indigo-400/10 group-hover:text-indigo-400/20 transition-colors duration-300 select-none leading-none font-mono"
              >
                {stat}
              </motion.div>

              <div className="mb-1">
                <span className="panel-label text-[10px] font-mono text-indigo-400/50 tracking-widest uppercase">
                  {sub}
                </span>
              </div>

              <h3 className="panel-title text-2xl font-extralight text-slate-100 mb-4 leading-snug">{heading}</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light">{body}</p>

              <div className="mt-6 flex items-center gap-2">
                <div className="h-px flex-1 bg-white/[0.04]" />
                <span className="panel-detail text-[10px] font-mono text-indigo-400/35 tracking-widest uppercase">
                  {statLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
