import React from 'react';
import { Award, BookOpen, Briefcase, Star } from 'lucide-react';
import { PROFILE_TIMELINE } from '../constants';

export const Profile: React.FC = () => {
  return (
    <div className="bg-white animate-fade-in">
      {/* Header */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold text-navy-900 mb-4">헌신의 발자취</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            국가가 부르면 어디든 갔습니다.<br/>
            군인으로서의 명예와 외교관으로서의 사명을 가슴에 품고 살아온 날들입니다.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-20">
        <div className="relative border-l-2 border-gray-200 ml-4 md:ml-6 space-y-12">
          {PROFILE_TIMELINE.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Icon */}
              <div className={`absolute -left-[17px] top-0 w-9 h-9 rounded-full border-4 border-white flex items-center justify-center shadow-sm ${
                item.type === 'military' ? 'bg-navy-900 text-white' : 
                item.type === 'diplomacy' ? 'bg-gold-500 text-white' : 'bg-gray-500 text-white'
              }`}>
                {item.type === 'military' && <Star size={14} fill="currentColor" />}
                {item.type === 'diplomacy' && <Briefcase size={14} />}
                {item.type === 'education' && <BookOpen size={14} />}
              </div>

              {/* Content Card */}
              <div className="bg-white border border-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <span className="inline-block px-3 py-1 bg-gray-100 text-navy-900 text-xs font-bold rounded-full mb-3">
                  {item.period}
                </span>
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  {item.role}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Awards Section */}
        <div className="mt-24 bg-navy-900 text-white rounded-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="bg-gold-500 p-4 rounded-full text-navy-900 shrink-0">
              <Award size={48} />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">주요 상훈</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3"></span>
                  보국훈장 통일장 수훈 (대한민국 정부 최고 영예)
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3"></span>
                  미 공로훈장 (Legion of Merit) 수훈
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3"></span>
                  대통령 표창 및 국방부 장관 표창 다수
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};