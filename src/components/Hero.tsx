import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  setCurrentTab: (tab: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ setCurrentTab }) => {
  const { t } = useLanguage();
  const [slideIndex, setSlideIndex] = useState(0);

  // Bank related images to slide every second (1000ms)
  const slides = [
    { url: '/home_loan_wealth.png', alt: 'Cooperative Wealth Finance' },
    { url: '/cooperative_bank_branch.png', alt: 'Modern Branch Interior' },
    { url: '/gold_loan_security.png', alt: 'Gold Loan Security Vault' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 1000); // 1000ms delay as requested for every second sliding!
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full min-h-[500px] md:min-h-[580px] lg:min-h-[620px] flex items-center justify-start overflow-hidden bg-slate-900 mt-16">

      {/* 1. Big Background Image Slider (rotating every second) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={slideIndex}
            className="absolute inset-0 w-full h-full"
            initial={{ x: "100%", y: 0 }}
            animate={{ x: 0, y: 0 }}
            exit={{ x: "-100%", y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <img
              src={slides[slideIndex].url}
              alt={slides[slideIndex].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        {/* Dark mask overlay to make the overlaid white text perfectly readable */}
        <div className="absolute inset-0 bg-slate-950/45 backdrop-blur-[1px] z-10"></div>
      </div>

      {/* 2. Text Overlaid on top of the Big Slider (Exactly as in Reference 1 Casing & Styles) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Overlaid content column */}
          <div className="lg:col-span-12 space-y-6 text-left">


            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-black text-white leading-[1.08] tracking-tight font-heading drop-shadow-md">
              {t('gateway')}
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-xl leading-relaxed drop-shadow">
              {t('gateway_desc')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                onClick={() => setCurrentTab('login')}
                className="w-full sm:w-auto px-8 py-4 bg-[#00A36C] hover:bg-[#008F5D] text-white font-extrabold rounded-md shadow-lg shadow-emerald-950/20 transition-all flex items-center justify-center space-x-2.5 transform active:scale-95 text-xs uppercase tracking-wider"
              >
                <span>{t('login')}</span>
                <ArrowRight className="h-4.5 w-4.5" />
              </button>
              <button
                onClick={() => setCurrentTab('about')}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-md shadow-sm transition-all text-xs uppercase tracking-wider"
              >
                <span>{t('know_more')}</span>
              </button>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
