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

  const fingerprintSrc = `/images/fortuna-fingerprint-loader-transparent.png${timestamp ? `?t=${timestamp}` : ''}`;
  const wordmarkSrc = `/images/fortuna-wordmark-transparent.png${timestamp ? `?t=${timestamp}` : ''}`;

  return (
    <a href="#hero" className="flex items-center gap-0.5 group" onClick={goHome} aria-label="Fortuna home">
      <img
        src={fingerprintSrc}
        alt=""
        aria-hidden="true"
        className={`${s.icon} shrink-0 object-contain drop-shadow-[0_0_14px_rgba(6,173,98,0.45)] transition-[filter,transform] duration-200 group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(211,47,47,0.35)]`}
      />
      {showTagline && (
        <img
          src={wordmarkSrc}
          alt="Fortuna - Impress With Impressions"
          className={`${s.wordmark} object-contain object-left ${wordmarkOpacity}`}
        />
      )}
    </a>
  );
}
