import React from 'react';
import { Globe, Camera, Tv } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab }) => {
  const { t } = useLanguage();
  const { isAuthenticated } = useAuth();
  
  const handleNavClick = (tabName: string) => {
    setCurrentTab(tabName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] text-white border-t border-neutral-900 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Left Column: Logo, description, and green social icons */}
          {/* Left Column: Logo, description, and green social icons */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Logo Crest inline representation */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('home')}>
              <div className="relative h-11 w-11 flex items-center justify-center bg-white/5 rounded-full border border-emerald-500/20 shadow-inner shrink-0">
                <svg className="w-10 h-10" viewBox="0 0 100 100">
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
                <span className="text-xs sm:text-sm font-black tracking-tight text-[#00AEEF] uppercase block leading-none font-heading">
                  Indian Cooperative
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none block mt-1">
                  Credit Society Limited
                </span>
              </div>
            </div>

            {/* Exact Bio text from image - localized */}
            <p className="text-xs text-slate-400 leading-relaxed max-w-xl font-medium">
              {t('footer_bio')}
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              {[
                { icon: Globe, url: '#' },
                { icon: Camera, url: '#' },
                { icon: Tv, url: '#' }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    className="h-10 w-10 rounded-full bg-[#16A34A] hover:bg-[#15803D] flex items-center justify-center text-white transition-all transform active:scale-95 shadow-md shadow-emerald-950/20"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Center Column: Quick Links - localized */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              {t('quick_links')} <span className="text-slate-400">→</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-semibold">
              {[
                { name: 'Home', tab: 'home' },
                { name: 'About Us', tab: 'about' },
                { name: 'Contact Us', tab: 'contact' },
                { name: 'Branches', tab: 'branches' },
                { name: 'Membership', tab: 'membership' }
              ].map((link, i) => (
                <li key={i}>
                  <button 
                    onClick={() => handleNavClick(link.tab)}
                    className="hover:text-white transition-colors"
                  >
                    {link.name === 'Home' ? t('home') : link.name === 'About Us' ? t('about') : link.name === 'Contact Us' ? t('contact') : link.name === 'Branches' ? t('branches') : t('membership')}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Products - localized */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              {t('footer_prod_title')} <span className="text-slate-400">→</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-semibold">
              {[
                { name: 'Share Capital', tab: 'membership' },
                { name: 'Savings Deposit', tab: 'products' },
                { name: 'Fixed Deposit', tab: 'products' },
                { name: 'Recurring Deposit', tab: 'products' },
                { name: 'Nirvritti Vetan Yojana', tab: 'products' },
                { name: 'Monthly Income scheme', tab: 'products' },
                { name: 'Daily Deposit', tab: 'products' }
              ].map((link, i) => (
                <li key={i}>
                  <button 
                    onClick={() => handleNavClick(link.tab)}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom copyright details - localized */}
        <div className="border-t border-neutral-900 pt-6 mt-8 text-center text-[10px] text-slate-500 font-bold uppercase tracking-wider">
          <span>{t('copyright')}</span>
        </div>

      </div>
    </footer>
  );
};
