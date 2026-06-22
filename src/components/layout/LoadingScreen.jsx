import { useCallback, useEffect, useRef, useState } from 'react';
import './LoadingScreen.css';

const LOADER_EXIT_MS = 300;
// Safety fallback timer set to 12 seconds to ensure the video has plenty of time
// to download and play fully on all browsers before forcefully dismissing.
const LOADER_MAX_MS = 12000;

export default function LoadingScreen({ onComplete }) {
  const [exiting, setExiting] = useState(false);
  const completedRef = useRef(false);
  const fallbackTimerRef = useRef(null);
  const videoRefLight = useRef(null);
  const videoRefDark = useRef(null);

  const finishLoading = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    window.clearTimeout(fallbackTimerRef.current);
    setExiting(true);
    window.setTimeout(() => onComplete?.(), LOADER_EXIT_MS);
  }, [onComplete]);

  useEffect(() => {
    fallbackTimerRef.current = window.setTimeout(finishLoading, LOADER_MAX_MS);

    return () => window.clearTimeout(fallbackTimerRef.current);
  }, [finishLoading]);

  useEffect(() => {
    // Attempt to force play for Safari which sometimes ignores autoPlay attribute
    [videoRefLight, videoRefDark].forEach(ref => {
      if (ref.current) {
        ref.current.defaultMuted = true;
        ref.current.muted = true;
        ref.current.play().catch(() => {});
      }
    });
  }, [finishLoading]);

  const handleVideoError = useCallback((event) => {
    if (event.target === event.currentTarget) {
      window.setTimeout(finishLoading, 1200);
    }
  }, [finishLoading]);

  return (
    <div
      className={`loading-screen ${exiting ? 'loader-exit' : ''}`}
      role="status"
      aria-label="Loading"
    >
      <div className="loader-content loading-screen__content">
        <div className="loading-screen__video-wrapper">
          {/* Light Mode Video */}
          <video
            ref={videoRefLight}
            className="loading-screen__video dark:hidden"
            autoPlay
            muted
            playsInline
            preload="auto"
            aria-label="Fortuna logo animation"
            onEnded={finishLoading}
            onError={handleVideoError}
          >
            <source src="/Fortuna-Packaging/videos/fortuna-loader-white.webm" type="video/webm" />
            <source src="/Fortuna-Packaging/videos/fortuna-loader-logo-transparent.mp4" type='video/mp4; codecs="hvc1"' />
          </video>

          {/* Dark Mode Video */}
          <video
            ref={videoRefDark}
            className="loading-screen__video hidden dark:block"
            autoPlay
            muted
            playsInline
            preload="auto"
            aria-label="Fortuna logo animation"
            onEnded={finishLoading}
            onError={handleVideoError}
          >
            <source src="/Fortuna-Packaging/videos/fortuna-loader-black.webm" type="video/webm" />
            <source src="/Fortuna-Packaging/videos/fortuna-loader-logo-transparent.mp4" type='video/mp4; codecs="hvc1"' />
          </video>
        </div>

        <img
          src="/Fortuna-Packaging/images/fortuna-wordmark-transparent.png"
          alt="Fortuna - Impress With Impressions"
          className="loading-screen__wordmark"
        />
      </div>
    </div>
  );
}
