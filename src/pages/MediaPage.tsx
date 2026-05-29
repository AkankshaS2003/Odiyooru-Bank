import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const MediaPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-4">
          <span className="text-sm font-bold text-[#005BAC] uppercase tracking-widest block">{t('media_title')}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">{t('media_subtitle')}</h2>
          <p className="text-slate-600 leading-relaxed text-sm max-w-xl mx-auto">
            {t('media_desc')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: t('media_art1_title'),
              date: t('media_art1_date'),
              desc: t('media_art1_desc'),
              media: t('media_art1_src')
            },
            {
              title: t('media_art2_title'),
              date: t('media_art2_date'),
              desc: t('media_art2_desc'),
              media: t('media_art2_src')
            },
            {
              title: t('media_art3_title'),
              date: t('media_art3_date'),
              desc: t('media_art3_desc'),
              media: t('media_art3_src')
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-150 p-6 rounded-3xl space-y-4 shadow-sm hover:shadow-md transition-all">
              <span className="bg-primary/10 text-primary text-[10px] font-bold px-2.5 py-0.5 rounded uppercase">{item.media}</span>
              <h3 className="font-extrabold text-slate-900 text-sm leading-snug">{item.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              <span className="text-[10px] text-slate-400 block font-mono">{item.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
