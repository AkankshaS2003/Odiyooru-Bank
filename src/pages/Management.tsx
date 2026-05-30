import React from 'react';
import { ArrowLeft, Users, Shield, Award } from 'lucide-react';

interface ManagementProps {
  setCurrentTab: (tab: string) => void;
}

interface Director {
  name: string;
  role: string;
  image: string;
}

export const Management: React.FC<ManagementProps> = ({ setCurrentTab }) => {
  const handleBackToHome = () => {
    setCurrentTab('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const directors: Director[] = [
    {
      name: 'Sri. Suresh Rai A',
      role: 'President',
      image: 'public/gallery/president.jpg',
    },
    {
      name: 'Sri. Lingappa Gowda P',
      role: 'Vice President',
      image:'public/gallery/vicepresident.jpg',
    },
    {
      name: 'Sri Dayananda Shetty',
      role: 'CEO',
      image: 'public/gallery/CEO.jpg',
    },
    {
      name: 'Sri. Uggappa Shetty',
      role: 'Director',
      image: ' public/gallery/Director1.jpg',
    },
    {
      name: 'Sri Jayaprakash N.',
      role: 'Director',
      image: 'public/gallery/Director2.jpg',
    },
    {
      name: 'Sri Somappa Naik K.',
      role: 'Director',
      image: 'public/gallery/Director3.jpg',
    },
    {
      name: 'Sri Monappa Poojari',
      role: 'Director',
      image: 'public/gallery/Director4.jpg',
    },
    {
      name: 'Sri Ganapathi Bhat S.',
      role: 'Director',
      image: 'public/gallery/Director5.jpg',
    },
    {
      name: 'Smt. Sharadamani Rai',
      role: 'Director',
      image: 'public/gallery/Director6.jpg',
    },
    {
      name: 'Sri. Lokanath Shetty',
      role: 'Director',
      image: 'public/gallery/Director7.jpg',
    },
    {
      name: 'Sri. Tharanath Shetty',
      role: 'Director',
      image: 'public/gallery/Director8.jpg',
    },
    {
      name: 'Sri. Ganesh Attavara',
      role: 'Director',
      image: 'public/gallery/Director9.jpg',
    },
    {
      name: 'Sri. Venugopala Marla',
      role: 'Director',
      image: 'public/gallery/Director10.jpg',
    },
    {
      name: 'Smt. Saritha Ashok',
      role: 'Director',
      image: 'public/gallery/Director11.jpg',
    },
    {
      name: 'Sri. Ashok Kumar U S',
      role: 'Director',
      image: 'public/gallery/Director12.jpg',
    },
  ];

  return (
    <section className="bg-slate-50 min-h-screen pb-20">
      {/* 1. Widescreen Hero Section with a Random Image Background & Back to Home Button & Centered Title */}
      <div className="relative h-[240px] sm:h-[320px] w-full overflow-hidden flex items-center justify-center p-6 sm:p-8">
        {/* Background image */}
        <img
          src="/about_hero1.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.3] scale-105"
        />

        {/* Blue color overlay matching the user's reference theme */}
        <div className="absolute inset-0 bg-[#0A315C]/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A315C]/90 via-[#0A315C]/50 to-transparent"></div>

        {/* Top Left: Back to Home Button */}
        <button
          onClick={handleBackToHome}
          className="absolute top-6 left-6 sm:top-8 sm:left-8 z-10 flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full text-xs font-bold transition-all duration-300 focus:outline-none backdrop-blur-xs transform active:scale-95 cursor-pointer"
          title="Back to Home"
        >
          <ArrowLeft className="h-4 w-4 shrink-0 text-white" />
          <span>Back to Home</span>
        </button>

        {/* Horizontal & Vertical Center: Hero Title Overlay & Breadcrumb */}
        <div className="relative z-10 text-center space-y-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight font-heading uppercase drop-shadow-md">
            Management Team
          </h1>
          <p className="text-slate-350 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            Home • Management
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* 2. Highlight Card for Intro Paragraph */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-10 relative overflow-hidden transition-all duration-300 hover:shadow-2xl max-w-4xl mx-auto text-center">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#ED7F1E] to-[#0A315C]"></div>
          
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-[#0A315C]/10 rounded-full text-[#0A315C]">
              <Users className="h-8 w-8" />
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A315C] mb-4">
            Board of Directors
          </h2>

          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-semibold italic">
            "We, Odiyoor Sree Vividhodesha Souharda Sahakari Sanga has an efficient and experienced team of Board of Directors, to assist and guide the entire society."
          </p>
        </div>

        {/* 3. Grid of Directors Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-8">
          {directors.map((director, index) => {
            const isExecutive = director.role === 'President' || director.role === 'Vice President' || director.role === 'CEO';
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-2 flex flex-col"
              >
                {/* Image Section with hover zooms and overlays */}
                <div className="relative pt-[125%] w-full overflow-hidden bg-slate-100 shrink-0">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-95"
                    loading="lazy"
                  />
                  {/* Decorative badge overlay for primary executives */}
                  {isExecutive && (
                    <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-[#ED7F1E] to-[#e66c00] text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-md flex items-center space-x-1">
                      {director.role === 'CEO' ? <Shield className="h-3 w-3" /> : <Award className="h-3 w-3" />}
                      <span>{director.role}</span>
                    </div>
                  )}
                  {/* Elegant bottom gradient shade on picture */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>
                </div>

                {/* Profile Details */}
                <div className="p-5 flex-grow flex flex-col justify-between text-center relative">
                  {/* Top line accent only visible on hover */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#0A315C] transition-all duration-500 group-hover:w-3/4 rounded-full"></div>

                  <div className="space-y-1.5 mt-2">
                    <h4 className="text-base font-bold text-slate-800 tracking-tight transition-colors duration-300 group-hover:text-[#0A315C]">
                      {director.name}
                    </h4>
                    <p className={`text-xs font-extrabold uppercase tracking-widest ${isExecutive ? 'text-[#ED7F1E]' : 'text-slate-500'}`}>
                      {director.role}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100 flex justify-center items-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Odiyooru Souharda
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
