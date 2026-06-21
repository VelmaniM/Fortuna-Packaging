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
    <section id="hero" className="hero-section hero-slice-container">
      
      {/* LEFT SIDE: Finished Goods */}
      <div 
        className={`hero-half hero-left ${animateJoin ? 'joined' : ''} ${expandingSide === 'left' ? 'expanding' : ''}`}
        aria-label="Finished Goods"
      >
        <div className="hero-section__bg-container">
          <img
            src="/Fortuna-Packaging/images/brochure/finished-goods-hero.jpg"
            alt="Finished Goods"
            className="hero-section__bg-image"
          />
          <div className="hero-section__bg-gradient--left" />
        </div>
        
        {/* Set w-[50%] on mobile to restrict flex container to left half, adjust paddings */}
        <div className="hero-section__content-area--left">
          <div className={`hero-content-inner text-left w-full transition-all duration-500 hover-scale ${expandingSide === 'right' ? 'opacity-0' : 'opacity-100'}`}>
            <div className="hero-section__tag">
              <span className="hero-section__tag-text">
                Final Product
              </span>
            </div>
            <h2 className="hero-section__title">
              Finished <br/><span className="hero-section__title-highlight--red">Goods</span>
            </h2>
            <p className="hero-section__description">
              Premium quality flexible packaging ready for the retail shelf. Discover our range of pouches, labels, and laminates.
            </p>
            <button 
              onClick={() => handleNavigate('/finished-goods', 'left')}
              className="hero-section__btn-primary group"
            >
              View Finished Goods <HiArrowRight className="hero-section__button-icon" size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Raw Materials */}
      <div 
        className={`hero-half hero-right ${animateJoin ? 'joined' : ''} ${expandingSide === 'right' ? 'expanding' : ''}`}
        aria-label="Raw Materials"
      >
        <div className="hero-section__bg-container">
          <img
            src="/Fortuna-Packaging/images/brochure/raw-materials-hero.jpg"
            alt="Raw Materials"
            className="hero-section__bg-image"
          />
          <div className="hero-section__bg-gradient--right" />
        </div>
        
        {/* Set w-[50%] on mobile, align content strictly to the right half */}
        <div className="hero-section__content-area--right">
          <div className={`hero-content-inner w-full transition-all duration-500 hover-scale text-right flex flex-col items-end ${expandingSide === 'left' ? 'opacity-0' : 'opacity-100'}`}>
            <div className="hero-section__tag">
              <span className="hero-section__tag-text">
                Core Inputs
              </span>
            </div>
            <h2 className="hero-section__title">
              Raw <br/><span className="hero-section__title-highlight--slate">Materials</span>
            </h2>
            <p className="hero-section__description">
              The highest grade films, inks, and substrates that form the foundation of our superior packaging solutions.
            </p>
            <button 
              onClick={() => handleNavigate('/raw-materials', 'right')}
              className="hero-section__btn-secondary group"
            >
              <HiArrowRight className="hero-section__button-icon--reverse" size={14} /> View Raw Materials
            </button>
          </div>
        </div>
      </div>

      {/* Floating ultra-premium glowing ambient orbs */}
      <div className={`hero-section__orb--red ${expandingSide ? 'opacity-0' : 'opacity-100'}`} />
      <div className={`hero-section__orb--green ${expandingSide ? 'opacity-0' : 'opacity-100'}`} />
    </section>
  );
}
