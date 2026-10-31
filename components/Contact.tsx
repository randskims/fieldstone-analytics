'use client'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-bg opacity-50 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 50% at 50% 50%, rgba(28,135,215,0.04) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent 5%, rgba(28,135,215,0.12) 50%, transparent 95%)' }}
      />

      <div className="relative max-w-2xl mx-auto text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-7"
        >
          <div className="h-px w-8 bg-brand-400/50" />
          <span className="text-[11px] font-mono text-brand-400/65 tracking-[0.22em] uppercase">
            Get in Touch
          </span>
          <div className="h-px w-8 bg-brand-400/50" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.08 }}
          className="text-4xl md:text-5xl font-extralight text-slate-100 leading-[1.12] mb-7"
        >
          Let&apos;s Build Something
          <br />
          <span className="text-brand-400/85">Precise</span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="max-w-xl mx-auto text-slate-400 font-light leading-relaxed text-[17px] mb-12"
        >
          Whether you&apos;re working on edge intelligence, condition monitoring, safety-critical
          AI, or a modeling challenge of your own — we&apos;d like to hear about it.
        </motion.p>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.26 }}
          className="interactive-panel relative max-w-lg mx-auto bg-[#0d0d16]/60 border border-white/[0.05] rounded-[3px] p-10 overflow-hidden text-left"
          style={{ ['--panel-glow-rgb' as string]: '56 189 248' }}
        >
          <div className="panel-accent-line absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-brand-400/35 to-transparent" />

          {/* General inbox */}
          <a
            href="mailto:support@fieldstoneanalyticsllc.com"
            className="interactive-link flex items-center gap-3 text-[15px] font-mono text-slate-300 mb-7"
          >
            <Mail size={16} className="text-brand-400/70 shrink-0" />
            support@fieldstoneanalyticsllc.com
          </a>

          {/* Founders */}
          <div className="space-y-3 text-[13px] mb-7">
            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="text-slate-500">Randolph J. Ferlic, M.D.</span>
              <a href="mailto:randolphf@fieldstoneanalyticsllc.com" className="interactive-link font-mono text-slate-400">
                randolphf@fieldstoneanalyticsllc.com
              </a>
            </div>
            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="text-slate-500">Kimberly K. Ferlic</span>
              <a href="mailto:kimberlyf@fieldstoneanalyticsllc.com" className="interactive-link font-mono text-slate-400">
                kimberlyf@fieldstoneanalyticsllc.com
              </a>
            </div>
          </div>

          {/* Research & publications */}
          <div className="pt-6 border-t border-white/[0.06] flex flex-wrap gap-x-5 gap-y-2 text-[12px] font-mono">
            <a href="/publications/" className="interactive-link text-brand-400/70">Publications</a>
            <a href="https://zenodo.org/communities/spiral-domain-encoder-campaign/" className="interactive-link text-brand-400/70">Zenodo</a>
            <a href="https://orcid.org/0009-0006-2367-5205" className="interactive-link text-brand-400/70">ORCID · RJF</a>
            <a href="https://orcid.org/0009-0007-3012-3430" className="interactive-link text-brand-400/70">ORCID · KKF</a>
            <a href="https://scholar.google.com/citations?user=_gk_V5oAAAAJ" className="interactive-link text-brand-400/70">Scholar · RJF</a>
            <a href="https://scholar.google.com/citations?user=NigHWo4AAAAJ" className="interactive-link text-brand-400/70">Scholar · KKF</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
