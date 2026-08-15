import React, { useState, useEffect } from 'react';
import { 
  Download, 
  Sparkles, 
  Play, 
  Github, 
  Check, 
  Camera, 
  Pin, 
  Type, 
  Smile, 
  Grid, 
  MousePointer, 
  ShieldCheck, 
  Zap,
  ArrowRight,
  Flame,
  Layers
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeroProps {
  onOpenDownload: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload }) => {
  const [activeTool, setActiveTool] = useState<'text' | 'sticker' | 'mosaic' | 'pin' | 'loupe'>('text');
  const [activeMemeText, setActiveMemeText] = useState('截图即是表情包，打工摸鱼必备');
  const [hoverColor, setHoverColor] = useState('#FF6B6B');
  const [showLoupe, setShowLoupe] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const [osName, setOsName] = useState('Windows');

  useEffect(() => {
    // Detect user OS
    if (typeof window !== 'undefined') {
      const ua = navigator.userAgent.toLowerCase();
      if (ua.includes('mac')) setOsName('macOS');
      else if (ua.includes('linux')) setOsName('Linux');
      else setOsName('Windows');
    }
  }, []);

  const triggerHeroConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF6B6B', '#FFA726', '#4D96FF', '#6BCB77', '#FFD166']
    });
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-cute-dots">
      {/* Soft Ambient Glow Circles */}
      <div className="absolute top-[-80px] right-[-80px] w-[500px] h-[500px] bg-[#FFE5B4] rounded-full blur-3xl opacity-60 pointer-events-none -z-10" />
      <div className="absolute bottom-[-60px] left-[-60px] w-[420px] h-[420px] bg-[#FFD1DC] rounded-full blur-3xl opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Cute pill banner */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FFF0F3] border border-[#FFD1DC] text-[#FF85A1] text-xs sm:text-sm font-bold shadow-xs hover:scale-105 transition-transform duration-200 cursor-pointer">
            <span className="text-base">✨</span>
            <span>捕捉每一份欢乐 · 为斗图而生的极简神器</span>
            <span className="px-2 py-0.5 bg-white text-[#FF85A1] rounded-full text-xs font-extrabold shadow-2xs">
              100% 开源免费
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#333333] leading-[1.12]">
            为你的表情包
            <br />
            <span className="text-[#FF85A1] font-cute">寻找一个快乐新家</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl mx-auto font-medium">
            <strong className="text-[#333333] font-bold">MemeCapture</strong> 是一款专为表情包爱好者与打工人设计的极简截图工具。
            毫秒级精准捕捉、智能黑白描边神句、萌系贴纸库、桌面悬浮置顶，让你的斗图快人一步！
          </p>

          {/* Main CTA Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <button
              onClick={onOpenDownload}
              id="btn-hero-download"
              className="flex items-center gap-2.5 px-8 py-4 bg-[#FF85A1] hover:bg-[#ff7092] text-white text-base sm:text-lg font-bold rounded-[24px] shadow-[0_10px_20px_rgba(255,133,161,0.35)] hover:shadow-[0_14px_28px_rgba(255,133,161,0.45)] hover:-translate-y-0.5 active:scale-95 transition-all group"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span>立即免费下载 ({osName})</span>
              <span className="text-xs font-normal px-2 py-0.5 bg-white/25 rounded-lg">v1.2.0</span>
            </button>

            <a
              href="#demo"
              id="btn-hero-try-sandbox"
              className="flex items-center gap-2 px-7 py-4 bg-white text-[#333333] text-base sm:text-lg font-bold rounded-[24px] border-2 border-[#EEE] hover:border-[#FF85A1] hover:text-[#FF85A1] shadow-sm hover:-translate-y-0.5 transition-all"
            >
              <Sparkles className="w-4 h-4 text-[#FFD93D]" />
              <span>在线试玩沙盒</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="https://github.com/darkmatter2048/MemeCapture"
              target="_blank"
              rel="noreferrer"
              id="btn-hero-github"
              className="flex items-center gap-2 px-5 py-4 bg-[#FFFDF5] hover:bg-[#FFF0F3] text-[#444444] hover:text-[#FF85A1] border-2 border-[#FFE5B4] hover:border-[#FF85A1] text-sm sm:text-base font-bold rounded-[24px] transition-all"
              title="前往 GitHub 仓库"
            >
              <Github className="w-4 h-4 text-[#333333]" />
              <span>GitHub 源码</span>
            </a>
          </div>

          {/* Feature Highlights Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#777777] pt-2">
            <span className="flex items-center gap-1.5 px-3 py-1 bg-white/80 rounded-full border border-[#EEE] shadow-2xs">
              <Check className="w-4 h-4 text-[#6BCB77]" /> 毫秒级极速唤醒
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-white/80 rounded-full border border-[#EEE] shadow-2xs">
              <Check className="w-4 h-4 text-[#6BCB77]" /> 微信/QQ 1MB免压缩
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-white/80 rounded-full border border-[#EEE] shadow-2xs">
              <Check className="w-4 h-4 text-[#6BCB77]" /> 100% 离线隐私安全
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-white/80 rounded-full border border-[#EEE] shadow-2xs">
              <Check className="w-4 h-4 text-[#6BCB77]" /> Windows / Mac / Linux
            </span>
          </div>
        </div>

        {/* Live Interactive Mockup Window */}
        <div className="mt-14 max-w-4xl mx-auto relative">
          {/* Playful Floating Badges */}
          <div className="absolute -top-6 -right-6 w-16 h-16 sm:w-20 sm:h-20 bg-[#FFD93D] rounded-full flex items-center justify-center text-3xl shadow-xl transform rotate-12 z-20 pointer-events-none select-none">
            ✨
          </div>
          <div className="absolute -bottom-5 -left-5 w-14 h-14 sm:w-16 sm:h-16 bg-[#6BCB77] rounded-[22px] flex items-center justify-center text-2xl shadow-xl transform -rotate-12 text-white z-20 pointer-events-none select-none">
            ❤️
          </div>

          {/* Window Container */}
          <div className="relative bg-white rounded-[36px] shadow-[0_30px_60px_rgba(0,0,0,0.08)] border-8 border-[#F5F5F5] overflow-hidden">
            {/* Window Header */}
            <div className="h-10 bg-[#F5F5F5] flex items-center justify-between px-5">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF605C]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD44]" />
                  <div className="w-3 h-3 rounded-full bg-[#00CA4E]" />
                </div>
                <span className="text-xs font-bold text-[#555555] ml-2 font-cute">
                  MemeCapture - 截图预览 [1280 × 720]
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-bold text-[#666666]">
                <span className="px-2.5 py-0.5 bg-white rounded-lg border border-[#E0E0E0] shadow-2xs">
                  快捷键: F1
                </span>
                <span className="text-[#FF85A1] bg-[#FFF0F3] px-2.5 py-0.5 rounded-lg border border-[#FFD1DC]">
                  实时编辑中
                </span>
              </div>
            </div>

            {/* Simulated Capture Canvas Stage */}
            <div className="relative w-full h-[320px] sm:h-[400px] bg-gradient-to-br from-[#FFFDF5] via-[#FFF0F3]/40 to-[#E6F7FF]/30 overflow-hidden flex items-center justify-center select-none bg-cute-grid p-4">
              
              {/* Cute Central Character Card */}
              <div className="relative group p-6 bg-white rounded-[28px] shadow-[0_15px_30px_rgba(0,0,0,0.06)] border-2 border-[#FFE5B4] max-w-sm w-full text-center transition-all duration-300 hover:shadow-xl">
                {/* Float Stickers */}
                <div className="absolute -top-4 -right-3 text-3xl animate-bounce">
                  ✨
                </div>
                <div className="absolute -top-3 -left-3 text-2xl animate-float-slow">
                  💢
                </div>
                <div className="absolute -bottom-3 -right-2 text-2xl">
                  🕶️
                </div>

                {/* Simulated Character Illustration */}
                <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-tr from-[#FFE5B4] to-[#FFD1DC] flex items-center justify-center text-5xl shadow-inner mb-3">
                  🐱
                </div>

                {/* Meme Caption with Classic Black Outline */}
                <div className="py-1">
                  <span 
                    className="font-cute text-2xl sm:text-3xl text-white font-extrabold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                    style={{
                      textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 3px 6px rgba(0,0,0,0.7)'
                    }}
                  >
                    {activeMemeText}
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-center gap-2">
                  <span className="px-3 py-0.5 text-[11px] font-bold bg-[#FFF0F3] text-[#FF85A1] rounded-full border border-[#FFD1DC]">
                    #猫猫凝视
                  </span>
                  <span className="px-3 py-0.5 text-[11px] font-bold bg-[#FFFBE6] text-[#FAAD14] rounded-full border border-[#FFE58F]">
                    #一秒生成
                  </span>
                </div>
              </div>

              {/* Simulated Loupe / Color Picker in Corner */}
              {showLoupe && (
                <div className="absolute top-4 right-4 bg-[#2D3436]/90 backdrop-blur-md p-2.5 rounded-2xl border border-stone-600 text-white shadow-xl flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl border-2 border-white/60 relative overflow-hidden flex items-center justify-center bg-[#FF85A1]">
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-white" />
                  </div>
                  <div className="text-[11px] space-y-0.5 text-left font-mono">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#FFD93D] font-bold">HEX:</span>
                      <span>#FF85A1</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-stone-300">
                      <span className="text-[#6BCB77] font-bold">RGB:</span>
                      <span>(255, 133, 161)</span>
                    </div>
                    <div className="text-[10px] text-stone-400 font-sans">
                      按 <kbd className="px-1 bg-stone-800 rounded text-white font-bold">C</kbd> 快速复制色值
                    </div>
                  </div>
                </div>
              )}

              {/* Selection Border Rect Overlay */}
              <div className="absolute inset-8 border-2 border-dashed border-[#FF85A1]/80 rounded-2xl pointer-events-none">
                <span className="absolute top-1 left-2 bg-[#FF85A1] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                  捕获区域: 840 × 420 px
                </span>
                <div className="absolute top-0 left-0 w-2.5 h-2.5 bg-white border-2 border-[#FF85A1] rounded-xs -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-white border-2 border-[#FF85A1] rounded-xs translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-2.5 h-2.5 bg-white border-2 border-[#FF85A1] rounded-xs -translate-x-1/2 translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-white border-2 border-[#FF85A1] rounded-xs translate-x-1/2 translate-y-1/2" />
              </div>

              {/* Floating Floating Toolbar (Simulating MemeCapture toolbar) */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-3 py-2 rounded-2xl border border-[#EEE] shadow-xl flex items-center gap-1 sm:gap-1.5">
                <button
                  onClick={() => {
                    setActiveTool('text');
                    setActiveMemeText(activeMemeText === '急了急了？' ? '截图即是表情包，打工摸鱼必备' : '急了急了？');
                  }}
                  className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1 transition-all ${
                    activeTool === 'text'
                      ? 'bg-[#FF85A1] text-white shadow-sm'
                      : 'text-[#444] hover:bg-[#FFF0F3] hover:text-[#FF85A1]'
                  }`}
                  title="添加描边文字"
                >
                  <Type className="w-4 h-4" />
                  <span className="hidden sm:inline">文字</span>
                </button>

                <button
                  onClick={() => {
                    setActiveTool('sticker');
                    setActiveMemeText('给我整个大墨镜 🕶️');
                  }}
                  className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1 transition-all ${
                    activeTool === 'sticker'
                      ? 'bg-[#FF85A1] text-white shadow-sm'
                      : 'text-[#444] hover:bg-[#FFF0F3] hover:text-[#FF85A1]'
                  }`}
                  title="表情贴纸"
                >
                  <Smile className="w-4 h-4" />
                  <span className="hidden sm:inline">贴纸</span>
                </button>

                <button
                  onClick={() => {
                    setActiveTool('mosaic');
                    setActiveMemeText('此人过于帅气，已自动打码 🙈');
                  }}
                  className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1 transition-all ${
                    activeTool === 'mosaic'
                      ? 'bg-[#FF85A1] text-white shadow-sm'
                      : 'text-[#444] hover:bg-[#FFF0F3] hover:text-[#FF85A1]'
                  }`}
                  title="马赛克打码"
                >
                  <Grid className="w-4 h-4" />
                  <span className="hidden sm:inline">马赛克</span>
                </button>

                <button
                  onClick={() => {
                    setActiveTool('pin');
                    setActiveMemeText('📌 贴图已悬浮置顶于桌面');
                  }}
                  className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1 transition-all ${
                    activeTool === 'pin'
                      ? 'bg-[#FF85A1] text-white shadow-sm'
                      : 'text-[#444] hover:bg-[#FFF0F3] hover:text-[#FF85A1]'
                  }`}
                  title="F3 贴图置顶"
                >
                  <Pin className="w-4 h-4" />
                  <span className="hidden sm:inline">贴图置顶</span>
                </button>

                <div className="h-5 w-px bg-stone-200 mx-1" />

                {/* One-Click Done & Confetti */}
                <button
                  onClick={triggerHeroConfetti}
                  className="px-3.5 py-2 bg-[#6BCB77] hover:bg-[#5bb867] text-white rounded-xl text-xs font-bold flex items-center gap-1 shadow-sm transition-all hover:scale-105 active:scale-95"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>已复制表情!</span>
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4" />
                      <span>完成并复制 (Enter)</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
