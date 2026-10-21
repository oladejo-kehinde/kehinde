import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { navLinks } from '../Data/data'

const iconButton =
  'flex h-10 w-10 md:h-9 md:w-9 items-center justify-center rounded-full border border-primary/20 ' +
  'text-muted-text transition-all hover:border-primary hover:text-accent ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'

function ThemeIcon({ theme }) {
  return theme === 'dark' ? (
    /* moon icon */
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.752 15.002A9 9 0 1112.998 2.248 7 7 0 0021.752 15.002z" />
    </svg>
  ) : (
    /* sun icon */
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

export default function Nav({ scrolled }) {
  const { pathname } = useLocation()

  const [active, setActive] = useState(navLinks[0]?.href ?? '#home')
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

  // Restarts whenever the page changes, because the home sections
  // only exist while i am on the home page.
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
  }, [pathname])

  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const cycleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))
  const navShellClass = scrolled || theme === 'dark'
    ? 'bg-card/95 border border-primary/20 shadow-2xl shadow-black/40'
    : 'bg-white/70 border border-white/20 shadow-lg'

  return (
    
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-4 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}
    >
      <div
        className={`w-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 backdrop-blur-md ${navShellClass}`}
      >
        <Logo />

        {/* Desktop links. "/#about" works from the home page and from a project page. */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                to={`/${href}`}
                onClick={() => setActive(href)}
                className={`nav-link font-semibold text-sm transition-colors
                  ${active === href ? 'active text-accent' : 'text-muted-text hover:text-base-text'}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            className={iconButton}
            onClick={cycleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <ThemeIcon theme={theme} />
          </button>

          <Link
            to="/#contact"
            className="hidden md:inline-flex bg-primary text-black font-bold text-sm px-5 py-2.5 rounded-full
              hover:bg-primary-shade hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 transition-all"
          >
            Let's Talk
          </Link>

          <button
            type="button"
            className={`${iconButton} md:hidden`}
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open
                ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu: same width as the pill, scrolls if the screen is short */}
      {open && (
        <div id="mobile-menu" className="md:hidden w-full max-w-7xl mt-2">
          <div className="bg-card border border-primary/10 rounded-2xl p-5 flex flex-col gap-4 max-h-[calc(100svh-6rem)] overflow-y-auto shadow-xl shadow-black/10">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                to={`/${href}`}
                onClick={() => { setActive(href); setOpen(false) }}
                aria-current={active === href ? 'page' : undefined}
                className={`font-medium text-sm ${active === href ? 'text-accent' : 'text-muted-text'}`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/#contact"
              onClick={() => setOpen(false)}
              className="bg-primary text-black font-bold text-sm px-5 py-2.5 rounded-full text-center mt-2"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}