import { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoadingScreen from './components/layout/LoadingScreen';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';
import FinishedGoodsPage from './pages/FinishedGoodsPage';
import RawMaterialPage from './pages/RawMaterialPage';
import ChatBot from './components/ui/ChatBot';
import './App.css';

const VISITED_KEY = 'fortuna-visited';

function AppContent() {
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window === 'undefined') return true;
    return !sessionStorage.getItem(VISITED_KEY);
  });
  
  const location = useLocation();

  const handleLoadComplete = useCallback(() => {
    sessionStorage.setItem(VISITED_KEY, '1');
    setIsLoading(false);
  }, []);

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
