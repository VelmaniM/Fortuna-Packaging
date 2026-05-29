import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import FortunaLogo from '../ui/FortunaLogo';
import { NAV_LINKS } from '../../utils/constants';
import { scrollToSection } from '../../utils/scrollTo';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const ticking = useRef(false);
  const navigate = useNavigate();
  const location = useLocation();

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/85 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-white/20 py-3' 
          : 'bg-white py-4'
      }`}
    >
      <nav className="section-container flex items-center justify-between">
        <div className="group transition-transform duration-300 hover:scale-105">
          <FortunaLogo size="md" />
        </div>

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-sm font-bold text-slate-600 hover:text-red transition-colors duration-300 group py-1 tracking-wide"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red transition-all duration-300 group-hover:w-full rounded-full opacity-0 group-hover:opacity-100"></span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className="hidden lg:inline-flex btn-primary text-sm py-2.5 px-6"
        >
          Get in Touch
        </a>

        <button
          type="button"
          className="lg:hidden text-navy p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg">
          <ul className="py-4 px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-3 text-navy font-medium border-b border-border last:border-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="btn-primary w-full text-center"
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
