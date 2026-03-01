import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function About() {
  const { ref, isVisible } = useInView()

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 sm:py-32 bg-light-secondary dark:bg-[#0d0d14]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-widest
              bg-primary/10 text-primary dark:bg-primary-light/10 dark:text-primary-light">
              About Us
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight
              text-text-dark dark:text-white">
              Transforming Healthcare{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Through Technology
              </span>
            </h2>
            <p className="mt-6 text-lg text-text-muted dark:text-gray-400 leading-relaxed">
              AROGION is a healthcare technology company dedicated to bridging the gap between
              patients, doctors, and hospitals through intelligent digital solutions. We believe
              healthcare should be accessible, efficient, and powered by the latest innovations in AI.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { title: 'Our Vision', desc: 'A world where every patient has instant access to quality healthcare through technology.' },
                { title: 'Our Mission', desc: 'To digitize and streamline healthcare management for hospitals and patients using AI-driven platforms.' },
              ].map(item => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-text-dark dark:text-white">{item.title}</h3>
                    <p className="mt-1 text-text-muted dark:text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12
              bg-gradient-to-br from-primary/5 via-accent/5 to-healthcare/5
              border border-gray-200/60 dark:border-[#1e1e2e]
              dark:from-primary/10 dark:via-accent/10 dark:to-healthcare/10">
              {/* Decorative grid */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: '🏥', value: '500+', label: 'Partner Hospitals' },
                  { icon: '👨‍⚕️', value: '10K+', label: 'Doctors' },
                  { icon: '📱', value: '1M+', label: 'App Users' },
                  { icon: '🔬', value: '50M+', label: 'Records Managed' },
                ].map(stat => (
                  <div
                    key={stat.label}
                    className="text-center p-6 rounded-2xl
                      bg-white/80 dark:bg-[#12121a]/80
                      border border-gray-100 dark:border-[#1e1e2e]
                      shadow-sm"
                  >
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-text-dark dark:text-white">{stat.value}</div>
                    <div className="text-sm text-text-muted dark:text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
              {/* Accent decoration */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full
                bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
