import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden
        bg-white dark:bg-[#0a0a0f]"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20
          bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl dark:opacity-10" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-15
          bg-gradient-to-tr from-healthcare/30 to-primary/30 blur-3xl dark:opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full
          bg-gradient-to-r from-primary/5 to-accent/5 blur-3xl dark:from-primary/3 dark:to-accent/3" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle, #2563eb 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
              bg-primary/10 text-primary border border-primary/20
              dark:bg-primary-light/10 dark:text-primary-light dark:border-primary-light/20">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Healthcare Technology Platform
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight
              text-text-dark dark:text-white"
          >
            One Platform.{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-healthcare bg-clip-text text-transparent">
              Complete Healthcare
            </span>{' '}
            Management.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-lg sm:text-xl text-text-muted dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Seamlessly manage appointments, digital records, AI-powered health insights,
            and hospital operations — all in one secure, intelligent platform.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-2xl text-white
                bg-gradient-to-r from-primary to-accent
                hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5
                transition-all duration-300"
            >
              Explore Features
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-2xl transition-all duration-300
                border-2 border-gray-200 text-text-dark hover:border-primary hover:text-primary
                dark:border-[#2a2a3a] dark:text-white dark:hover:border-primary-light dark:hover:text-primary-light"
            >
              Contact Us
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8"
          >
            {[
              { value: '500+', label: 'Hospitals' },
              { value: '1M+', label: 'Patients Served' },
              { value: '99.9%', label: 'Uptime' },
              { value: '24/7', label: 'AI Support' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-text-muted dark:text-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32
        bg-gradient-to-t from-white to-transparent dark:from-[#0a0a0f]" />
    </section>
  )
}
