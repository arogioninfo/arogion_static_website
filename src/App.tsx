import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import PatientServices from './components/PatientServices'
import HospitalServices from './components/HospitalServices'
import AISection from './components/AISection'
import HowItWorks from './components/HowItWorks'
import TechStack from './components/TechStack'
import Security from './components/Security'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#0a0a0f] transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <PatientServices />
          <HospitalServices />
          <AISection />
          <HowItWorks />
          <TechStack />
          <Security />
          <CTA />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
