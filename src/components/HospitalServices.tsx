import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const hospitalFeatures = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: 'Hospital Management System',
    desc: 'Complete digital management for hospital operations, departments, and workflows.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: 'Doctor & Staff Management',
    desc: 'Manage doctor profiles, schedules, availability, and department assignments effortlessly.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Appointment Scheduling',
    desc: 'Smart scheduling system that manages patient flow, reduces wait times, and optimizes doctor time.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: 'Digital Records & Prescriptions',
    desc: 'Go paperless with digital medical records, prescriptions, and automated report generation.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: 'Billing & Insurance',
    desc: 'Automate billing, process insurance claims, and generate financial reports with ease.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: 'AI Automation & Insights',
    desc: 'Leverage AI for predictive analytics, resource optimization, and operational intelligence.',
  },
]

export default function HospitalServices() {
  const { ref, isVisible } = useInView()

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-light-secondary dark:bg-[#0d0d14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-widest
            bg-accent/10 text-accent dark:bg-accent-light/10 dark:text-accent-light">
            For Hospitals
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold
            text-text-dark dark:text-white">
            Powerful Tools for{' '}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Modern Hospitals
            </span>
          </h2>
          <p className="mt-4 text-lg text-text-muted dark:text-gray-400">
            Streamline hospital operations with our comprehensive digital management platform.
          </p>
        </motion.div>

        {/* Dashboard-style cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hospitalFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-8 rounded-2xl transition-all duration-300
                bg-white border border-gray-100 hover:border-accent/30
                hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1
                dark:bg-[#12121a] dark:border-[#1e1e2e] dark:hover:border-accent/40
                dark:hover:shadow-accent/10"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6
                bg-gradient-to-br from-accent/10 to-primary/10 text-accent
                group-hover:from-accent group-hover:to-primary group-hover:text-white
                dark:text-accent-light dark:from-accent/20 dark:to-primary/20
                transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-text-dark dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-text-muted dark:text-gray-400 leading-relaxed">
                {feature.desc}
              </p>
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-8 right-8 h-px
                bg-gradient-to-r from-transparent via-accent/0 to-transparent
                group-hover:via-accent/50 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
