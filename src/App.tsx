import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { AboutUs } from './pages/AboutUs';
import { ProductsPage } from './pages/ProductsPage';
import { MediaPage } from './pages/MediaPage';
import { MembershipPage } from './pages/MembershipPage';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/Footer';
import { AIChatAssistant } from './components/AIChatAssistant';
import { FloatingScrollButton } from './components/FloatingScrollButton';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const { t } = useLanguage();
  const [currentTab, setCurrentTab] = useState<string>('home');

  const renderActiveTab = () => {
    // Restrict only dashboard tab to authenticated members
    let tabToRender = currentTab;
    if (tabToRender === 'dashboard' && !isAuthenticated) {
      tabToRender = 'login';
    }

    switch (tabToRender) {
      case 'home':
        return <Home setCurrentTab={setCurrentTab} />;
      case 'login':
        return <Login setCurrentTab={setCurrentTab} />;
      case 'dashboard':
        return <Dashboard setCurrentTab={setCurrentTab} />;
      case 'products':
        return <ProductsPage />;
      case 'membership':
        return <MembershipPage setCurrentTab={setCurrentTab} />;
      case 'contact':
      case 'branches':
      case 'calculators':
        return <ContactPage />;
      case 'media':
        return <MediaPage />;
      case 'about':
        return <AboutUs />;
      default:
        return <Home setCurrentTab={setCurrentTab} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      
      {/* 1. Header Sticky Navbar matching Reference Image 1 */}
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {/* 2. Primary Page Body content */}
      <main className="flex-grow">
        {renderActiveTab()}
      </main>

      {/* 3. Simulated smart NLP floating assistant bubble */}
      {isAuthenticated && <AIChatAssistant />}

      {/* 4. Footer exact match with Reference Image 2 */}
      <Footer setCurrentTab={setCurrentTab} />

      {/* 5. Sleek floating smart scroll indicator with rotation animations */}
      <FloatingScrollButton />

    </div>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </AuthProvider>
  );
}
