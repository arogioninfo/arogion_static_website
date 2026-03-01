import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const securityFeatures = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Data Privacy',
    desc: 'End-to-end encryption ensures all patient data remains private and secure at every stage.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'Secure Records',
    desc: 'Medical records stored with military-grade encryption and multi-layer access controls.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
    title: 'Role-Based Access',
    desc: 'Granular permissions ensure only authorized personnel access specific data and functions.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
      </svg>
    ),
    title: 'Compliance Ready',
    desc: 'Architecture designed to meet healthcare compliance standards and regulatory requirements.',
  },
]

export default function Security() {
  const { ref, isVisible } = useInView()

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-light-secondary dark:bg-[#0d0d14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-widest
            bg-success/10 text-success">
            Security & Trust
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold
            text-text-dark dark:text-white">
            Your Data,{' '}
            <span className="bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">
              Our Priority
            </span>
          </h2>
          <p className="mt-4 text-lg text-text-muted dark:text-gray-400">
            Built from the ground up with security, privacy, and compliance at the core.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {securityFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex gap-5 p-8 rounded-2xl
                bg-white border border-gray-100
                dark:bg-[#12121a] dark:border-[#1e1e2e]"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center
                bg-gradient-to-br from-success/10 to-primary/10 text-success
                dark:from-success/20 dark:to-primary/20">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-text-dark dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-muted dark:text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
