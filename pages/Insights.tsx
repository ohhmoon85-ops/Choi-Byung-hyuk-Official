import React from 'react';
import { ArrowRight, PenTool } from 'lucide-react';
import { INSIGHT_POSTS } from '../constants';

export const Insights: React.FC = () => {
  return (
    <div className="bg-white animate-fade-in">
      {/* Header */}
      <div className="bg-navy-900 py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">통찰과 제언</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            현장의 경험을 통해 얻은 교훈을 나눕니다.<br/>
            대한민국의 내일을 위한 전략적 제언들입니다.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {INSIGHT_POSTS.map((post) => (
            <div key={post.id} className="flex flex-col bg-white border border-gray-200 rounded-lg p-8 hover:border-gold-500 transition-colors group cursor-pointer">
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
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                {post.summary}
              </p>
              <div className="flex items-center text-navy-900 font-bold text-sm group-hover:underline">
                Read Article <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter CTA Placeholder */}
        <div className="mt-20 bg-gray-50 rounded-lg p-12 text-center border border-gray-100">
          <PenTool size={40} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-bold text-navy-900 mb-2">뉴스레터 구독 (준비중)</h3>
          <p className="text-gray-500 mb-6">최병혁의 새로운 칼럼과 소식을 메일로 받아보세요.</p>
          <div className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder="이메일 주소를 입력하세요" 
              className="flex-grow px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-navy-900"
              disabled
            />
            <button className="px-6 py-3 bg-gray-300 text-gray-500 font-bold rounded-sm cursor-not-allowed">
              구독하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};