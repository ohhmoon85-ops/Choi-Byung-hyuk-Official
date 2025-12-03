import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft, Lock, PenTool, Trash2, Calendar, Edit, Loader2 } from 'lucide-react';
import { PageType, InsightItem, Language } from '../types';
import { db } from '../firebaseConfig';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, orderBy } from 'firebase/firestore';

export const Admin: React.FC = () => {
  const { content } = useLanguage();
  const t = content.admin;
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // Form State
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('한미동맹의 고도화와 미래 (ROK-US Alliance)');
  const [summary, setSummary] = useState('');
  const [bodyContent, setBodyContent] = useState('');
  const [lang, setLang] = useState<Language>('ko');
  const [date, setDate] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  // Edit Mode State
  const [editingId, setEditingId] = useState<string | null>(null);

  // Manage Posts State
  const [posts, setPosts] = useState<InsightItem[]>([]);

  useEffect(() => {
    if (isAuthenticated) {
      loadPosts();
      // Set default date to today
      const today = new Date().toISOString().split('T')[0];
      setDate(today);
    }
  }, [isAuthenticated]);

  const loadPosts = async () => {
    try {
      const postsCollection = collection(db, 'insights');
      const q = query(postsCollection, orderBy('date', 'desc'));
      const querySnapshot = await getDocs(q);
      const fetchedPosts: InsightItem[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as InsightItem));
      setPosts(fetchedPosts);
    } catch (error) {
      console.error("Error loading posts:", error);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin1234') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  const handleEdit = (post: InsightItem) => {
    setEditingId(post.id);
    setTitle(post.title);
    setCategory(post.category);
    setSummary(post.summary);
    setBodyContent(post.content || '');
    setLang(post.lang || 'ko');
    // Convert 'YYYY. MM. DD' to 'YYYY-MM-DD' for input type="date"
    const formattedDate = post.date.replace(/\. /g, '-');
    setDate(formattedDate);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setTitle('');
    setCategory('한미동맹의 고도화와 미래 (ROK-US Alliance)');
    setSummary('');
    setBodyContent('');
    setLang('ko');
    setDate(new Date().toISOString().split('T')[0]);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !summary || !date) return;

    setLoading(true);

    try {
      // Format date for display: YYYY-MM-DD -> YYYY. MM. DD
      const displayDate = date.replace(/-/g, '. ');
      
      const postData = {
        title,
        category,
        summary,
        content: bodyContent,
        date: displayDate,
        lang
      };

      if (editingId) {
        // Update existing post
        const postRef = doc(db, 'insights', editingId);
        await updateDoc(postRef, postData);
      } else {
        // Create new post
        await addDoc(collection(db, 'insights'), postData);
      }

      await loadPosts();
      setSuccess(true);
      cancelEdit(); // Reset form
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Error saving post:", error);
      alert("저장 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('정말 이 글을 삭제하시겠습니까? (삭제 후에는 복구할 수 없습니다.)')) {
      try {
        await deleteDoc(doc(db, 'insights', id));
        
        // If deleting the post currently being edited, cancel edit mode
        if (editingId === id) {
          cancelEdit();
        }
        
        await loadPosts();
      } catch (error) {
        console.error("Error deleting post:", error);
        alert("삭제 중 오류가 발생했습니다.");
      }
    }
  };

  const goHome = () => {
    window.location.hash = PageType.HOME;
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-navy-900 rounded-full text-gold-500">
              <Lock size={32} />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-navy-900 mb-6">{t.loginTitle}</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t.password}
                className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-navy-900"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 bg-navy-900 text-white font-bold rounded hover:bg-navy-800 transition-colors"
            >
              {t.loginButton}
            </button>
            <button
              type="button"
              onClick={goHome}
              className="w-full py-3 text-gray-500 text-sm hover:text-navy-900"
            >
              {t.backButton}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-navy-900 text-white py-4 shadow-md sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <PenTool size={20} className="text-gold-500" />
            <h1 className="font-bold text-lg">{t.dashboardTitle}</h1>
          </div>
          <button onClick={goHome} className="flex items-center text-sm text-gray-300 hover:text-white">
            <ArrowLeft size={16} className="mr-1" /> {t.backButton}
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        
        {/* Write/Edit Section */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-6 pb-4 border-b border-gray-100 flex items-center gap-2">
            {editingId ? t.editTitle : t.writeTitle}
            {editingId && <span className="text-xs font-normal bg-gold-500 text-white px-2 py-0.5 rounded">EDITING</span>}
          </h2>

          {success && (
            <div className="mb-6 p-4 bg-green-50 text-green-700 rounded border border-green-200 animate-fade-in">
              {t.successMessage}
            </div>
          )}

          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.formCategory}</label>
                <input 
                  list="categories" 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-navy-900"
                  placeholder="직접 입력 또는 선택"
                />
                <datalist id="categories">
                  <option value="한미동맹의 고도화와 미래 (ROK-US Alliance)" />
                  <option value="남북관계와 비대칭 위협 대응 (Inter-Korean Relations)" />
                  <option value="미중 패권 경쟁과 한중 관계 (US-China & ROK-China)" />
                  <option value="한반도 주변국 및 역내 안보 (Japan, Russia & Regional Security)" />
                  <option value="글로벌 복합 위기와 확장된 안보 (Global Security & Middle East)" />
                </datalist>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.formLang}</label>
                <div className="flex gap-4 py-2">
                  <label className="flex items-center cursor-pointer">
                    <input 
                      type="radio" 
                      name="lang" 
                      value="ko" 
                      checked={lang === 'ko'}
                      onChange={(e) => setLang(e.target.value as Language)}
                      className="mr-2 text-navy-900 focus:ring-navy-900"
                    />
                    한국어
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input 
                      type="radio" 
                      name="lang" 
                      value="en" 
                      checked={lang === 'en'}
                      onChange={(e) => setLang(e.target.value as Language)}
                      className="mr-2 text-navy-900 focus:ring-navy-900"
                    />
                    English
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">날짜 (Date)</label>
                <input 
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-navy-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t.formTitle}</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-navy-900"
                placeholder="제목을 입력하세요..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t.formSummary}</label>
              <textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                rows={3}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-navy-900"
                placeholder="리스트에 표시될 요약 내용을 입력하세요..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">본문 (Body Content)</label>
              <textarea
                value={bodyContent}
                onChange={(e) => setBodyContent(e.target.value)}
                rows={10}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-navy-900 font-sans"
                placeholder="전체 내용을 입력하세요..."
              />
            </div>

            <div className="pt-2 flex gap-3">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 sm:flex-none px-8 py-3 bg-gold-500 text-navy-900 font-bold rounded hover:bg-gold-600 transition-colors shadow-sm disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading && <Loader2 className="animate-spin" size={18} />}
                {editingId ? t.updateButton : t.saveButton}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="px-6 py-3 bg-gray-200 text-gray-700 font-bold rounded hover:bg-gray-300 transition-colors"
                >
                  {t.cancelButton}
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Manage Section */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-xl font-bold text-navy-900 mb-6 pb-4 border-b border-gray-100 flex items-center justify-between">
            <span>작성된 글 관리 (Firestore)</span>
            <span className="text-sm font-normal text-gray-500">총 {posts.length}건</span>
          </h2>

          {posts.length === 0 ? (
            <p className="text-gray-400 text-center py-8">아직 작성된 글이 없습니다.</p>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <div key={post.id} className={`border rounded-lg p-4 transition-colors flex justify-between items-start gap-4 ${editingId === post.id ? 'border-gold-500 bg-gold-50' : 'border-gray-200 hover:border-navy-900'}`}>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded text-white ${post.lang === 'en' ? 'bg-blue-600' : 'bg-navy-900'}`}>
                        {post.lang === 'en' ? 'EN' : 'KO'}
                      </span>
                      <span className="text-gold-600 text-xs font-bold uppercase">{post.category}</span>
                      <div className="flex items-center text-gray-400 text-xs">
                        <Calendar size={12} className="mr-1" /> {post.date}
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-800">{post.title}</h3>
                    <p className="text-gray-500 text-sm mt-1 line-clamp-1">{post.summary}</p>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleEdit(post)}
                      className="text-gray-400 hover:text-navy-900 transition-colors p-2"
                      title="수정하기"
                    >
                      <Edit size={18} />
                    </button>
                    <button 
                      onClick={() => handleDelete(post.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-2"
                      title="삭제하기"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </main>
    </div>
  );
};
