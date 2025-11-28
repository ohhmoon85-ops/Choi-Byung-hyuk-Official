import React from 'react';
import { ArrowRight, PenTool, Edit3 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Insights: React.FC = () => {
  const { content } = useLanguage();
  const t = content.insights;

  return (
    <div className="bg-white animate-fade-in">
      {/* Header */}
      <div className="bg-navy-900 py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">{t.header.title}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto whitespace-pre-line">
            {t.header.desc}
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Posts Area */}
          <div className="lg:w-3/4">
             <div className="grid md:grid-cols-2 gap-8">
              {t.posts.map((post) => (
                <div key={post.id} className="flex flex-col bg-white border border-gray-200 rounded-lg p-8 hover:border-gold-500 transition-colors group cursor-pointer">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gold-600 text-xs font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-4 group-hover:text-gold-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                    {post.summary}
                  </p>
                  <div className="flex items-center text-navy-900 font-bold text-sm group-hover:underline">
                    Read Article <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4 space-y-8">
            
            {/* Writer's Access Banner (Admin Link) */}
            <div className="bg-navy-900 text-white rounded-lg p-6 shadow-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Edit3 size={100} />
              </div>
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-gold-500 mb-2">{t.sidebar.author.title}</h3>
                <p className="text-gray-300 text-sm mb-6">{t.sidebar.author.desc}</p>
                <button className="w-full py-3 bg-white/10 border border-white/20 hover:bg-white hover:text-navy-900 rounded-sm transition-all text-sm font-bold flex items-center justify-center">
                  <Edit3 size={14} className="mr-2" /> {t.sidebar.author.button}
                </button>
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="bg-gray-50 rounded-lg p-6 text-center border border-gray-100">
              <PenTool size={32} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-bold text-navy-900 mb-2">{t.sidebar.newsletter.title}</h3>
              <p className="text-gray-500 text-sm mb-6">{t.sidebar.newsletter.desc}</p>
              <div className="flex flex-col gap-2">
                <input 
                  type="email" 
                  placeholder={t.sidebar.newsletter.placeholder} 
                  className="w-full px-4 py-2 text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-navy-900"
                  disabled
                />
                <button className="w-full px-4 py-2 bg-gray-300 text-gray-500 font-bold text-sm rounded-sm cursor-not-allowed">
                  {t.sidebar.newsletter.button}
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
