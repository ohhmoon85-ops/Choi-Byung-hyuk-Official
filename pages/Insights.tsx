import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { InsightItem } from '../types';

// ✅ Firebase 관련 기능 가져오기 (이 부분이 추가되었습니다!)
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // 파일 위치에 따라 '../firebaseConfig' 경로가 맞는지 확인 필요

export const Insights: React.FC = () => {
  const { content, language } = useLanguage();
  const t = content.insights;
  const [allPosts, setAllPosts] = useState<InsightItem[]>([]);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);

        // 1. Firebase에서 데이터 가져오기 (여기가 핵심입니다!) 🚀
        // insights 컬렉션을 가져오고, 날짜(date) 기준으로 정렬합니다.
        const q = query(collection(db, "insights")); // 만약 정렬이 필요하면 query(collection(db, "insights"), orderBy("date", "desc"));
        const querySnapshot = await getDocs(q);

        const firebasePosts: InsightItem[] = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as InsightItem[];

        // 2. 현재 언어(lang)에 맞는 글만 필터링
        const filteredFirebasePosts = firebasePosts.filter(p => p.lang === language);

        // 3. 고정된 글(Static posts)과 합치기 (필요하다면)
        // Firebase 글을 먼저 보여주고, 그 뒤에 고정 글을 보여줍니다.
        setAllPosts([...filteredFirebasePosts, ...t.posts]);
        
      } catch (error) {
        console.error("Firebase 데이터 가져오기 실패:", error);
        // 에러가 나면 고정된 글이라도 보여줍니다.
        setAllPosts(t.posts);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [language, t.posts]); // 언어가 바뀌면 다시 불러옵니다.

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
        
        {/* 로딩 중일 때 표시 */}
        {loading && (
           <div className="text-center py-10">
             <p className="text-gray-500">글을 불러오는 중입니다...</p>
           </div>
        )}

        {/* 글이 없을 때 표시 */}
        {!loading && allPosts.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-lg">
            <p className="text-gray-500 text-lg">등록된 게시물이 없습니다.</p>
          </div>
        )}

        {/* 글 목록 표시 */}
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
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow line-clamp-3">
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
