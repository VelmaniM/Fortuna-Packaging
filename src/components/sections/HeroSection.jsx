import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiSparkles, HiArrowRight } from 'react-icons/hi';
import { COMPANY } from '../../utils/constants';
import './HeroSection.css';

export default function HeroSection() {
  const navigate = useNavigate();
  const [animateJoin, setAnimateJoin] = useState(false);
  const [expandingSide, setExpandingSide] = useState(null); // 'left' or 'right'

  useEffect(() => {
    // Trigger the join animation after component mounts
    const timer = setTimeout(() => {
      setAnimateJoin(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (path, side) => {
    setExpandingSide(side);
    // Wait for the CSS clip-path transition to finish (800ms) before navigating
    setTimeout(() => {
      navigate(path);
    }, 800);
  };

  return (
    <section id="hero" className="relative min-h-[90vh] md:min-h-screen flex items-center bg-navy-dark overflow-hidden hero-slice-container">
      
      {/* LEFT SIDE: Finished Goods */}
      <div 
        className={`hero-half hero-left ${animateJoin ? 'joined' : ''} ${expandingSide === 'left' ? 'expanding' : ''}`}
        aria-label="Finished Goods"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/Fortuna-Packaging/images/brochure/finished-goods-hero.jpg"
            alt="Finished Goods"
            className="w-full h-full object-cover scale-105 transition-transform duration-1000 group-hover:scale-100 contrast-105 brightness-105"
          />
          <div className="absolute top-0 bottom-0 left-0 w-[80%] md:w-[50%] bg-gradient-to-r from-navy-dark/80 to-transparent pointer-events-none" />
        </div>
        
        {/* Set w-[50%] on mobile to restrict flex container to left half, adjust paddings */}
        <div className="relative z-10 w-[50%] md:w-full h-full flex flex-col justify-center items-start pl-4 sm:pl-10 md:pl-20 lg:pl-32 pt-20 pr-2 md:pr-0">
          <div className={`hero-content-inner text-left w-full transition-all duration-500 hover-scale ${expandingSide === 'right' ? 'opacity-0' : 'opacity-100'}`}>
            <div className="inline-flex items-center gap-1.5 bg-white/20 border border-white/30 rounded-full px-2 py-1 sm:px-4 sm:py-1.5 mb-2 sm:mb-4 shadow-[0_4px_15px_rgba(0,0,0,0.5)] backdrop-blur-md">
              <span className="text-[8px] sm:text-[10px] font-extrabold text-white uppercase tracking-widest leading-none drop-shadow-md">
                Final Product
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight font-display mb-2 sm:mb-4 tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              Finished <br/><span className="text-red drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">Goods</span>
            </h2>
            <p className="hidden md:block text-white text-sm md:text-base leading-relaxed mb-6 font-medium max-w-sm drop-shadow-[0_2px_10px_rgba(0,0,0,1)]">
              Premium quality flexible packaging ready for the retail shelf. Discover our range of pouches, labels, and laminates.
            </p>
            <button 
              onClick={() => handleNavigate('/finished-goods', 'left')}
              className="inline-flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-8 py-2 sm:py-3.5 bg-red text-white font-bold tracking-widest uppercase text-[10px] sm:text-xs rounded-full hover:bg-red-hover hover:shadow-[0_0_20px_rgba(211,47,47,0.5)] hover:-translate-y-0.5 transition-all duration-300 group mt-2 whitespace-nowrap"
            >
              View Finished Goods <HiArrowRight className="transform group-hover:translate-x-1 transition-transform" size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Raw Materials */}
      <div 
        className={`hero-half hero-right ${animateJoin ? 'joined' : ''} ${expandingSide === 'right' ? 'expanding' : ''}`}
        aria-label="Raw Materials"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/Fortuna-Packaging/images/brochure/raw-materials-hero.jpg"
            alt="Raw Materials"
            className="w-full h-full object-cover scale-105 transition-transform duration-1000 group-hover:scale-100 contrast-105 brightness-105"
          />
          <div className="absolute top-0 bottom-0 right-0 w-[80%] md:w-[50%] bg-gradient-to-l from-navy-dark/80 to-transparent pointer-events-none" />
        </div>
        
        {/* Set w-[50%] on mobile, align content strictly to the right half */}
        <div className="relative z-10 w-[50%] md:w-full h-full flex flex-col justify-center items-end pr-4 sm:pr-10 md:pr-20 lg:pr-32 pt-20 text-right ml-auto pl-2 md:pl-0">
          <div className={`hero-content-inner w-full transition-all duration-500 hover-scale text-right flex flex-col items-end ${expandingSide === 'left' ? 'opacity-0' : 'opacity-100'}`}>
            <div className="inline-flex items-center gap-1.5 bg-white/20 border border-white/30 rounded-full px-2 py-1 sm:px-4 sm:py-1.5 mb-2 sm:mb-4 shadow-[0_4px_15px_rgba(0,0,0,0.5)] backdrop-blur-md">
              <span className="text-[8px] sm:text-[10px] font-extrabold text-white uppercase tracking-widest leading-none drop-shadow-md">
                Core Inputs
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight font-display mb-2 sm:mb-4 tracking-tight drop-shadow-[0_4px_15px_rgba(0,0,0,0.6)]">
              Raw <br/><span className="text-slate-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">Materials</span>
            </h2>
            <p className="hidden md:block text-white text-sm md:text-base leading-relaxed mb-6 font-medium max-w-sm drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              The highest grade films, inks, and substrates that form the foundation of our superior packaging solutions.
            </p>
            <button 
              onClick={() => handleNavigate('/raw-materials', 'right')}
              className="inline-flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-8 py-2 sm:py-3.5 bg-white/10 border border-white/20 text-white font-bold tracking-widest uppercase text-[10px] sm:text-xs rounded-full hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 transition-all duration-300 group mt-2 whitespace-nowrap"
            >
              <HiArrowRight className="transform rotate-180 group-hover:-translate-x-1 transition-transform" size={14} /> View Raw Materials
            </button>
          </div>
        </div>
      </div>

      {/* Floating ultra-premium glowing ambient orbs */}
      <div className={`absolute top-20 right-10 w-[35rem] h-[35rem] bg-red/10 rounded-full filter blur-[130px] select-none pointer-events-none animate-pulse transition-opacity duration-500 ${expandingSide ? 'opacity-0' : 'opacity-100'}`} />
      <div className={`absolute -bottom-20 left-10 w-[30rem] h-[30rem] bg-emerald-500/5 rounded-full filter blur-[150px] select-none pointer-events-none animate-pulse transition-opacity duration-500 ${expandingSide ? 'opacity-0' : 'opacity-100'}`} />
    </section>
  );
}
