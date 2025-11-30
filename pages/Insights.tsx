import React, { useEffect, useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { InsightItem } from '../types';
import { db } from '../firebaseConfig';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export const Insights: React.FC = () => {
  const { content, language } = useLanguage();
  const t = content.insights;
  const [posts, setPosts] = useState<InsightItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsCollection = collection(db, 'insights');
        const q = query(postsCollection, orderBy('date', 'desc'));
        const querySnapshot = await getDocs(q);
        
        const fetchedPosts: InsightItem[] = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as InsightItem));

        // Filter by current language
        const filteredPosts = fetchedPosts.filter(p => p.lang === language || !p.lang);
        setPosts(filteredPosts);
      } catch (error) {
        console.error("Error fetching insights:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [language]);

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
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="animate-spin text-navy-900" size={48} />
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            등록된 게시물이 없습니다.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
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
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow line-clamp-3">
                  {post.summary}
                </p>
                <div className="flex items-center text-navy-900 font-bold text-sm group-hover:underline mt-auto">
                  Read Article <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};