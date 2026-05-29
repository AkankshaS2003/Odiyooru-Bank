import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const AboutUs: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        
        {/* Story */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-sm font-bold text-[#005BAC] uppercase tracking-widest block">{t('about_title')}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">{t('about_subtitle')}</h2>
          <p className="text-slate-650 leading-relaxed text-sm">
            {t('about_desc')}
          </p>
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
                <div className="h-12 w-12 rounded-full bg-[#005BAC]/10 text-[#005BAC] font-bold flex items-center justify-center text-sm mx-auto">
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
            <h4 className="font-bold text-sm text-[#005BAC] mb-1">{t('democratic_governance')}</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">{t('democratic_desc')}</p>
          </div>
          <div className="p-5 bg-slate-50 border border-slate-150 rounded-3xl">
            <h4 className="font-bold text-sm text-[#005BAC] mb-1">{t('asset_security')}</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">{t('asset_desc')}</p>
          </div>
          <div className="p-5 bg-slate-50 border border-slate-150 rounded-3xl">
            <h4 className="font-bold text-sm text-[#005BAC] mb-1">{t('community_growth')}</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">{t('community_desc')}</p>
          </div>
        </div>

      </div>
    </section>
  );
};
