import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const AboutUs: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        
        {/* Story */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-sm font-bold text-primary uppercase tracking-widest block">{t('about_title')}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">{t('about_subtitle')}</h2>
          <p className="text-slate-650 leading-relaxed text-sm">
            {t('about_desc')}
          </p>
        </div>

        {/* History & Profile */}
        <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200/80 rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -ml-20 -mb-20"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Story & Founders Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-primary/10 text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight font-heading">
                  {t('about_history_title')}
                </h3>
              </div>

              <div className="space-y-4 text-slate-600 text-sm leading-relaxed font-normal">
                <p className="border-l-4 border-primary pl-4 py-1 bg-primary/[0.02]">
                  {t('about_history_p1')}
                </p>
                <p className="bg-slate-50/50 p-4 rounded-2xl border border-slate-100/80">
                  {t('about_history_p2')}
                </p>
              </div>

              {/* Founder Profile Badge Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 p-3 bg-white border border-slate-150 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
                    SR
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-slate-800">Lion Sri A. Suresh Rai</h5>
                    <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Founder President</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white border border-slate-150 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    DS
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-slate-800">Mr. Dyananda Shetty</h5>
                    <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Chief Executive Officer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Awards Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white/80 backdrop-blur border border-slate-200/60 p-6 rounded-3xl shadow-sm space-y-5 text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
                
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-secondary/15 text-secondary-dark">
                    <svg className="w-5 h-5 animate-pulse-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm tracking-wide">
                    {t('about_history_p3')}
                  </h4>
                </div>

                <div className="space-y-4">
                  {/* Award 1 */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-white border border-slate-150/80 hover:border-secondary transition-colors duration-300 flex gap-3.5 items-start group shadow-2xs">
                    <div className="mt-0.5 p-2 rounded-lg bg-secondary/10 text-secondary-dark group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 0h4m-4 0H8m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-secondary-dark tracking-wider uppercase bg-secondary/10 px-2 py-0.5 rounded-full">Federal Honor</span>
                      <p className="text-xs font-semibold text-slate-700 leading-relaxed pt-1">
                        {t('about_award1')}
                      </p>
                    </div>
                  </div>

                  {/* Award 2 */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-white border border-slate-150/80 hover:border-accent transition-colors duration-300 flex gap-3.5 items-start group shadow-2xs">
                    <div className="mt-0.5 p-2 rounded-lg bg-accent/10 text-accent-dark group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-accent-dark tracking-wider uppercase bg-accent/10 px-2 py-0.5 rounded-full">Excellence Award</span>
                      <p className="text-xs font-semibold text-slate-700 leading-relaxed pt-1">
                        {t('about_award2')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Board of Governance */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-900 text-center uppercase tracking-wider">{t('board_governance')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { name: t('board_c_name'), role: t('board_c_role'), bio: t('board_c_bio'), initials: 'S' },
              { name: t('board_vc_name'), role: t('board_vc_role'), bio: t('board_vc_bio'), initials: 'D' },
              { name: t('board_md_name'), role: t('board_md_role'), bio: t('board_md_bio'), initials: 'S' }
            ].map((gov, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-150 p-6 rounded-3xl text-center space-y-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-sm mx-auto">
                  {gov.initials}
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm">{gov.name}</h4>
                <span className="text-[10px] bg-[#16A34A]/10 text-[#16A34A] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">{gov.role}</span>
                <p className="text-slate-500 text-xs leading-relaxed pt-2">{gov.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Statutes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 text-left">
          <div className="p-5 bg-slate-50 border border-slate-150 rounded-3xl">
            <h4 className="font-bold text-sm text-primary mb-1">{t('democratic_governance')}</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">{t('democratic_desc')}</p>
          </div>
          <div className="p-5 bg-slate-50 border border-slate-150 rounded-3xl">
            <h4 className="font-bold text-sm text-primary mb-1">{t('asset_security')}</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">{t('asset_desc')}</p>
          </div>
          <div className="p-5 bg-slate-50 border border-slate-150 rounded-3xl">
            <h4 className="font-bold text-sm text-primary mb-1">{t('community_growth')}</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">{t('community_desc')}</p>
          </div>
        </div>

      </div>
    </section>
  );
};
