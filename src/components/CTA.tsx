import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function CTA() {
  const { ref, isVisible } = useInView()

  return (
    <section id="contact" ref={ref} className="py-24 sm:py-32 relative overflow-hidden bg-white dark:bg-[#0a0a0f]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-healthcare/5
          dark:from-primary/10 dark:via-accent/5 dark:to-healthcare/5" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full
          bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full
          bg-gradient-to-br from-healthcare/10 to-primary/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — CTA text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight
              text-text-dark dark:text-white">
              Ready to Transform{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Healthcare?
              </span>
            </h2>
            <p className="mt-6 text-lg text-text-muted dark:text-gray-400 leading-relaxed">
              Join hundreds of hospitals and millions of patients already using AROGION
              to revolutionize healthcare management.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-2xl text-white
                  bg-gradient-to-r from-primary to-accent
                  hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5
                  transition-all duration-300"
              >
                Partner with AROGION
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-2xl
                  border-2 border-gray-200 text-text-dark hover:border-primary hover:text-primary
                  dark:border-[#2a2a3a] dark:text-white dark:hover:border-primary-light dark:hover:text-primary-light
                  transition-all duration-300"
              >
                Get Early Access
              </a>
            </div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="p-8 sm:p-10 rounded-3xl
              bg-white/80 backdrop-blur-sm border border-gray-200/60
              dark:bg-[#12121a]/80 dark:border-[#1e1e2e]
              shadow-xl shadow-primary/5">
              <h3 className="text-xl font-bold text-text-dark dark:text-white mb-6">
                Contact Our Team
              </h3>
              <form className="space-y-5" onSubmit={e => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-text-muted dark:text-gray-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl text-sm
                      bg-gray-50 border border-gray-200 text-text-dark placeholder-gray-400
                      focus:ring-2 focus:ring-primary/30 focus:border-primary
                      dark:bg-[#0a0a0f] dark:border-[#1e1e2e] dark:text-white dark:placeholder-gray-600
                      dark:focus:ring-primary-light/30 dark:focus:border-primary-light
                      transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-muted dark:text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@hospital.com"
                    className="w-full px-4 py-3 rounded-xl text-sm
                      bg-gray-50 border border-gray-200 text-text-dark placeholder-gray-400
                      focus:ring-2 focus:ring-primary/30 focus:border-primary
                      dark:bg-[#0a0a0f] dark:border-[#1e1e2e] dark:text-white dark:placeholder-gray-600
                      dark:focus:ring-primary-light/30 dark:focus:border-primary-light
                      transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-muted dark:text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your needs..."
                    className="w-full px-4 py-3 rounded-xl text-sm resize-none
                      bg-gray-50 border border-gray-200 text-text-dark placeholder-gray-400
                      focus:ring-2 focus:ring-primary/30 focus:border-primary
                      dark:bg-[#0a0a0f] dark:border-[#1e1e2e] dark:text-white dark:placeholder-gray-600
                      dark:focus:ring-primary-light/30 dark:focus:border-primary-light
                      transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 text-sm font-semibold rounded-xl text-white
                    bg-gradient-to-r from-primary to-accent
                    hover:shadow-lg hover:shadow-primary/25
                    transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
