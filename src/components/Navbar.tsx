import React, { useState, useEffect } from 'react';
import { Search, Bell, Menu, X, User, LogOut, ChevronDown, CheckCircle2, Landmark, Globe } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import type { Language } from '../context/LanguageContext';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setCurrentTab }) => {
  const { user, isAuthenticated, logout } = useAuth();
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  // Dropdown states for submenus
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const [dateTimeStr, setDateTimeStr] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const locale = language === 'kn' ? 'kn-IN' : language === 'hi' ? 'hi-IN' : 'en-IN';
      const formatted = now.toLocaleString(locale, {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setDateTimeStr(formatted);
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 1000);
    return () => clearInterval(timer);
  }, [language]);

  const handleNavClick = (tabName: string) => {
    setCurrentTab(tabName);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsLangDropdownOpen(false);
  };

  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Welcome Bonus Credited', desc: '₹10,000 disburser balance credited to your savings.', time: 'Just now', unread: true },
    { id: 2, title: 'e-KYC Submission Approved', desc: 'Aadhaar & PAN simulated logs verified successfully.', time: '1 hour ago', unread: true },
    { id: 3, title: 'FD Rates Hiked', desc: 'Earn up to 8.75% p.a. as shareholder member!', time: '1 day ago', unread: false },
  ]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 bg-white border-b border-slate-150 shadow-sm">
        
        {/* Top Bar with Ticker & Clock */}
        <div className="bg-[#005BAC] text-white text-[10px] font-semibold py-1 px-4 sm:px-6 lg:px-8 flex justify-between items-center border-b border-[#00AEEF]/20">
          
          {/* Left: Scrolling Headlines Marquee */}
          <div className="flex-1 overflow-hidden mr-8 flex items-center space-x-2">
            <span className="bg-[#16A34A] text-white px-2 py-0.5 rounded text-[8px] uppercase tracking-wider font-extrabold animate-pulse shrink-0">LATEST News</span>
            <div className="w-full">
              {React.createElement(
                'marquee',
                { scrollamount: '3.5', className: 'text-white/95 font-medium leading-none' },
                <>
                  <span className="mx-6 font-semibold">• {t('dividend_highlight')}</span>
                  <span className="mx-6 font-semibold">• {t('news1_title')}</span>
                  <span className="mx-6 font-semibold">• {t('news3_title')}</span>
                </>
              )}
            </div>
          </div>

          {/* Right: Real Date and Time */}
          <div className="shrink-0 flex items-center space-x-2 text-white/95 font-mono text-[9px] font-bold">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span>{dateTimeStr}</span>
          </div>

        </div>

        {/* Main Navbar wrapper */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo Circular Seal */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('home')}>
              <div className="relative h-12 w-12 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-primary/10 rounded-full border border-emerald-500/30 shadow-inner shrink-0">
                <svg className="w-11 h-11" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="46" fill="none" stroke="#16A34A" strokeWidth="2" strokeDasharray="2 2" />
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#005BAC" strokeWidth="1.5" />
                  <path d="M 38 65 Q 32 50 48 42 Q 40 56 38 65 Z" fill="#16A34A" />
                  <path d="M 62 65 Q 68 50 52 42 Q 60 56 62 65 Z" fill="#16A34A" />
                  <path d="M 38 52 Q 50 46 62 52 M 43 56 C 45 52, 55 52, 57 56" fill="none" stroke="#005BAC" strokeWidth="2.5" strokeLinecap="round" />
                  <rect x="44" y="32" width="12" height="10" rx="1.5" fill="#005BAC" />
                  <polygon points="41,32 50,24 59,32" fill="#16A34A" />
                </svg>
              </div>
              <div>
                <span className="text-sm sm:text-base font-black tracking-tight text-[#005BAC] uppercase block leading-none font-heading">
                  Indian Cooperative
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-none block mt-1">
                  Credit Society Limited
                </span>
                <span className="text-[8px] font-bold text-[#16A34A] block mt-0.5 font-mono">
                  REGD. NO. MSCS/CR/312/2012
                </span>
              </div>
            </div>
            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6">
              
              {/* Home */}
              <button
                onClick={() => handleNavClick('home')}
                className={`text-xs font-bold uppercase tracking-wider transition-colors hover:text-primary ${currentTab === 'home' ? 'text-primary animate-pulse-slow' : 'text-slate-700'}`}
              >
                {t('home')}
              </button>

              {/* About Us */}
              <button
                onClick={() => handleNavClick('about')}
                className={`text-xs font-bold uppercase tracking-wider transition-colors hover:text-primary ${currentTab === 'about' ? 'text-primary' : 'text-slate-700'}`}
              >
                {t('about')}
              </button>

              {/* Products */}
              <button
                onClick={() => handleNavClick('products')}
                className={`text-xs font-bold uppercase tracking-wider transition-colors hover:text-primary ${currentTab === 'products' ? 'text-primary' : 'text-slate-700'}`}
              >
                {t('products')}
              </button>

              {/* Media */}
              <button
                onClick={() => handleNavClick('media')}
                className={`text-xs font-bold uppercase tracking-wider transition-colors hover:text-primary ${currentTab === 'media' ? 'text-primary' : 'text-slate-700'}`}
              >
                {t('media')}
              </button>

              {/* Membership */}
              <button
                onClick={() => handleNavClick('membership')}
                className={`text-xs font-bold uppercase tracking-wider transition-colors hover:text-primary ${currentTab === 'membership' ? 'text-primary' : 'text-slate-700'}`}
              >
                {t('membership')}
              </button>

              {/* Contact Us */}
              <button
                onClick={() => handleNavClick('contact')}
                className={`text-xs font-bold uppercase tracking-wider transition-colors hover:text-primary ${currentTab === 'contact' ? 'text-primary' : 'text-slate-700'}`}
              >
                {t('contact')}
              </button>

            </nav>

            {/* Quick Actions Interaction Area */}
            <div className="flex items-center space-x-3.5">
              
              {/* Language Switch Dropdown (Highly Premium Integration!) */}
              <div className="relative">
                <button 
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center space-x-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-primary rounded-xl text-xs font-bold transition-all focus:outline-none"
                  title="Switch Language / ಭಾಷೆ ಬದಲಾಯಿಸಿ"
                >
                  <Globe className="h-4 w-4 shrink-0" />
                  <span className="uppercase">{language}</span>
                  <ChevronDown className="h-3 w-3" />
                </button>
                {isLangDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-40 bg-white border border-slate-150 rounded-2xl shadow-2xl py-2 z-50 animate-scale-up text-left">
                    {[
                      { code: 'en', label: 'English' },
                      { code: 'kn', label: 'ಕನ್ನಡ (Kannada)' },
                      { code: 'hi', label: 'हिन्दी (Hindi)' }
                    ].map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code as Language)}
                        className={`w-full px-4 py-2.5 text-xs text-left font-bold transition-all block ${language === lang.code ? 'bg-primary/5 text-primary' : 'text-slate-650 hover:bg-slate-50'}`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Search Toggle */}
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-primary transition-colors focus:outline-none"
              >
                <Search className="h-4.5 w-4.5" />
              </button>

              {/* Notifications */}
              {isAuthenticated && (
                <div className="relative">
                  <button 
                    onClick={() => setIsNotificationsOpen(true)}
                    className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-primary transition-colors focus:outline-none"
                  >
                    <Bell className="h-4.5 w-4.5" />
                    {notifications.some(n => n.unread) && (
                      <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>
                    )}
                  </button>
                </div>
              )}

              {/* Auth states */}
              <div className="hidden sm:flex items-center space-x-2">
                {isAuthenticated && user ? (
                  <>
                    <button
                      onClick={() => handleNavClick('dashboard')}
                      className={`px-4 py-2 rounded-xl border font-bold text-xs transition-all ${currentTab === 'dashboard' ? 'bg-[#005BAC] text-white border-[#005BAC]' : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'}`}
                    >
                      <span>{t('dashboard')}</span>
                    </button>
                    <button
                      onClick={() => {
                        logout();
                        handleNavClick('home');
                      }}
                      className="p-2 border border-slate-200 hover:bg-red-55 hover:text-red-600 hover:border-red-200 rounded-xl transition-all"
                      title={t('logout')}
                    >
                      <LogOut className="h-4 w-4" />
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => handleNavClick('login')}
                    className="px-4 py-2 rounded-xl bg-primary text-white font-bold text-xs shadow-md transition-all hover:bg-primary-dark"
                  >
                    {t('login')}
                  </button>
                )}
              </div>

              {/* Mobile Drawer button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-primary transition-colors focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-out Mobile Panel Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between border-l border-slate-150 animate-slide-in">
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <span className="text-base font-bold text-primary">Cooperative Directory</span>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="h-6 w-6 text-slate-400" />
                </button>
              </div>

              {/* Mobile language selector */}
              <div className="p-3 bg-slate-50 border border-slate-150 rounded-2xl flex justify-between items-center">
                <span className="text-xs font-bold text-slate-500">Language / ಭಾಷೆ</span>
                <div className="flex space-x-1.5">
                  {(['en', 'kn', 'hi'] as Language[]).map((ln) => (
                    <button
                      key={ln}
                      onClick={() => handleLanguageChange(ln)}
                      className={`px-2.5 py-1 text-[10px] font-extrabold rounded-lg uppercase ${language === ln ? 'bg-primary text-white' : 'bg-white text-slate-600 border border-slate-200'}`}
                    >
                      {ln}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col space-y-4 text-xs font-bold text-slate-700">
                <button onClick={() => handleNavClick('home')} className="text-left py-2 hover:text-primary">{t('home')}</button>
                <button onClick={() => handleNavClick('about')} className="text-left py-2 hover:text-primary">{t('about')}</button>
                <button onClick={() => handleNavClick('products')} className="text-left py-2 hover:text-primary">{t('products')}</button>
                <button onClick={() => handleNavClick('media')} className="text-left py-2 hover:text-primary">{t('media')}</button>
                <button onClick={() => handleNavClick('membership')} className="text-left py-2 hover:text-primary">{t('membership')}</button>
                <button onClick={() => handleNavClick('contact')} className="text-left py-2 hover:text-primary">{t('contact')}</button>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col space-y-3">
              {isAuthenticated && user ? (
                <>
                  <button
                    onClick={() => handleNavClick('dashboard')}
                    className="w-full py-3 bg-slate-100 font-bold text-slate-700 rounded-xl text-xs hover:bg-slate-200"
                  >
                    {t('dashboard')}
                  </button>
                  <button
                    onClick={() => {
                      logout();
                      handleNavClick('home');
                    }}
                    className="w-full py-3 border border-red-200 text-red-650 rounded-xl text-xs hover:bg-red-50 font-bold"
                  >
                    {t('logout')}
                  </button>
                </>
              ) : (
                <button
                  onClick={() => handleNavClick('login')}
                  className="w-full py-3 border border-slate-250 text-slate-700 rounded-xl text-xs font-bold"
                >
                  {t('login')}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Notifications modal */}
      {isNotificationsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-sm w-full p-5 border border-slate-100 shadow-2xl animate-scale-up relative">
            <button onClick={() => setIsNotificationsOpen(false)} className="absolute top-5 right-5 text-slate-450 hover:text-slate-655">
              <X className="h-5 w-5" />
            </button>
            <h3 className="text-sm font-bold text-slate-900 mb-4">Member Bulletins</h3>
            <div className="space-y-3">
              {notifications.map((n) => (
                <div key={n.id} className="p-3 bg-slate-50 border border-slate-150 rounded-xl text-xs">
                  <p className="font-bold text-slate-800">{n.title}</p>
                  <p className="text-slate-500 text-[11px] mt-0.5 leading-normal">{n.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Search popup */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-md w-full p-4 border border-slate-100 shadow-2xl animate-slide-down">
            <div className="flex items-center space-x-3 border-b border-slate-150 pb-2">
              <Search className="h-4.5 w-4.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search products or locations..."
                className="flex-1 border-0 focus:outline-none text-xs text-slate-800"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button onClick={() => setIsSearchOpen(false)}>
                <X className="h-4.5 w-4.5 text-slate-400" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
