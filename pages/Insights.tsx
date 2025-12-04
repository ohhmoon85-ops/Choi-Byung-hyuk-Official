import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { InsightItem } from '../types';

export const Insights: React.FC = () => {
  const { content, language } = useLanguage();
  const t = content.insights;
  const [allPosts, setAllPosts] = useState<InsightItem[]>([]);

  useEffect(() => {
    // 1. Get static posts from constants (already filtered by language via context)
    const staticPosts = t.posts;

    // 2. Get custom posts from local storage
    const customPostsRaw = localStorage.getItem('custom_insights');
    let customPosts: InsightItem[] = [];
    
    if (customPostsRaw) {
      try {
        const parsed = JSON.parse(customPostsRaw);
        // Filter custom posts to match the current language context
        // If a post doesn't have a lang property (legacy), default to showing it or treat as 'ko'
        customPosts = parsed.filter((p: InsightItem) => p.lang === language || !p.lang);
      } catch (e) {
        console.error("Failed to parse custom posts", e);
      }
    }

    // 3. Merge: Custom posts first (newest), then static posts
    setAllPosts([...customPosts, ...staticPosts]);
  }, [t.posts, language]);

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPosts.map((post) => (
            <div key={post.id} className="flex flex-col bg-white border border-gray-200 rounded-lg p-8 hover:border-gold-500 transition-colors group cursor-pointer h-full">
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
              <div className="flex items-center text-navy-900 font-bold text-sm group-hover:underline mt-auto">
                Read Article <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};