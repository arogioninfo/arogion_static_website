import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const technologies = [
  { name: 'React', category: 'Frontend', color: 'from-[#61DAFB]/20 to-[#61DAFB]/5 text-[#61DAFB]' },
  { name: 'Node.js', category: 'Backend', color: 'from-[#339933]/20 to-[#339933]/5 text-[#339933]' },
  { name: 'TypeScript', category: 'Language', color: 'from-[#3178C6]/20 to-[#3178C6]/5 text-[#3178C6]' },
  { name: 'Python', category: 'AI/ML', color: 'from-[#3776AB]/20 to-[#3776AB]/5 text-[#3776AB]' },
  { name: 'PostgreSQL', category: 'Database', color: 'from-[#4169E1]/20 to-[#4169E1]/5 text-[#4169E1]' },
  { name: 'AWS Cloud', category: 'Infrastructure', color: 'from-[#FF9900]/20 to-[#FF9900]/5 text-[#FF9900]' },
  { name: 'TensorFlow', category: 'AI Engine', color: 'from-[#FF6F00]/20 to-[#FF6F00]/5 text-[#FF6F00]' },
  { name: 'Docker', category: 'DevOps', color: 'from-[#2496ED]/20 to-[#2496ED]/5 text-[#2496ED]' },
]

export default function TechStack() {
  const { ref, isVisible } = useInView()

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-white dark:bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-widest
            bg-primary/10 text-primary dark:bg-primary-light/10 dark:text-primary-light">
            Technology
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold
            text-text-dark dark:text-white">
            Built With{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Modern Tech
            </span>
          </h2>
          <p className="mt-4 text-lg text-text-muted dark:text-gray-400">
            Enterprise-grade technology stack designed for security, scalability, and performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`relative p-6 rounded-2xl text-center
                bg-gradient-to-br ${tech.color}
                border border-gray-100 dark:border-[#1e1e2e]
                hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-2xl font-bold mb-1">{tech.name}</div>
              <div className="text-xs uppercase tracking-wider opacity-70">{tech.category}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
