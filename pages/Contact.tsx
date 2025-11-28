import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Contact: React.FC = () => {
  const { content } = useLanguage();
  const t = content.contact;

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
                    <p className="font-medium">official@choibyunghyuk.kr</p>
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
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.form.name}</label>
                  <input type="text" className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.form.org}</label>
                  <input type="text" className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.form.email}</label>
                  <input type="email" className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.form.type}</label>
                  <select className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900 bg-white">
                    {t.form.typeOptions.map((opt, idx) => (
                      <option key={idx}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.form.message}</label>
                <textarea rows={6} className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900"></textarea>
              </div>

              <div className="flex justify-end">
                <button type="submit" className="px-8 py-4 bg-navy-900 text-white font-bold rounded-sm hover:bg-navy-800 transition-colors">
                  {t.form.submit}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
