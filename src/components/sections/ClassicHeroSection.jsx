import { COMPANY } from '../../utils/constants';
import { scrollToSection } from '../../utils/scrollTo';
import { HiSparkles } from 'react-icons/hi';
import './ClassicHeroSection.css';

export default function ClassicHeroSection() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center bg-navy-dark overflow-hidden classic-hero">
      {/* Cinematic Full-Bleed Background Container */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="/Fortuna-Packaging/images/brochure/company-plant.jpg"
          alt="Fortuna Packaging manufacturing facility"
          className="w-full h-full object-cover opacity-60 scale-105 filter brightness-[0.65] contrast-[1.05]"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
        />
        {/* Modern high-tech Grid Matrix Overlay */}
        <div className="classic-hero-grid-overlay absolute inset-0 opacity-15" />
        {/* Premium multi-layered gradients for maximum text readability & contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-navy-dark/45" />
      </div>

      {/* Floating ultra-premium glowing ambient orbs (soft pulsing color gradients) */}
      <div className="absolute top-20 right-10 w-[35rem] h-[35rem] bg-red/10 rounded-full filter blur-[130px] select-none pointer-events-none z-0 animate-pulse classic-hero-pulse-red" />
      <div className="absolute -bottom-20 left-10 w-[30rem] h-[30rem] bg-emerald-500/5 rounded-full filter blur-[150px] select-none pointer-events-none z-0 animate-pulse classic-hero-pulse-green" />

      {/* Hero Content Area */}
      <div className="section-container relative z-10 w-full pt-32 pb-24 md:py-40 flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Core Branding & Text */}
          <div className="flex flex-col items-center">
            {/* Floating Neon Branding Tag */}
            <div className="classic-hero-enter classic-hero-enter-delay-1 inline-flex items-center gap-1.5 bg-red/10 border border-red/25 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md shadow-lg shadow-red/5">
              <HiSparkles className="text-red animate-pulse" size={14} />
              <span className="text-[10px] font-extrabold text-red uppercase tracking-widest leading-none">
                ★ Next-Gen Flexible Packaging
              </span>
            </div>

            <p className="classic-hero-enter classic-hero-enter-delay-1 text-slate-300 font-bold text-sm md:text-base uppercase tracking-widest mb-3 drop-shadow-sm">
              {COMPANY.tagline}
            </p>
            
            <h1 className="classic-hero-enter classic-hero-enter-delay-2 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight font-display mb-6 tracking-tight drop-shadow-md">
              {COMPANY.heroTitle}{' '}
              <span className="bg-gradient-to-r from-red to-red-hover bg-clip-text text-transparent block md:inline drop-shadow-none">{COMPANY.heroHighlight}</span>
            </h1>
            
            <p className="classic-hero-enter classic-hero-enter-delay-3 text-slate-200 text-base md:text-lg lg:text-xl leading-relaxed mb-10 max-w-xl font-light">
              {COMPANY.heroDescription}
            </p>
            
            <div className="classic-hero-enter classic-hero-enter-delay-3 flex flex-wrap justify-center gap-4 items-center">
              <button 
                type="button" 
                onClick={() => scrollToSection('#products')} 
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-red to-red-hover text-white font-semibold text-sm tracking-wide shadow-lg shadow-red/25 hover:shadow-[0_0_35px_rgba(211,47,47,0.45)] transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                Explore Products
              </button>
              <button 
                type="button" 
                onClick={() => scrollToSection('#contact')} 
                className="px-8 py-4 rounded-lg border-2 border-white/80 text-white font-semibold text-sm tracking-wide hover:bg-white hover:text-navy-dark hover:border-white transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                Contact Us
              </button>
              
              {/* Premium glassmorphic experience badge */}
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/15 px-5 py-3 shadow-lg ml-0 md:ml-4">
                <span className="text-3xl font-extrabold text-red drop-shadow-md">25+</span>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-slate-300 uppercase tracking-widest font-semibold leading-none">Years</span>
                  <span className="text-xs text-white font-bold tracking-wide uppercase leading-tight">Experience</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
