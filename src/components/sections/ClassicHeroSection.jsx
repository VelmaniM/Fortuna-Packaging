import { COMPANY } from '../../utils/constants';
import { scrollToSection } from '../../utils/scrollTo';
import { HiSparkles } from 'react-icons/hi';
import './ClassicHeroSection.css';

export default function ClassicHeroSection() {
  return (
    <section className="classic-hero__section classic-hero">
      {/* Cinematic Full-Bleed Background Container */}
      <div className="classic-hero__bg-container">
        <img
          src="/Fortuna-Packaging/images/brochure/company-plant.jpg"
          alt="Fortuna Packaging manufacturing facility"
          className="classic-hero__bg-image"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
        />
        {/* Modern high-tech Grid Matrix Overlay */}
        <div className="classic-hero-grid-overlay" />
        {/* Premium multi-layered gradients for maximum text readability & contrast */}
        <div className="classic-hero__gradient-r" />
        <div className="classic-hero__gradient-t" />
      </div>

      {/* Floating ultra-premium glowing ambient orbs (soft pulsing color gradients) */}
      <div className="classic-hero-pulse-red" />
      <div className="classic-hero-pulse-green" />

      {/* Hero Content Area */}
      <div className="classic-hero__content-area">
        <div className="classic-hero__content-wrapper">
          
          {/* Core Branding & Text */}
          <div className="classic-hero__text-container">
            {/* Floating Neon Branding Tag */}
            <div className="classic-hero-enter classic-hero-enter-delay-1 classic-hero__tag">
              <HiSparkles className="classic-hero__tag-icon" size={14} />
              <span className="classic-hero__tag-text">
                ★ Next-Gen Flexible Packaging
              </span>
            </div>

            <p className="classic-hero-enter classic-hero-enter-delay-1 classic-hero__tagline">
              {COMPANY.tagline}
            </p>
            
            <h1 className="classic-hero-enter classic-hero-enter-delay-2 classic-hero__title">
              {COMPANY.heroTitle}{' '}
              <span className="classic-hero__title-highlight">{COMPANY.heroHighlight}</span>
            </h1>
            
            <p className="classic-hero-enter classic-hero-enter-delay-3 classic-hero__description">
              {COMPANY.heroDescription}
            </p>
            
            <div className="classic-hero-enter classic-hero-enter-delay-3 classic-hero__actions">
              <button 
                type="button" 
                onClick={() => scrollToSection('#products')} 
                className="classic-hero__button-primary"
              >
                Explore Products
              </button>
              <button 
                type="button" 
                onClick={() => scrollToSection('#contact')} 
                className="classic-hero__button-secondary"
              >
                Contact Us
              </button>
              
              {/* Premium glassmorphic experience badge */}
              <div className="classic-hero__badge">
                <span className="classic-hero__badge-number">25+</span>
                <div className="classic-hero__badge-text-container">
                  <span className="classic-hero__badge-text-top">Years</span>
                  <span className="classic-hero__badge-text-bottom">Experience</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
