import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft, Lock, PenTool } from 'lucide-react';
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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock password
    if (password === 'admin1234') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !summary) return;

    const newPost: InsightItem = {
      id: Date.now(),
      title,
      category,
      summary,
      date: new Date().toISOString().split('T')[0].replace(/-/g, '. '),
      lang // Save the language of the post
    };

    // Save to local storage
    const existingPosts = JSON.parse(localStorage.getItem('custom_insights') || '[]');
    localStorage.setItem('custom_insights', JSON.stringify([newPost, ...existingPosts]));

    setSuccess(true);
    setTitle('');
    setSummary('');
    
    // Reset success message after 3 seconds
    setTimeout(() => setSuccess(false), 3000);
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
    <div className="min-h-screen bg-gray-50">
      <header className="bg-navy-900 text-white py-4 shadow-md">
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

      <main className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-6 pb-4 border-b border-gray-100">
            {t.writeTitle}
          </h2>

          {success && (
            <div className="mb-6 p-4 bg-green-50 text-green-700 rounded border border-green-200">
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
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-navy-900"
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
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-navy-900"
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
                placeholder="Enter title..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t.formSummary}</label>
              <textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                rows={6}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-navy-900"
                placeholder="Enter summary content..."
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="px-8 py-3 bg-gold-500 text-navy-900 font-bold rounded hover:bg-gold-600 transition-colors"
              >
                {t.saveButton}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};