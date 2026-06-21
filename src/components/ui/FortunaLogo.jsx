import { useState, useEffect } from 'react';
import { scrollToSection } from '../../utils/scrollTo';
import './FortunaLogo.css';

export default function FortunaLogo({ size = 'md', showTagline = true, light = false }) {
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    setTimestamp(Date.now().toString());
  }, []);

  const sizes = {
    sm: { icon: 'h-11 w-11', wordmark: 'h-10 max-w-[11rem]' },
    md: { icon: 'h-16 w-16', wordmark: 'h-12 max-w-[14rem]' },
    lg: { icon: 'h-20 w-20', wordmark: 'h-14 max-w-[16rem]' },
  };
  const s = sizes[size] || sizes.md;
  const wordmarkOpacity = light ? 'brightness-0 invert' : '';

  const goHome = (e) => {
    e.preventDefault();
    scrollToSection('#hero');
  };

  const fingerprintSrc = `/Fortuna-Packaging/images/fortuna-fingerprint-loader-transparent.png${timestamp ? `?t=${timestamp}` : ''}`;
  const wordmarkSrc = `/Fortuna-Packaging/images/fortuna-wordmark-transparent.png${timestamp ? `?t=${timestamp}` : ''}`;

  return (
    <a href="#hero" className="fortuna-logo group" onClick={goHome} aria-label="Fortuna home">
      <img
        src={fingerprintSrc}
        alt=""
        aria-hidden="true"
        className={`${s.icon} fortuna-logo__icon`}
      />
      {showTagline && (
        <img
          src={wordmarkSrc}
          alt="Fortuna - Impress With Impressions"
          className={`${s.wordmark} fortuna-logo__wordmark ${wordmarkOpacity}`}
        />
      )}
    </a>
  );
}
