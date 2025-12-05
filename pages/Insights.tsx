import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

// ------------------------------------------------------------------
// 🛠️ [긴급 수정] 경로 오류 방지를 위해 필요한 기능들을 이 파일 안에 직접 정의합니다.
// 이렇게 하면 "../contexts/..." 같은 파일을 못 찾는 에러가 100% 사라집니다.
// ------------------------------------------------------------------

// 1. 타입 정의 (types.ts 대체)
interface InsightItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  lang?: string;
  content?: string;
  [key: string]: any;
}

// 2. 언어 설정 기능 모의 (LanguageContext 대체)
// 현재는 '한국어(KO)'로 고정하여 작동하게 합니다.
const useLanguage = () => {
  return {
    language: 'KO', 
    content: {
      insights: {
        header: {
          title: "통찰과 제언",
          desc: "현장의 경험을 통해 얻은 교훈을 나눕니다.\n대한민국의 내일을 위한 전략적 제언들입니다."
        },
        posts: [] as InsightItem[] // 기본 고정 글 (필요 시 추가 가능)
      }
    }
  };
};
// ------------------------------------------------------------------

// ✅ Firebase 필수 기능 가져오기
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query } from "firebase/firestore";

// 🛠️ Firebase 설정값 (경로 오류 방지용 직접 입력)
// 사용자님이 보내주신 choi-77760 프로젝트 설정입니다.
const firebaseConfig = {
  apiKey: "AIzaSyA9erYjr_w9f0k11ifajB_J3ebw8p8uSNI",
  authDomain: "choi-77760.firebaseapp.com",
  projectId: "choi-77760",
  storageBucket: "choi-77760.firebasestorage.app",
  messagingSenderId: "874230762412",
  appId: "1:874230762412:web:363459c9ce6604ae180809",
  measurementId: "G-N1RW0JGTL2"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Insights: React.FC = () => {
  // 위에서 정의한 임시 언어 설정 사용 (오류 방지)
  const { content, language } = useLanguage(); 
  const t = content.insights;
  const [allPosts, setAllPosts] = useState<InsightItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        console.log("🔥 [choi-77760] Firebase 데이터 가져오기 시작...");

        // 1. Firebase에서 데이터 가져오기 🚀
        const q = query(collection(db, "insights")); 
        const querySnapshot = await getDocs(q);

        console.log(`📦 Firebase에서 발견된 글 개수: ${querySnapshot.size}개`);

        // 2. 데이터 변환
        const firebasePosts: InsightItem[] = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title,
            summary: data.summary,
            date: data.date,
            category: data.category,
            lang: data.lang,
            content: data.content,
            ...data
          } as InsightItem;
        });

        // 3. 필터링 (대소문자 무시, 언어 설정 없는 글 허용)
        const filteredFirebasePosts = firebasePosts.filter(p => {
          if (!p.lang) return true; 
          return p.lang.toLowerCase() === language.toLowerCase();
        });

        console.log(`✅ 화면에 표시할 글 개수: ${filteredFirebasePosts.length}개`);

        // 4. 합치기
        setAllPosts([...filteredFirebasePosts, ...t.posts]);
        
      } catch (error) {
        console.error("❌ 데이터 가져오기 실패:", error);
        setAllPosts(t.posts);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [language, t.posts]);

  return (
    <div className="bg-white animate-fade-in">
      {/* 헤더 섹션 */}
      <div className="bg-navy-900 py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">{t.header.title}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto whitespace-pre-line">
            {t.header.desc}
          </p>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* 로딩 중일 때 */}
        {loading && (
           <div className="text-center py-10">
             <p className="text-gray-500">글을 불러오는 중입니다...</p>
           </div>
        )}

        {/* 글이 하나도 없을 때 */}
        {!loading && allPosts.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-lg">
            <p className="text-gray-500 text-lg">등록된 게시물이 없습니다.</p>
          </div>
        )}

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

// ✅ [중요] Default Export 추가하여 App.tsx 호환성 확보
export default Insights;
