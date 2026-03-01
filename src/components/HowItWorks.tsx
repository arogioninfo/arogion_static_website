import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const steps = [
  {
    num: '01',
    title: 'Register',
    desc: 'Create your account in minutes — as a patient or hospital administrator.',
    color: 'from-primary to-primary-dark',
  },
  {
    num: '02',
    title: 'Book Appointment',
    desc: 'Search doctors by specialty, view availability, and book instantly.',
    color: 'from-accent to-primary',
  },
  {
    num: '03',
    title: 'Digital Care',
    desc: 'Hospitals manage consultations, prescriptions, and records digitally.',
    color: 'from-healthcare to-accent',
  },
  {
    num: '04',
    title: 'Track Everything',
    desc: 'Medical records, billing, insurance — all tracked and accessible.',
    color: 'from-primary to-healthcare',
  },
  {
    num: '05',
    title: 'AI Enhances',
    desc: 'AI optimizes scheduling, provides insights, and improves efficiency.',
    color: 'from-accent to-healthcare',
  },
]

export default function HowItWorks() {
  const { ref, isVisible } = useInView()

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="py-24 sm:py-32 bg-light-secondary dark:bg-[#0d0d14]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-widest
            bg-primary/10 text-primary dark:bg-primary-light/10 dark:text-primary-light">
            How It Works
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold
            text-text-dark dark:text-white">
            Simple Steps to{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Better Healthcare
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5
            bg-gradient-to-r from-primary via-accent to-healthcare opacity-20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative text-center lg:text-center"
              >
                {/* Step number circle */}
                <div className="relative z-10 mx-auto w-16 h-16 rounded-2xl flex items-center justify-center
                  bg-gradient-to-br shadow-lg mb-6"
                  style={{
                    backgroundImage: `linear-gradient(135deg, var(--color-${step.color.split(' ')[0].replace('from-', '')}), var(--color-${step.color.split(' ')[1].replace('to-', '')}))`
                  }}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${step.color} shadow-lg`}>
                    <span className="text-white font-bold text-lg">{step.num}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-text-dark dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
