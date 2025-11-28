import React from 'react';
import { ArrowRight, Globe, Shield, Scale } from 'lucide-react';
import { PageType } from '../types';

export const Home: React.FC = () => {
  const navigateTo = (page: string) => {
    window.location.hash = page;
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1590845947698-8924d7409b56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
            backgroundPosition: '50% 30%'
          }}
        ></div>
        <div className="absolute inset-0 bg-navy-900/80"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            전장의 지휘관에서<br />
            <span className="text-gold-500">평화의 외교관</span>으로
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            대한민국 안보의 최전선 한미연합사에서 중동의 핵심 사우디아라비아까지.<br />
            최병혁이 걸어온 길은 언제나 국익을 향했습니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => navigateTo('profile')}
              className="px-8 py-4 bg-gold-500 text-navy-900 font-bold rounded-sm hover:bg-gold-600 transition-colors w-full sm:w-auto"
            >
              프로필 자세히 보기
            </button>
            <button 
              onClick={() => navigateTo('insights')}
              className="px-8 py-4 border border-white text-white font-medium rounded-sm hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              최신 칼럼 읽기
            </button>
          </div>
        </div>
      </section>

      {/* Identity Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-navy-900 mb-8">
            "안보 위기의 시대, 검증된 리더십이 필요합니다."
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center text-left">
            <div className="bg-white p-8 shadow-sm border-l-4 border-gray-300">
              <h3 className="text-gray-500 font-bold mb-2 text-sm uppercase tracking-wide">The Challenge</h3>
              <p className="text-gray-800 leading-relaxed">
                급변하는 국제 정세와 복잡해지는 안보 위협 속에서, 단순한 대응을 넘어 올바른 방향을 제시할 경험과 통찰이 그 어느 때보다 필요한 시점입니다.
              </p>
            </div>
            <div className="bg-white p-8 shadow-lg border-l-4 border-gold-500 transform md:-translate-y-4">
              <h3 className="text-gold-600 font-bold mb-2 text-sm uppercase tracking-wide">The Solution</h3>
              <p className="text-navy-900 font-medium leading-relaxed">
                40여 년간 군과 외교 현장에서 축적한 실전 경험과 전략적 식견으로, 대한민국이 나아가야 할 길을 제시합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Expertise */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">Core Expertise</h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="text-center group p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 mx-auto bg-navy-900 rounded-full flex items-center justify-center mb-6 text-gold-500 group-hover:scale-110 transition-transform">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">한미 동맹 전문가</h3>
              <p className="text-gray-600 leading-relaxed">
                한미연합사 부사령관 역임.<br/>
                연합 방위 태세 확립과 전시작전통제권 전환의 기틀을 마련했습니다.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center group p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 mx-auto bg-navy-900 rounded-full flex items-center justify-center mb-6 text-gold-500 group-hover:scale-110 transition-transform">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">중동 외교 전략가</h3>
              <p className="text-gray-600 leading-relaxed">
                주 사우디아라비아 대사 역임.<br/>
                에너지 안보와 방산 수출 등 실리 외교를 주도하며 새로운 지평을 열었습니다.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center group p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 mx-auto bg-navy-900 rounded-full flex items-center justify-center mb-6 text-gold-500 group-hover:scale-110 transition-transform">
                <Scale size={32} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">위기 관리 리더십</h3>
              <p className="text-gray-600 leading-relaxed">
                국가적 위기 상황에서 조직을 통솔하고<br/>
                최적의 해법을 도출하는 검증된 리더십을 보유했습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-b border-gray-800 pb-12 mb-12">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">40+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Years of Service</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">4★</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">General (Ret.)</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">Amb.</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Top Diplomat</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">1st</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Class Order Merit</div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl font-serif italic text-gray-300 leading-relaxed mb-6">
              "최병혁 장군은 군인이자 외교관으로서,<br className="hidden md:block"/> 탁월한 전략적 식견을 가진 진정한 애국자다."
            </p>
            <p className="text-gold-500 font-medium">– 전 주한미군사령관 추천사</p>
          </div>
        </div>
      </section>
    </div>
  );
};