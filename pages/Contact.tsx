import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="bg-white animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-navy-900 mb-4">소통과 연결</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            대한민국의 안보와 미래를 위한 논의라면 언제든 환영합니다.<br/>
            강연, 자문, 언론 인터뷰 등을 제안해 주세요.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Info Section */}
          <div className="md:col-span-1 space-y-8">
            <div className="bg-navy-900 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-gold-500">Contact Info</h3>
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
                    <p className="text-sm text-gray-400 uppercase tracking-wide">Office</p>
                    <p className="font-medium">서울특별시 종로구 (가상 주소)</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-700">
                <h4 className="font-bold mb-4 text-white">주요 문의 분야</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• 기업 및 기관 안보/리더십 강연</li>
                  <li>• 방산 수출 및 중동 진출 기업 자문</li>
                  <li>• 언론 인터뷰 및 방송 출연</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="md:col-span-2 bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-navy-900 mb-8">메시지 보내기</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">이름 (Name)</label>
                  <input type="text" className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">소속 (Organization)</label>
                  <input type="text" className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">이메일 (Email)</label>
                  <input type="email" className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">문의 유형 (Type)</label>
                  <select className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900 bg-white">
                    <option>강연 요청 (Lecture)</option>
                    <option>자문 요청 (Advisory)</option>
                    <option>인터뷰 요청 (Interview)</option>
                    <option>기타 (Other)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">상세 내용 (Message)</label>
                <textarea rows={6} className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900"></textarea>
              </div>

              <div className="flex justify-end">
                <button type="submit" className="px-8 py-4 bg-navy-900 text-white font-bold rounded-sm hover:bg-navy-800 transition-colors">
                  메시지 전송하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};