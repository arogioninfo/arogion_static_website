export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-[#0a0a0f] border-t border-gray-200/60 dark:border-[#1e1e2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-text-dark dark:text-white tracking-tight">
                AROGION
              </span>
            </div>
            <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed max-w-xs">
              Transforming healthcare through technology. One platform for patients, doctors, and hospitals.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {['Twitter', 'LinkedIn', 'GitHub'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-medium
                    bg-gray-100 text-text-muted hover:bg-primary hover:text-white
                    dark:bg-[#12121a] dark:text-gray-400 dark:hover:bg-primary dark:hover:text-white
                    transition-all duration-300"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-text-dark dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'For Patients', 'For Hospitals', 'AI Features'].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-text-muted dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-text-dark dark:text-white mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {['Documentation', 'API Reference', 'Security', 'Privacy Policy', 'Terms of Service'].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-text-muted dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-text-dark dark:text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-text-muted dark:text-gray-400">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-primary dark:text-primary-light flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                contact@arogion.com
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-primary dark:text-primary-light flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                +1 (800) AROGION
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-primary dark:text-primary-light flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Healthcare Innovation Hub
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-200/60 dark:border-[#1e1e2e]
          flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-muted dark:text-gray-500">
            &copy; {currentYear} AROGION. All rights reserved.
          </p>
          <p className="text-sm text-text-muted dark:text-gray-500">
            Healthcare Technology for a Better Tomorrow
          </p>
        </div>
      </div>
    </footer>
  )
}
