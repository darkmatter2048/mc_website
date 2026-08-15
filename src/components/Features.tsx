import React, { useState } from 'react';
import { 
  Zap, 
  Film, 
  Smile, 
  Pin, 
  ScanText, 
  Share2, 
  Check, 
  ArrowRight,
  Eye,
  Sliders,
  Copy,
  Sparkles
} from 'lucide-react';
import { FEATURES_DATA } from '../data/presets';

export const Features: React.FC = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  // Interactive micro-demos inside feature card
  const [loupeColor, setLoupeColor] = useState('#FF6B6B');
  const [gifProgress, setGifProgress] = useState(65);
  const [ocrSampleIndex, setOcrSampleIndex] = useState(0);
  const [copiedOcr, setCopiedOcr] = useState(false);

  const ocrSamples = [
    { text: 'MemeCapture 是世界上最可爱的开源截图神器！', lang: '中文' },
    { text: 'Capture once, meme forever. Built with ❤️ for fun.', lang: 'English' },
    { text: 'https://github.com/darkmatter2048/MemeCapture', lang: 'URL链接' },
  ];

  const currentFeature = FEATURES_DATA[activeFeatureIndex];

  return (
    <section id="features" className="py-24 bg-[#FFFDF5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFF0F3] text-[#FF85A1] text-xs sm:text-sm font-bold border border-[#FFD1DC]">
            <Zap className="w-4 h-4 text-[#FF85A1]" />
            <span>硬核功能 · 极简萌系交互</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#333333] tracking-tight">
            不只是截图，更是你的<span className="text-[#FF85A1] font-cute">斗图超级工坊</span>
          </h2>
          <p className="text-[#666666] text-base sm:text-lg font-medium">
            每一个功能都经过像素级打磨，去除一切多余冗余，让每一次截图与制图都如丝般顺滑、乐趣倍增。
          </p>
        </div>

        {/* 6 Feature Grid Cards with Interactive Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: 毫秒截屏与取色器 */}
          <div className="bg-white p-7 rounded-[28px] border-2 border-[#FFE5B4]/80 shadow-[0_10px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#FFFBE6] text-[#FAAD14] flex items-center justify-center text-xl group-hover:scale-110 transition-transform shadow-sm">
                  <Zap className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 text-xs font-bold bg-[#FFFBE6] text-[#FAAD14] rounded-full border border-[#FFE58F]">
                  0.05s 极速
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#333333]">
                闪电截屏 · 像素取色
              </h3>
              <p className="text-[#666666] text-sm leading-relaxed font-medium">
                毫秒级唤醒，自动吸附窗口与控件边缘。内置 16X 实时放大镜，随时按 <kbd className="px-1.5 py-0.5 bg-[#FFFDF5] rounded-md border border-[#FFE5B4] text-xs font-mono font-bold text-[#333]">C</kbd> 复制色值。
              </p>
            </div>

            {/* Interactive Widget */}
            <div className="mt-6 p-3.5 bg-[#FFFDF5] rounded-2xl border border-[#EEE]">
              <div className="flex items-center justify-between mb-2 text-xs font-bold text-[#555]">
                <span>实时色彩吸取体验:</span>
                <span className="font-mono text-[#333] font-bold">{loupeColor}</span>
              </div>
              <div className="flex gap-2">
                {['#FF85A1', '#FFD93D', '#6BCB77', '#3B82F6', '#9B51E0'].map((color) => (
                  <button
                    key={color}
                    onClick={() => setLoupeColor(color)}
                    className="flex-1 h-8 rounded-xl transition-transform hover:scale-105 border-2 shadow-2xs"
                    style={{
                      backgroundColor: color,
                      borderColor: loupeColor === color ? '#2D3436' : 'transparent'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: GIF 动图录制 */}
          <div className="bg-white p-7 rounded-[28px] border-2 border-[#FFD1DC]/80 shadow-[0_10px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#FFF0F3] text-[#FF85A1] flex items-center justify-center text-xl group-hover:scale-110 transition-transform shadow-sm">
                  <Film className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 text-xs font-bold bg-[#FFF0F3] text-[#FF85A1] rounded-full border border-[#FFD1DC]">
                  微信 1MB 免压
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#333333]">
                GIF 录制 · 逐帧微调
              </h3>
              <p className="text-[#666666] text-sm leading-relaxed font-medium">
                流畅 60FPS 区域录制，支持裁剪头尾冗余帧、魔性倒放与变速。独家 NeuQuant 压缩算法，自动压在 1MB 内。
              </p>
            </div>

            {/* Interactive Widget */}
            <div className="mt-6 p-3.5 bg-[#FFFDF5] rounded-2xl border border-[#EEE] space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-[#555]">
                <span>动图进度帧: {Math.round(gifProgress)}%</span>
                <span className="text-[#6BCB77] font-bold">体积: 420 KB</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={gifProgress}
                onChange={(e) => setGifProgress(Number(e.target.value))}
                className="w-full accent-[#FF85A1]"
              />
              <div className="flex justify-between text-[10px] text-[#777] font-medium">
                <span>0.0s (起点)</span>
                <span>倒放 🔁</span>
                <span>3.5s (终点)</span>
              </div>
            </div>
          </div>

          {/* Card 3: 灵魂贴纸与描边字 */}
          <div className="bg-white p-7 rounded-[28px] border-2 border-[#F0E6FA] shadow-[0_10px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#F9F0FF] text-[#9254DE] flex items-center justify-center text-xl group-hover:scale-110 transition-transform shadow-sm">
                  <Smile className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 text-xs font-bold bg-[#F9F0FF] text-[#9254DE] rounded-full border border-[#D3ADF7]">
                  自带搞笑灵魂
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#333333]">
                魔性贴纸 · 漫画描边
              </h3>
              <p className="text-[#666666] text-sm leading-relaxed font-medium">
                熊猫头、神烦狗、恶搞墨镜、青筋怒火贴纸一键拖拽；经典黑白描边文字，再复杂的背景也能清晰显眼。
              </p>
            </div>

            {/* Interactive Sticker Preview */}
            <div className="mt-6 p-3.5 bg-[#FFFDF5] rounded-2xl border border-[#EEE] flex items-center justify-around text-2xl">
              <span className="hover:scale-125 transition-transform cursor-pointer" title="青筋">💢</span>
              <span className="hover:scale-125 transition-transform cursor-pointer" title="墨镜">🕶️</span>
              <span className="hover:scale-125 transition-transform cursor-pointer" title="闪烁">✨</span>
              <span className="hover:scale-125 transition-transform cursor-pointer" title="大哭">😭</span>
              <span className="hover:scale-125 transition-transform cursor-pointer" title="小丑">🤡</span>
              <span className="hover:scale-125 transition-transform cursor-pointer" title="爱心">💖</span>
            </div>
          </div>

          {/* Card 4: 桌面贴图置顶 (F3) */}
          <div className="bg-white p-7 rounded-[28px] border-2 border-[#BAE7FF]/70 shadow-[0_10px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#E6F7FF] text-[#1890FF] flex items-center justify-center text-xl group-hover:scale-110 transition-transform shadow-sm">
                  <Pin className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 text-xs font-bold bg-[#E6F7FF] text-[#1890FF] rounded-full border border-[#91D5FF]">
                  生产力利器
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#333333]">
                贴图置顶 · 悬浮灵感板
              </h3>
              <p className="text-[#666666] text-sm leading-relaxed font-medium">
                按下 <kbd className="px-1.5 py-0.5 bg-[#FFFDF5] rounded-md border border-[#BAE7FF] text-xs font-mono font-bold text-[#333]">F3</kbd> 将截图固定在屏幕顶层。支持透明度调节、滚轮无损缩放、旋转与鼠标点击穿透。
              </p>
            </div>

            {/* Simulated Desktop Pin Card */}
            <div className="mt-6 p-3.5 bg-[#E6F7FF] rounded-2xl border border-[#BAE7FF] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-[#003A8C]">
                <Pin className="w-4 h-4 text-[#1890FF] fill-[#1890FF]" />
                <span>悬浮窗口 [100% 保持在最前]</span>
              </div>
              <span className="text-[11px] px-2 py-0.5 bg-white text-[#1890FF] rounded-md font-mono border border-[#91D5FF] font-bold">
                Opacity: 85%
              </span>
            </div>
          </div>

          {/* Card 5: 智能离线 OCR */}
          <div className="bg-white p-7 rounded-[28px] border-2 border-[#D9F7BE]/80 shadow-[0_10px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#F6FFED] text-[#52C41A] flex items-center justify-center text-xl group-hover:scale-110 transition-transform shadow-sm">
                  <ScanText className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 text-xs font-bold bg-[#F6FFED] text-[#52C41A] rounded-full border border-[#B7EB8F]">
                  100% 离线隐私
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#333333]">
                离线 OCR · 秒提文字
              </h3>
              <p className="text-[#666666] text-sm leading-relaxed font-medium">
                内置轻量级离线文字识别引擎，截屏即可快速提取文字与解析二维码。断网也能用，绝不上传云端泄露任何隐私。
              </p>
            </div>

            {/* OCR Interactive Box */}
            <div className="mt-6 p-3.5 bg-[#FFFDF5] rounded-2xl border border-[#EEE] space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#666] font-medium">识别结果 ({ocrSamples[ocrSampleIndex].lang}):</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(ocrSamples[ocrSampleIndex].text);
                    setCopiedOcr(true);
                    setTimeout(() => setCopiedOcr(false), 2000);
                  }}
                  className="text-[#52C41A] hover:text-[#389e0d] font-bold flex items-center gap-1 text-[11px]"
                >
                  <Copy className="w-3 h-3" />
                  {copiedOcr ? '已复制!' : '复制文字'}
                </button>
              </div>
              <div 
                onClick={() => setOcrSampleIndex((prev) => (prev + 1) % ocrSamples.length)}
                className="text-xs font-mono text-[#333] bg-white p-2.5 rounded-xl border border-[#EEE] truncate cursor-pointer hover:border-[#52C41A] transition-colors"
                title="点击切换文本样例"
              >
                "{ocrSamples[ocrSampleIndex].text}"
              </div>
            </div>
          </div>

          {/* Card 6: 社交软件一键直发 */}
          <div className="bg-white p-7 rounded-[28px] border-2 border-[#FFD8BF]/80 shadow-[0_10px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#FFF2E8] text-[#FF7A45] flex items-center justify-center text-xl group-hover:scale-110 transition-transform shadow-sm">
                  <Share2 className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 text-xs font-bold bg-[#FFF2E8] text-[#FF7A45] rounded-full border border-[#FFBB96]">
                  快人一步
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#333333]">
                一键直发 · 聊天群封神
              </h3>
              <p className="text-[#666666] text-sm leading-relaxed font-medium">
                按下 <kbd className="px-1.5 py-0.5 bg-[#FFFDF5] rounded-md border border-[#FFD8BF] text-xs font-mono font-bold text-[#333]">Enter</kbd> 直接将表情写入系统剪贴板。瞬间粘贴至微信、QQ、Discord、Telegram、飞书与钉钉。
              </p>
            </div>

            {/* Supported Channels */}
            <div className="mt-6 p-3.5 bg-[#FFFDF5] rounded-2xl border border-[#EEE] flex items-center justify-between text-xs font-bold text-[#555]">
              <span className="px-2.5 py-1 bg-white rounded-lg border border-[#EEE] shadow-2xs">💬 微信</span>
              <span className="px-2.5 py-1 bg-white rounded-lg border border-[#EEE] shadow-2xs">🐧 QQ</span>
              <span className="px-2.5 py-1 bg-white rounded-lg border border-[#EEE] shadow-2xs">👾 Discord</span>
              <span className="px-2.5 py-1 bg-white rounded-lg border border-[#EEE] shadow-2xs">✈️ Telegram</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
