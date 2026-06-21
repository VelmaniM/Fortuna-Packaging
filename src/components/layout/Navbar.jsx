import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { HiMenuAlt3, HiX, HiMoon, HiSun } from 'react-icons/hi';
import FortunaLogo from '../ui/FortunaLogo';
import { NAV_LINKS } from '../../utils/constants';
import { scrollToSection } from '../../utils/scrollTo';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const ticking = useRef(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        ticking.current = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Handle hash scrolling if navigating from another page
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      setTimeout(() => {
        scrollToSection(location.hash);
      }, 100);
    }
  }, [location]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/' + href);
      } else {
        scrollToSection(href);
      }
    } else {
      navigate(href);
    }
  };

  return (
    <header
      className={`navbar dark:text-white ${
        scrolled 
          ? 'navbar--scrolled text-slate-700 dark:border-b dark:border-gray-800' 
          : 'navbar--transparent text-white'
      }`}
    >
      <nav className="navbar__container">
        <div className="navbar__brand group">
          <FortunaLogo size="md" />
        </div>

        <ul className="navbar__menu">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="navbar__link group"
              >
                {link.label}
                <span className="navbar__link-underline"></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full text-current hover:bg-gray-100/20 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <HiSun size={22} /> : <HiMoon size={22} />}
          </button>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="navbar__cta hidden md:inline-flex"
          >
            Get in Touch
          </a>

          <button
            type="button"
            className="navbar__mobile-toggle md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="navbar__mobile-menu">
          <ul className="navbar__mobile-list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="navbar__mobile-link"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="navbar__mobile-cta-wrapper">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="navbar__mobile-cta"
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
