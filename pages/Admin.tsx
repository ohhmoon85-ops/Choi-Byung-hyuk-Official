import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft, Lock, PenTool, Trash2, Calendar, Edit } from 'lucide-react';
import { PageType, InsightItem, Language } from '../types';

export const Admin: React.FC = () => {
  const { content } = useLanguage();
  const t = content.admin;
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // Form State
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('National Security');
  const [summary, setSummary] = useState('');
  const [lang, setLang] = useState<Language>('ko');
  const [success, setSuccess] = useState(false);
  
  // Edit Mode State
  const [editingId, setEditingId] = useState<number | null>(null);

  // Manage Posts State
  const [customPosts, setCustomPosts] = useState<InsightItem[]>([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = () => {
    const existingPosts = JSON.parse(localStorage.getItem('custom_insights') || '[]');
    setCustomPosts(existingPosts);
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
    setLang(post.lang || 'ko');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setTitle('');
    setCategory('National Security');
    setSummary('');
    setLang('ko');
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !summary) return;

    if (editingId) {
      // Update existing post
      const updatedPosts = customPosts.map(post => {
        if (post.id === editingId) {
          return {
            ...post,
            title,
            category,
            summary,
            lang
          };
        }
        return post;
      });
      localStorage.setItem('custom_insights', JSON.stringify(updatedPosts));
      setCustomPosts(updatedPosts);
      setEditingId(null);
    } else {
      // Create new post
      const newPost: InsightItem = {
        id: Date.now(),
        title,
        category,
        summary,
        date: new Date().toISOString().split('T')[0].replace(/-/g, '. '),
        lang 
      };
      const updatedPosts = [newPost, ...customPosts];
      localStorage.setItem('custom_insights', JSON.stringify(updatedPosts));
      setCustomPosts(updatedPosts);
    }

    setSuccess(true);
    setTitle('');
    setSummary('');
    // Keep category and lang preferences

    setTimeout(() => setSuccess(false), 3000);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('정말 이 글을 삭제하시겠습니까? (삭제 후에는 복구할 수 없습니다.)')) {
      const updatedPosts = customPosts.filter(post => post.id !== id);
      localStorage.setItem('custom_insights', JSON.stringify(updatedPosts));
      setCustomPosts(updatedPosts);
      
      // If deleting the post currently being edited, cancel edit mode
      if (editingId === id) {
        cancelEdit();
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
            <div className="grid grid-cols-2 gap-4">
               <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.formCategory}</label>
                <select 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-navy-900 bg-white"
                >
                  <option>National Security</option>
                  <option>Diplomacy & Economy</option>
                  <option>Leadership</option>
                  <option>General</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.formLang}</label>
                <select 
                  value={lang}
                  onChange={(e) => setLang(e.target.value as Language)}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-navy-900 bg-white"
                >
                  <option value="ko">한국어 (Korean)</option>
                  <option value="en">English</option>
                </select>
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
                rows={4}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-navy-900"
                placeholder="내용 요약을 입력하세요..."
              />
            </div>

            <div className="pt-2 flex gap-3">
              <button
                type="submit"
                className="flex-1 sm:flex-none px-8 py-3 bg-gold-500 text-navy-900 font-bold rounded hover:bg-gold-600 transition-colors shadow-sm"
              >
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
            <span>내가 쓴 글 관리</span>
            <span className="text-sm font-normal text-gray-500">총 {customPosts.length}건</span>
          </h2>

          {customPosts.length === 0 ? (
            <p className="text-gray-400 text-center py-8">아직 작성된 글이 없습니다.</p>
          ) : (
            <div className="space-y-4">
              {customPosts.map((post) => (
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