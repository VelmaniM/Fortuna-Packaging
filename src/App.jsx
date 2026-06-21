import { useState, useCallback, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LoadingScreen from './components/layout/LoadingScreen';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';
import FinishedGoodsPage from './pages/FinishedGoodsPage';
import RawMaterialPage from './pages/RawMaterialPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import ChatBot from './components/ui/ChatBot';
import './App.css';

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Stricter privacy measures: prevent right-click, screenshot, copy, drag
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    const handleKeyDown = (e) => {
      // Prevent PrintScreen key
      if (e.key === 'PrintScreen' || e.keyCode === 44) {
        navigator.clipboard.writeText('');
      }
      // Prevent common copy/print/save shortcuts (Ctrl/Cmd + C, P, S)
      if ((e.ctrlKey || e.metaKey) && ['c', 'p', 's'].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
    };

    const preventDefaultAction = (e) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('copy', preventDefaultAction);
    document.addEventListener('cut', preventDefaultAction);
    document.addEventListener('dragstart', preventDefaultAction);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('copy', preventDefaultAction);
      document.removeEventListener('cut', preventDefaultAction);
      document.removeEventListener('dragstart', preventDefaultAction);
    };
  }, []);

  const handleLoadComplete = useCallback(() => {
    setIsLoading(false);
    navigate('/');
  }, [navigate]);

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadComplete} />;
  }

  // We only show the ChatBot on the home page or all pages? Let's show on all.
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/finished-goods" element={<FinishedGoodsPage />} />
        <Route path="/raw-materials" element={<RawMaterialPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
      </Routes>
      <ChatBot />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
