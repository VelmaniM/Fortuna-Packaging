import { useRef, useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import ClassicHeroSection from '../components/sections/ClassicHeroSection';
import AboutSection from '../components/sections/AboutSection';
import InfrastructureSection from '../components/sections/InfrastructureSection';
import ProductsSection from '../components/sections/ProductsSection';
import QualitySection from '../components/sections/QualitySection';
import ContactSection from '../components/sections/ContactSection';
import { observeReveals } from '../hooks/useReveal';
import './HomePage.css';

export default function HomePage() {
  const mainRef = useRef(null);

  useEffect(() => {
    observeReveals(mainRef.current);
  }, []);

  return (
    <main ref={mainRef}>
      <HeroSection />
      <ClassicHeroSection />
      <AboutSection />
      <InfrastructureSection />
      <ProductsSection />
      <QualitySection />
      <ContactSection />
    </main>
  );
}
