import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const aiFeatures = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    title: 'AI-Assisted Experience',
    desc: 'Intelligent interface that adapts to user needs, providing personalized health dashboards and recommendations.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: 'Smart Doctor Recommendations',
    desc: 'AI analyzes symptoms, location, and history to recommend the best-matched specialists for each patient.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: 'Medical Report Summarization',
    desc: 'Automatically summarize complex medical reports into clear, actionable insights for patients and doctors.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'Intelligent Analytics',
    desc: 'Real-time analytics and scheduling intelligence that helps hospitals optimize resources and reduce inefficiencies.',
  },
]

export default function AISection() {
  const { ref, isVisible } = useInView()

  return (
    <section id="ai" ref={ref} className="py-24 sm:py-32 relative overflow-hidden bg-white dark:bg-[#0a0a0f]">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full
          bg-gradient-to-r from-accent/10 to-primary/10 blur-3xl dark:opacity-30" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full
          bg-gradient-to-r from-healthcare/10 to-accent/10 blur-3xl dark:opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-widest
            bg-healthcare/10 text-healthcare dark:bg-healthcare-light/10 dark:text-healthcare-light">
            AI-Powered
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold
            text-text-dark dark:text-white">
            Intelligence That{' '}
            <span className="bg-gradient-to-r from-healthcare to-accent bg-clip-text text-transparent">
              Empowers Care
            </span>
          </h2>
          <p className="mt-4 text-lg text-text-muted dark:text-gray-400">
            AI works as an enabling layer — enhancing decisions, not replacing doctors.
            Smarter tools for better healthcare outcomes.
          </p>
        </motion.div>

        {/* AI Feature cards — 2x2 grid */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {aiFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative p-8 rounded-3xl
                bg-gradient-to-br from-white to-light-secondary
                border border-gray-100
                dark:from-[#12121a] dark:to-[#0d0d14] dark:border-[#1e1e2e]
                hover:shadow-xl hover:shadow-healthcare/5 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6
                bg-gradient-to-br from-healthcare/10 to-accent/10 text-healthcare
                dark:from-healthcare/15 dark:to-accent/15 dark:text-healthcare-light">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-text-dark dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-text-muted dark:text-gray-400 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center text-sm text-text-muted dark:text-gray-500 max-w-xl mx-auto"
        >
          AROGION AI is designed as a support tool. It does not provide medical diagnoses.
          All medical decisions are made by licensed professionals.
        </motion.p>
      </div>
    </section>
  )
}
