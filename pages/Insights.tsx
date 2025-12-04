import React, { useEffect, useState } from 'react';
import { ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { InsightItem } from '../types';
import { db } from '../firebaseConfig';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export const Insights: React.FC = () => {
  const { content, language } = useLanguage();
  const t = content.insights;
  const [posts, setPosts] = useState<InsightItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<InsightItem | null>(null);

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

  // If a post is selected, show the detail view
  if (selectedPost) {
    return (
      <div className="bg-white animate-fade-in min-h-screen">
        {/* Detail Header */}
        <div className="bg-gray-50 py-12 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4">
            <button 
              onClick={() => setSelectedPost(null)}
              className="group flex items-center text-navy-900 font-bold hover:text-gold-500 transition-colors mb-8"
            >
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
              Back to Insights
            </button>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-navy-900 text-white text-xs font-bold px-2 py-1 rounded">
                {selectedPost.lang === 'en' ? 'EN' : 'KO'}
              </span>
              <span className="text-gold-600 font-bold tracking-wider uppercase text-sm">
                {selectedPost.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-navy-900 mb-6 leading-tight">
              {selectedPost.title}
            </h1>
            
            <div className="text-gray-500 font-medium border-l-4 border-gold-500 pl-4">
              {selectedPost.date}
            </div>
          </div>
        </div>
        
        {/* Detail Body */}
        <div className="max-w-3xl mx-auto px-4 py-16">
          {/* Summary Box */}
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-navy-900 mb-12 italic text-gray-700 leading-relaxed">
            {selectedPost.summary}
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none text-gray-800 whitespace-pre-line leading-relaxed font-serif">
            {selectedPost.content ? selectedPost.content : (
              <p className="text-gray-400 italic text-center py-10">[본문 내용이 없습니다]</p>
            )}
          </div>
          
          {/* Bottom Back Button */}
          <div className="mt-16 pt-8 border-t border-gray-200 flex justify-center">
             <button 
              onClick={() => setSelectedPost(null)}
              className="px-8 py-3 bg-navy-900 text-white font-bold rounded hover:bg-navy-800 transition-colors"
            >
              목록으로 돌아가기
            </button>
          </div>
        </div>
      </div>
    );
  }

  // List View (Default)
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
          <div className="text-center text-gray-500 py-12 bg-gray-50 rounded-lg">
            <p className="text-lg">등록된 게시물이 없습니다.</p>
            <p className="text-sm mt-2">관리자 페이지에서 글을 작성해주세요.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div 
                key={post.id} 
                onClick={() => setSelectedPost(post)}
                className="flex flex-col bg-white border border-gray-200 rounded-lg p-8 hover:border-gold-500 hover:shadow-lg transition-all duration-300 group cursor-pointer h-full transform hover:-translate-y-1"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gold-600 text-xs font-bold uppercase tracking-wider bg-gold-50 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-sm font-medium">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4 group-hover:text-gold-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow line-clamp-3">
                  {post.summary}
                </p>
                <div className="flex items-center text-navy-900 font-bold text-sm group-hover:underline mt-auto pt-4 border-t border-gray-100">
                  Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};