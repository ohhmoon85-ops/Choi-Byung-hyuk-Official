import React from 'react';
import { PlayCircle, Image as ImageIcon, FileText } from 'lucide-react';
import { MEDIA_ITEMS } from '../constants';

export const Media: React.FC = () => {
  return (
    <div className="bg-white animate-fade-in">
      {/* Header */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold text-navy-900 mb-4">현장의 기록</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            치열했던 훈련 현장부터 긴박했던 외교 무대까지,<br/>
            역사의 한 페이지를 장식한 순간들입니다.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MEDIA_ITEMS.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-sm cursor-pointer">
              {/* Image Container */}
              <div className="aspect-w-16 aspect-h-9 w-full h-80 overflow-hidden bg-gray-200">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/40 transition-colors duration-300 flex items-center justify-center">
                  {item.type === 'video' && <PlayCircle size={64} className="text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300" />}
                  {item.type === 'photo' && <ImageIcon size={64} className="text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300" />}
                  {item.type === 'press' && <FileText size={64} className="text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300" />}
                </div>
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                    item.type === 'video' ? 'bg-red-600 text-white' :
                    item.type === 'press' ? 'bg-blue-600 text-white' : 'bg-gold-500 text-navy-900'
                  }`}>
                    {item.type.toUpperCase()}
                  </span>
                  {item.source && <span className="text-xs text-gray-300">| {item.source}</span>}
                </div>
                <h3 className="text-white text-xl font-bold leading-tight drop-shadow-md">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};