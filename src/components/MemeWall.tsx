import React, { useState } from 'react';
import { Heart, Sparkles, MessageSquare, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TESTIMONIALS_DATA } from '../data/presets';

interface GalleryMeme {
  id: string;
  author: string;
  tag: string;
  caption: string;
  avatar: string;
  likes: number;
  bgGradient: string;
}

export const MemeWall: React.FC = () => {
  const [likesMap, setLikesMap] = useState<Record<string, number>>({
    '1': 342,
    '2': 289,
    '3': 415,
    'm1': 892,
    'm2': 641,
    'm3': 520,
  });

  const [hasLiked, setHasLiked] = useState<Record<string, boolean>>({});

  const sampleMemes: GalleryMeme[] = [
    {
      id: 'm1',
      author: '打工猫猫',
      tag: '#早八现状',
      caption: '周一早八：真的一滴都没有了',
      avatar: '🐱',
      likes: 892,
      bgGradient: 'from-amber-200 to-rose-200'
    },
    {
      id: 'm2',
      author: '修仙老道',
      tag: '#改完这版就睡',
      caption: '甲方：再改一版 / 我：我直接开摆',
      avatar: '🐼',
      likes: 641,
      bgGradient: 'from-sky-200 to-indigo-200'
    },
    {
      id: 'm3',
      author: '卡皮巴拉本豚',
      tag: '#精神状态良好',
      caption: '天塌下来，也是先泡个热水澡',
      avatar: '🦫',
      likes: 520,
      bgGradient: 'from-emerald-200 to-teal-200'
    }
  ];

  const handleLike = (id: string, e: React.MouseEvent) => {
    if (!hasLiked[id]) {
      setLikesMap((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
      setHasLiked((prev) => ({ ...prev, [id]: true }));
      
      const rect = e.currentTarget.getBoundingClientRect();
      confetti({
        particleCount: 25,
        spread: 45,
        origin: {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight
        },
        colors: ['#FF6B6B', '#FFD166', '#FF8FA3']
      });
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#FFFDF5] border-b border-[#F0ECE1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFF0F3] text-[#FF85A1] text-xs sm:text-sm font-bold border border-[#FFD1DC]">
            <Flame className="w-4 h-4 text-[#FF85A1]" />
            <span>群聊梗王们的秘密武器</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#333333] tracking-tight">
            全网都在用的<span className="text-[#FF85A1] font-cute">爆款梗图墙</span>
          </h2>
          <p className="text-[#666666] text-sm sm:text-base font-medium">
            看看其他小伙伴用 MemeCapture 创造的搞笑杰作，群聊斗图从来没输过！
          </p>
        </div>

        {/* Meme Cards Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {sampleMemes.map((meme) => (
            <div
              key={meme.id}
              className="bg-white p-6 rounded-[28px] border-2 border-[#FFE5B4]/80 shadow-[0_10px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              {/* Visual Card */}
              <div className={`w-full h-52 rounded-[22px] bg-gradient-to-tr ${meme.bgGradient} flex items-center justify-center relative overflow-hidden p-4 shadow-inner mb-4`}>
                <span className="text-7xl group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
                  {meme.avatar}
                </span>
                
                {/* Overlay Caption with Outline */}
                <div className="absolute bottom-3.5 left-0 right-0 text-center px-3">
                  <span 
                    className="font-cute text-lg sm:text-xl text-white font-extrabold"
                    style={{
                      textShadow: '-1.5px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000, 1.5px 1.5px 0 #000, 0 2px 4px rgba(0,0,0,0.6)'
                    }}
                  >
                    {meme.caption}
                  </span>
                </div>
              </div>

              {/* Author and Like Bar */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 text-xs font-bold bg-[#FFFDF5] text-[#555555] rounded-full border border-[#EEE]">
                    {meme.tag}
                  </span>
                  <span className="text-xs font-bold text-[#777777]">
                    by {meme.author}
                  </span>
                </div>

                <button
                  onClick={(e) => handleLike(meme.id, e)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    hasLiked[meme.id]
                      ? 'bg-[#FFF0F3] text-[#FF85A1] border border-[#FFD1DC] shadow-2xs'
                      : 'bg-[#FFFDF5] hover:bg-[#FFF0F3] text-[#555555] hover:text-[#FF85A1] border border-[#EEE]'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${hasLiked[meme.id] ? 'fill-[#FF85A1] text-[#FF85A1]' : ''}`} />
                  <span>{likesMap[meme.id]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* User Reviews Deck */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-white p-7 rounded-[28px] border-2 border-[#FFE5B4]/70 shadow-[0_6px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.05)] transition-all space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FFFBE6] border border-[#FFE58F] flex items-center justify-center text-2xl shadow-2xs">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#333333]">{t.author}</h4>
                  <p className="text-xs text-[#888888] font-medium">{t.role}</p>
                </div>
              </div>

              <p className="text-[#555555] text-xs sm:text-sm leading-relaxed font-medium">
                "{t.content}"
              </p>

              <div className="flex items-center justify-between text-xs text-[#888888] pt-3 border-t border-[#F0ECE1] font-medium">
                <span className="text-[#FFD93D] font-bold text-sm">★★★★★</span>
                <span className="flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-[#FF85A1] fill-[#FF85A1]" />
                  {t.likes} 赞同
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
