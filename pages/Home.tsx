import React from 'react';
import { Shield, Globe, Scale } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Home: React.FC = () => {
  const { content } = useLanguage();
  const t = content.home;

  const navigateTo = (page: string) => {
    window.location.hash = page;
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1590845947698-8924d7409b56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
            backgroundPosition: '50% 30%'
          }}
        ></div>
        <div className="absolute inset-0 bg-navy-900/80"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight whitespace-pre-line">
            {t.hero.title.split(t.hero.titleHighlight).map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && <span className="text-gold-500">{t.hero.titleHighlight}</span>}
              </React.Fragment>
            ))}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
            {t.hero.desc}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => navigateTo('profile')}
              className="px-8 py-4 bg-gold-500 text-navy-900 font-bold rounded-sm hover:bg-gold-600 transition-colors w-full sm:w-auto"
            >
              {t.hero.ctaProfile}
            </button>
            <button 
              onClick={() => navigateTo('insights')}
              className="px-8 py-4 border border-white text-white font-medium rounded-sm hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              {t.hero.ctaInsights}
            </button>
          </div>
        </div>
      </section>

      {/* Identity Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-navy-900 mb-8">
            {t.identity.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center text-left">
            <div className="bg-white p-8 shadow-sm border-l-4 border-gray-300">
              <h3 className="text-gray-500 font-bold mb-2 text-sm uppercase tracking-wide">{t.identity.challengeTitle}</h3>
              <p className="text-gray-800 leading-relaxed">
                {t.identity.challengeDesc}
              </p>
            </div>
            <div className="bg-white p-8 shadow-lg border-l-4 border-gold-500 transform md:-translate-y-4">
              <h3 className="text-gold-600 font-bold mb-2 text-sm uppercase tracking-wide">{t.identity.solutionTitle}</h3>
              <p className="text-navy-900 font-medium leading-relaxed">
                {t.identity.solutionDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Expertise */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">{t.features.title}</h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {t.features.items.map((item, index) => {
              const icons = [Shield, Globe, Scale];
              const Icon = icons[index % icons.length];
              return (
                <div key={index} className="text-center group p-6 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-16 h-16 mx-auto bg-navy-900 rounded-full flex items-center justify-center mb-6 text-gold-500 group-hover:scale-110 transition-transform">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-b border-gray-800 pb-12 mb-12">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">40+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">{t.proof.years}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">4★</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">{t.proof.general}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">Amb.</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">{t.proof.ambassador}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">1st</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">{t.proof.merit}</div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl font-serif italic text-gray-300 leading-relaxed mb-6">
              {t.proof.quote}
            </p>
            <p className="text-gold-500 font-medium">{t.proof.quoteSource}</p>
          </div>
        </div>
      </section>
    </div>
  );
};
