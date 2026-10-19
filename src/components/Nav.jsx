import { useState, useEffect } from 'react'
import Logo from './Logo'
import { navLinks } from '../Data/data'

export default function Nav({ scrolled }) {
  const [active, setActive] = useState('#hero')
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem('theme')
      if (stored === 'dark' || stored === 'light') return stored
      if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
        return 'dark'
      }
    } catch {
      // Fall back to a safe default when storage is unavailable.
    }
    return 'light'
  })

  useEffect(() => {
    if (typeof document === 'undefined') return
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    document.documentElement.style.colorScheme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Ignore storage failures in restricted environments.
    }
  }, [theme])

  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean)

    if (sections.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry?.target?.id) {
          setActive(`#${visibleEntry.target.id}`)
        }
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0.2, 0.4, 0.6],
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const cycleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))
  const navShellClass = scrolled || theme === 'dark'
    ? 'bg-card/95 border border-primary/20 shadow-2xl shadow-black/40'
    : 'bg-white/70 border border-white/20 shadow-lg'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div
        className={`w-full max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-md ${navShellClass}`}
      >
        <Logo />

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setActive(href)}
                className={`nav-link font-poppins font-semibold text-sm transition-colors
                  ${active === href ? 'active text-primary' : 'text-muted-text hover:text-base-text'}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: theme toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            className="w-9 h-9 rounded-full border border-primary/20 flex items-center justify-center
              text-muted-text hover:border-primary hover:text-primary transition-all"
            title="Toggle theme"
            onClick={cycleTheme}
            aria-label="Toggle theme"
            aria-pressed={theme === 'dark'}
          >
            {theme === 'dark' ? (
              /* moon icon */
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.752 15.002A9 9 0 1112.998 2.248 7 7 0 0021.752 15.002z" />
              </svg>
            ) : (
              /* sun icon */
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            )}
          </button>
          <a
            href="#contact"
            className="bg-primary text-body font-poppins font-bold text-sm px-5 py-2.5 rounded-full
              hover:bg-primary-shade hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 transition-all"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-muted-text hover:text-primary transition-colors"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open
              ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
              : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden max-w-5xl mx-auto px-6 mt-2">
          <div className="bg-card border border-primary/10 rounded-2xl p-5 flex flex-col gap-4">
            {navLinks.map(({ label, href }) => (
              <a
                key={href} href={href}
                onClick={() => { setActive(href); setOpen(false) }}
                className={`font-poppins font-medium text-sm ${active === href ? 'text-primary' : 'text-muted-text'}`}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="bg-primary text-body font-bold text-sm px-5 py-2.5 rounded-full text-center mt-2"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
