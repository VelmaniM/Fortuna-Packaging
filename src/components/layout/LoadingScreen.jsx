import { useCallback, useEffect, useRef, useState } from 'react';
import './LoadingScreen.css';

const LOADER_EXIT_MS = 300;
// Safety fallback timer increased to 10 seconds. This allows the video animation to play fully to
// completion, but guarantees the loading screen will still dismiss if autoplay is blocked by the browser.
const LOADER_MAX_MS = 10000;

export default function LoadingScreen({ onComplete }) {
  const [exiting, setExiting] = useState(false);
  const completedRef = useRef(false);
  const fallbackTimerRef = useRef(null);

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

  const handleVideoReady = useCallback((event) => {
    const video = event.currentTarget;

    video.currentTime = 0;
    video.play().catch(() => {});
  }, []);

  const handleVideoError = useCallback(() => {
    window.setTimeout(finishLoading, 1200);
  }, [finishLoading]);

  return (
    <div
      className={`fixed inset-0 z-[10000] grid place-items-center overflow-hidden bg-white px-6 ${exiting ? 'loader-exit' : ''}`}
      role="status"
      aria-label="Loading"
    >
      <div className="loader-content flex w-full max-w-[31rem] flex-col items-center justify-center text-center">
        <div className="mb-5 grid h-[18rem] w-[18rem] place-items-center sm:h-[21rem] sm:w-[21rem] md:h-[23rem] md:w-[23rem]">
          <video
            className="h-full w-full object-contain drop-shadow-[0_18px_36px_rgba(0,31,63,0.10)]"
            autoPlay
            muted
            playsInline
            preload="auto"
            aria-label="Fortuna logo animation"
            onLoadedMetadata={handleVideoReady}
            onEnded={finishLoading}
            onError={handleVideoError}
          >
            <source src="/videos/fortuna-loader-logo-transparent.webm" type="video/webm" />
          </video>
        </div>

        <img
          src="/images/fortuna-wordmark-transparent.png"
          alt="Fortuna - Impress With Impressions"
          className="w-full max-w-[20rem] object-contain drop-shadow-[0_12px_24px_rgba(0,31,63,0.07)] sm:max-w-[24rem] md:max-w-[27rem]"
        />
      </div>
    </div>
  );
}
