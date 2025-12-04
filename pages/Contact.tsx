import React, { useState } from 'react';
import { Mail, MapPin, Loader2, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { CONTACT_EMAIL } from '../constants';

export const Contact: React.FC = () => {
  const { content } = useLanguage();
  const t = content.contact;

  const [name, setName] = useState('');
  const [org, setOrg] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState(t.form.typeOptions[0]);
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // FormSubmit Endpoint
    // Ajax 요청을 통해 이메일을 전송합니다.
    // CONTACT_EMAIL 상수를 사용하여 constants.ts에서 정의된 이메일로 발송됩니다.
    const endpoint = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `[웹사이트 문의] ${type} - ${name}`, // 메일 제목
          _template: 'table', // 메일 디자인 템플릿
          _captcha: 'false', // 캡차 비활성화 (필요시 'true')
          name: name,
          organization: org,
          email: email, // 답장 받을 이메일 (Reply-To)
          inquiry_type: type,
          message: message
        })
      });

      if (response.ok) {
        alert("메시지가 성공적으로 전송되었습니다.\n검토 후 빠른 시일 내에 답변 드리겠습니다.");
        // 폼 초기화
        setName('');
        setOrg('');
        setEmail('');
        setMessage('');
        setType(t.form.typeOptions[0]);
      } else {
        throw new Error('전송 실패');
      }
    } catch (error) {
      console.error(error);
      alert("메시지 전송 중 오류가 발생했습니다.\n잠시 후 다시 시도해주시거나, 이메일로 직접 연락 부탁드립니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-navy-900 mb-4">{t.header.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto whitespace-pre-line">
            {t.header.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Info Section */}
          <div className="md:col-span-1 space-y-8">
            <div className="bg-navy-900 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-gold-500">{t.info.title}</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 mt-1 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                    <p className="font-medium break-all">{CONTACT_EMAIL}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 mt-1 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wide">{t.info.office}</p>
                    <p className="font-medium">{t.info.address}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-700">
                <h4 className="font-bold mb-4 text-white">{t.info.inquiryTitle}</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {t.info.inquiries.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="md:col-span-2 bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-navy-900 mb-8">{t.form.title}</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.form.name}</label>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900 disabled:bg-gray-100" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.form.org}</label>
                  <input 
                    type="text" 
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900 disabled:bg-gray-100" 
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.form.email}</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                    placeholder="답변 받으실 이메일 주소"
                    className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900 disabled:bg-gray-100" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.form.type}</label>
                  <select 
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900 bg-white disabled:bg-gray-100"
                  >
                    {t.form.typeOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.form.message}</label>
                <textarea 
                  rows={6} 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900 disabled:bg-gray-100"
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-navy-900 text-white font-bold rounded-sm hover:bg-navy-800 transition-colors flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      전송 중...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      {t.form.submit}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};