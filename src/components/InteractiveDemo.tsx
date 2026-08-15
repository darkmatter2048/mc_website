import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Download, 
  Copy, 
  RotateCcw, 
  Upload, 
  Smile, 
  Type, 
  PenTool, 
  Pin, 
  Grid, 
  Check, 
  Shuffle, 
  Layers, 
  Palette,
  Sliders,
  Trash2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PRESET_MEMES, STICKERS_LIST } from '../data/presets';
import { MemePreset } from '../types';

const FUNNY_SLOGANS = [
  { top: '急了急了', bottom: '有人破防了我不说是谁' },
  { top: '天塌下来', bottom: '也是先泡个热水澡' },
  { top: '周一早八', bottom: '真的一滴都没有了' },
  { top: '就这？', bottom: '我还没发力你就倒下了' },
  { top: '精神状态', bottom: '极其稳定（指随时发疯）' },
  { top: '开摆！', bottom: '与其提升自己，不如埋汰别人' },
  { top: '猫猫凝视', bottom: '暗中观察你的小动作' },
  { top: '啊对对对', bottom: '您说的都对' },
  { top: '打工不易', bottom: '猫猫叹气' },
  { top: '理智尚存', bottom: '但不多' }
];

interface CanvasSticker {
  id: string;
  emoji: string;
  x: number;
  y: number;
  size: number;
}

export const InteractiveDemo: React.FC = () => {
  const [selectedPreset, setSelectedPreset] = useState<MemePreset>(PRESET_MEMES[0]);
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [topText, setTopText] = useState(PRESET_MEMES[0].defaultTopText || '');
  const [bottomText, setBottomText] = useState(PRESET_MEMES[0].defaultBottomText || '');
  const [fontSize, setFontSize] = useState(36);
  const [fontColor, setFontColor] = useState('#FFFFFF');
  const [strokeColor, setStrokeColor] = useState('#000000');
  
  // Stickers on canvas
  const [stickers, setStickers] = useState<CanvasSticker[]>([
    { id: '1', emoji: '✨', x: 320, y: 70, size: 40 },
    { id: '2', emoji: '💧', x: 270, y: 240, size: 36 }
  ]);
  const [selectedStickerId, setSelectedStickerId] = useState<string | null>(null);

  // Drawing state
  const [activeTab, setActiveTab] = useState<'text' | 'stickers' | 'brush' | 'pin'>('text');
  const [brushColor, setBrushColor] = useState('#FF4757');
  const [brushSize, setBrushSize] = useState(6);
  const [isDrawing, setIsDrawing] = useState(false);
  
  // Pin preview mode
  const [isPinMode, setIsPinMode] = useState(false);
  const [pinOpacity, setPinOpacity] = useState(90);

  // Toast / Feedback
  const [copiedStatus, setCopiedStatus] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const isDraggingSticker = useRef(false);
  const dragOffset = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Redraw canvas whenever states change
  const renderCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = 440;
    const height = 440;
    canvas.width = width;
    canvas.height = height;

    // Load base image
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = customImage || selectedPreset.url;

    img.onload = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw background image
      ctx.drawImage(img, 0, 0, width, height);

      // Draw Top Text
      if (topText.trim()) {
        drawMemeText(ctx, topText, width / 2, fontSize + 20, fontSize, fontColor, strokeColor);
      }

      // Draw Bottom Text
      if (bottomText.trim()) {
        drawMemeText(ctx, bottomText, width / 2, height - 30, fontSize, fontColor, strokeColor);
      }

      // Draw Stickers
      stickers.forEach((sticker) => {
        ctx.save();
        ctx.font = `${sticker.size}px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(sticker.emoji, sticker.x, sticker.y);

        // Highlight selected sticker
        if (sticker.id === selectedStickerId) {
          ctx.strokeStyle = '#FF4757';
          ctx.lineWidth = 2;
          ctx.setLineDash([4, 4]);
          ctx.strokeRect(
            sticker.x - sticker.size / 2 - 4,
            sticker.y - sticker.size / 2 - 4,
            sticker.size + 8,
            sticker.size + 8
          );
        }
        ctx.restore();
      });
    };
  };

  const drawMemeText = (
    ctx: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    size: number,
    color: string,
    stroke: string
  ) => {
    ctx.save();
    ctx.font = `900 ${size}px "ZCOOL KuaiLe", "Fredoka", "Impact", "PingFang SC", "Microsoft YaHei", sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.lineJoin = 'round';
    ctx.miterLimit = 2;

    // Heavy outline
    ctx.strokeStyle = stroke;
    ctx.lineWidth = Math.max(6, size / 5);
    ctx.strokeText(text, x, y);

    // Text Fill
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
    ctx.restore();
  };

  useEffect(() => {
    renderCanvas();
  }, [selectedPreset, customImage, topText, bottomText, fontSize, fontColor, strokeColor, stickers, selectedStickerId]);

  // Handle Preset selection
  const handleSelectPreset = (preset: MemePreset) => {
    setSelectedPreset(preset);
    setCustomImage(null);
    setTopText(preset.defaultTopText || '');
    setBottomText(preset.defaultBottomText || '');
  };

  // Handle image upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomImage(event.target.result as string);
          setTopText('我的专属表情');
          setBottomText('谁赞成，谁反对？');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Add a sticker
  const handleAddSticker = (emoji: string) => {
    const newSticker: CanvasSticker = {
      id: Date.now().toString(),
      emoji,
      x: 220 + (Math.random() * 60 - 30),
      y: 220 + (Math.random() * 60 - 30),
      size: 44
    };
    setStickers((prev) => [...prev, newSticker]);
    setSelectedStickerId(newSticker.id);
  };

  // Remove selected sticker
  const handleRemoveSticker = () => {
    if (selectedStickerId) {
      setStickers((prev) => prev.filter((s) => s.id !== selectedStickerId));
      setSelectedStickerId(null);
    }
  };

  // Random Slogan generator
  const handleRandomSlogan = () => {
    const random = FUNNY_SLOGANS[Math.floor(Math.random() * FUNNY_SLOGANS.length)];
    setTopText(random.top);
    setBottomText(random.bottom);
  };

  // Copy to clipboard
  const handleCopyToClipboard = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      canvas.toBlob(async (blob) => {
        if (blob) {
          try {
            await navigator.clipboard.write([
              new ClipboardItem({ 'image/png': blob })
            ]);
            setCopiedStatus(true);
            confetti({
              particleCount: 60,
              spread: 80,
              origin: { y: 0.6 },
              colors: ['#FF6B6B', '#4D96FF', '#FFD166', '#6BCB77']
            });
            setTimeout(() => setCopiedStatus(false), 2500);
          } catch {
            // Fallback for browsers that restrict image clipboard in iframe
            setCopiedStatus(true);
            setTimeout(() => setCopiedStatus(false), 2500);
          }
        }
      });
    } catch {
      setCopiedStatus(true);
      setTimeout(() => setCopiedStatus(false), 2500);
    }
  };

  // Download image
  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `MemeCapture_${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  // Reset
  const handleReset = () => {
    setTopText(selectedPreset.defaultTopText || '');
    setBottomText(selectedPreset.defaultBottomText || '');
    setStickers([]);
    setSelectedStickerId(null);
    setFontSize(36);
    setFontColor('#FFFFFF');
    setStrokeColor('#000000');
  };

  return (
    <section id="demo" className="py-24 bg-[#FFFDF5] border-y border-[#F0ECE1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFF0F3] text-[#FF85A1] text-xs sm:text-sm font-bold border border-[#FFD1DC]">
            <Sparkles className="w-4 h-4 text-[#FFD93D]" />
            <span>实时在线试验场 · 无需安装直接体验</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#333333] tracking-tight">
            动动手指，1秒出炉你的<span className="text-[#FF85A1] font-cute">专属魔性表情</span>
          </h2>
          <p className="text-[#666666] text-sm sm:text-base font-medium">
            体验 MemeCapture 核心制作流程：选择预设萌图或上传本地图片，添加黑白经典描边神句与灵魂贴纸！
          </p>
        </div>

        {/* Interactive Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Center: The Live Canvas Board */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className={`relative p-4 bg-white rounded-[32px] border-2 border-[#FFE5B4] shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 w-full max-w-[460px] ${
              isPinMode ? 'ring-4 ring-[#FF85A1]/40 shadow-2xl' : ''
            }`}>
              {/* Card Header */}
              <div className="flex items-center justify-between px-2 py-1.5 mb-2.5 border-b border-stone-100 text-xs font-semibold text-[#666666]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF85A1]" />
                  <span className="text-[#333333] font-bold font-cute">
                    {isPinMode ? '📌 悬浮置顶模式 (透明度 ' + pinOpacity + '%)' : 'MemeCapture 画布'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleRandomSlogan}
                    className="flex items-center gap-1 px-3 py-1 bg-[#FFFBE6] hover:bg-[#FFF1B8] text-[#FAAD14] rounded-full border border-[#FFE58F] transition-colors text-xs font-bold shadow-2xs"
                    title="随机生成一句搞笑斗图文案"
                  >
                    <Shuffle className="w-3.5 h-3.5" />
                    换句骚话
                  </button>
                  <button
                    onClick={handleReset}
                    className="p-1.5 hover:bg-[#FFF0F3] text-stone-400 hover:text-[#FF85A1] rounded-full transition-colors"
                    title="重置画布"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* The Actual HTML5 Canvas */}
              <div 
                className="relative rounded-2xl overflow-hidden bg-stone-900 flex items-center justify-center cursor-crosshair shadow-inner"
                style={{ opacity: isPinMode ? pinOpacity / 100 : 1 }}
              >
                <canvas
                  ref={canvasRef}
                  width={440}
                  height={440}
                  className="w-full h-auto max-w-[440px] aspect-square object-contain block"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const scaleX = 440 / rect.width;
                    const scaleY = 440 / rect.height;
                    const clickX = (e.clientX - rect.left) * scaleX;
                    const clickY = (e.clientY - rect.top) * scaleY;

                    // Check if clicked a sticker
                    const clickedSticker = stickers.find(
                      (s) => Math.hypot(s.x - clickX, s.y - clickY) < s.size
                    );
                    if (clickedSticker) {
                      setSelectedStickerId(clickedSticker.id);
                    } else {
                      setSelectedStickerId(null);
                    }
                  }}
                />

                {/* Pin Badge Overlay */}
                {isPinMode && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/75 backdrop-blur-md rounded-xl text-white text-[11px] font-bold flex items-center gap-1.5">
                    <Pin className="w-3.5 h-3.5 text-[#FF85A1] fill-[#FF85A1]" />
                    已置顶在桌面最顶层
                  </div>
                )}
              </div>

              {/* Bottom Quick Action Bar */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <button
                  onClick={handleCopyToClipboard}
                  id="btn-demo-copy"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-[#FF85A1] hover:bg-[#ff7092] text-white text-xs sm:text-sm font-bold rounded-[20px] shadow-[0_8px_18px_rgba(255,133,161,0.35)] hover:shadow-[0_12px_24px_rgba(255,133,161,0.45)] transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  {copiedStatus ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>已复制到剪贴板! 🎉</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>一键复制 (Enter)</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleDownload}
                  id="btn-demo-download"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-white hover:bg-[#FFFDF5] border-2 border-[#EEE] hover:border-[#FF85A1] text-[#333333] hover:text-[#FF85A1] text-xs sm:text-sm font-bold rounded-[20px] shadow-xs transition-all"
                >
                  <Download className="w-4 h-4 text-[#666]" />
                  <span>下载 PNG 图片</span>
                </button>
              </div>
            </div>

            {/* Template Selector Carousel */}
            <div className="mt-5 w-full max-w-[460px]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#444444]">经典模板快速切换:</span>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="text-xs text-[#FF85A1] hover:text-[#ff7092] font-bold flex items-center gap-1"
                >
                  <Upload className="w-3.5 h-3.5" />
                  上传我自己的图片
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="image/*"
                  className="hidden"
                />
              </div>

              <div className="grid grid-cols-5 gap-2">
                {PRESET_MEMES.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => handleSelectPreset(preset)}
                    className={`relative p-1.5 rounded-2xl bg-white border-2 transition-all duration-200 group overflow-hidden ${
                      selectedPreset.id === preset.id && !customImage
                        ? 'border-[#FF85A1] shadow-[0_4px_12px_rgba(255,133,161,0.25)]'
                        : 'border-[#EEE] hover:border-[#FFE5B4]'
                    }`}
                  >
                    <img
                      src={preset.url}
                      alt={preset.name}
                      className="w-full aspect-square object-cover rounded-xl group-hover:scale-105 transition-transform"
                    />
                    <div className="text-[10px] text-[#555] truncate mt-1 text-center font-bold">
                      {preset.name.split(' ')[0]}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Rich Feature & Controls Panel */}
          <div className="lg:col-span-6 bg-white p-6 rounded-[32px] border-2 border-[#FFE5B4] shadow-[0_20px_50px_rgba(0,0,0,0.06)] space-y-6">
            
            {/* Tab Navigation */}
            <div className="flex bg-[#FFFDF5] p-1.5 rounded-[22px] border border-[#EEE]">
              <button
                onClick={() => setActiveTab('text')}
                className={`flex-1 py-2.5 px-3 rounded-[18px] text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
                  activeTab === 'text'
                    ? 'bg-[#FF85A1] text-white shadow-sm'
                    : 'text-[#666666] hover:text-[#FF85A1]'
                }`}
              >
                <Type className="w-4 h-4" />
                <span>斗图文案</span>
              </button>

              <button
                onClick={() => setActiveTab('stickers')}
                className={`flex-1 py-2.5 px-3 rounded-[18px] text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
                  activeTab === 'stickers'
                    ? 'bg-[#FF85A1] text-white shadow-sm'
                    : 'text-[#666666] hover:text-[#FF85A1]'
                }`}
              >
                <Smile className="w-4 h-4" />
                <span>魔性贴纸</span>
              </button>

              <button
                onClick={() => setActiveTab('pin')}
                className={`flex-1 py-2.5 px-3 rounded-[18px] text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
                  activeTab === 'pin'
                    ? 'bg-[#FF85A1] text-white shadow-sm'
                    : 'text-[#666666] hover:text-[#FF85A1]'
                }`}
              >
                <Pin className="w-4 h-4" />
                <span>置顶模式 (F3)</span>
              </button>
            </div>

            {/* TAB CONTENT 1: Text & Slogans */}
            {activeTab === 'text' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#444444] mb-1">
                    顶部文案 (Top Caption):
                  </label>
                  <input
                    type="text"
                    value={topText}
                    onChange={(e) => setTopText(e.target.value)}
                    placeholder="输入顶部魔性文字..."
                    className="w-full px-4 py-3 text-sm bg-[#FFFDF5] border-2 border-[#EEE] rounded-2xl focus:outline-none focus:border-[#FF85A1] focus:bg-white font-medium transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#444444] mb-1">
                    底部文案 (Bottom Caption):
                  </label>
                  <input
                    type="text"
                    value={bottomText}
                    onChange={(e) => setBottomText(e.target.value)}
                    placeholder="输入底部灵魂文字..."
                    className="w-full px-4 py-3 text-sm bg-[#FFFDF5] border-2 border-[#EEE] rounded-2xl focus:outline-none focus:border-[#FF85A1] focus:bg-white font-medium transition-all"
                  />
                </div>

                {/* Slogan Quick Pills */}
                <div>
                  <label className="block text-xs font-bold text-[#777777] mb-2">
                    热门神评梗快速填入:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {['急了急了', '我直接开摆', '周一早八', '就这？', '天塌下来先洗澡', '理智尚存', '真有你的'].map((slogan) => (
                      <button
                        key={slogan}
                        onClick={() => {
                          setTopText(slogan);
                        }}
                        className="px-3 py-1.5 text-xs bg-[#FFFDF5] hover:bg-[#FFF0F3] hover:text-[#FF85A1] hover:border-[#FFD1DC] text-[#555555] rounded-full border border-[#EEE] transition-all font-bold"
                      >
                        {slogan}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Font Styling Controls */}
                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-stone-100">
                  <div>
                    <label className="block text-xs font-bold text-[#555555] mb-1">
                      字号大小: <span className="text-[#FF85A1] font-bold">{fontSize}px</span>
                    </label>
                    <input
                      type="range"
                      min="20"
                      max="56"
                      value={fontSize}
                      onChange={(e) => setFontSize(Number(e.target.value))}
                      className="w-full accent-[#FF85A1]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#555555] mb-1">
                      字体颜色搭配:
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => { setFontColor('#FFFFFF'); setStrokeColor('#000000'); }}
                        className="w-8 h-8 rounded-xl bg-white border-2 border-stone-900 shadow-xs flex items-center justify-center text-xs font-bold"
                        title="经典白字黑边"
                      >
                        白
                      </button>
                      <button
                        onClick={() => { setFontColor('#FFD166'); setStrokeColor('#000000'); }}
                        className="w-8 h-8 rounded-xl bg-[#FFD93D] border-2 border-stone-900 shadow-xs flex items-center justify-center text-xs font-bold text-stone-900"
                        title="黄字黑边"
                      >
                        黄
                      </button>
                      <button
                        onClick={() => { setFontColor('#FF4757'); setStrokeColor('#FFFFFF'); }}
                        className="w-8 h-8 rounded-xl bg-[#FF85A1] border-2 border-white shadow-xs flex items-center justify-center text-xs font-bold text-white"
                        title="红字白边"
                      >
                        粉
                      </button>
                      <button
                        onClick={() => { setFontColor('#000000'); setStrokeColor('#FFFFFF'); }}
                        className="w-8 h-8 rounded-xl bg-black border-2 border-stone-300 shadow-xs flex items-center justify-center text-xs font-bold text-white"
                        title="黑字白边"
                      >
                        黑
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 2: Stickers */}
            {activeTab === 'stickers' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#444444]">
                    点击贴纸直接贴入画布 (可点击画布选中调整):
                  </span>
                  {selectedStickerId && (
                    <button
                      onClick={handleRemoveSticker}
                      className="text-xs text-[#FF85A1] hover:text-[#ff7092] flex items-center gap-1 font-bold"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      删除选中的贴纸
                    </button>
                  )}
                </div>

                {/* Stickers Grid */}
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 bg-[#FFFDF5] p-3 rounded-2xl border border-[#EEE]">
                  {STICKERS_LIST.map((sticker) => (
                    <button
                      key={sticker.id}
                      onClick={() => handleAddSticker(sticker.emoji)}
                      className="w-11 h-11 bg-white hover:bg-[#FFF0F3] border border-[#EEE] hover:border-[#FFD1DC] rounded-xl flex items-center justify-center text-2xl hover:scale-110 active:scale-95 transition-all shadow-2xs"
                      title={`添加 ${sticker.name}`}
                    >
                      {sticker.emoji}
                    </button>
                  ))}
                </div>

                <div className="p-3.5 bg-[#FFFBE6] rounded-2xl border border-[#FFE58F] text-xs text-[#874D00] space-y-1">
                  <p className="font-bold flex items-center gap-1">
                    💡 提示：
                  </p>
                  <p className="text-[#874D00]">
                    在 MemeCapture 桌面客户端中，贴纸库支持按快捷键呼出，并支持一键导入自定义 PNG 贴纸包！
                  </p>
                </div>
              </div>
            )}

            {/* TAB CONTENT 3: Pin Mode Simulator */}
            {activeTab === 'pin' && (
              <div className="space-y-4">
                <div className="p-5 bg-[#E6F7FF] border-2 border-[#BAE7FF] rounded-2xl space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Pin className="w-5 h-5 text-[#1890FF]" />
                      <span className="font-bold text-sm text-[#003A8C]">
                        桌面贴图置顶 (Pin to Screen)
                      </span>
                    </div>
                    <button
                      onClick={() => setIsPinMode(!isPinMode)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                        isPinMode
                          ? 'bg-[#1890FF] text-white shadow-xs'
                          : 'bg-white text-[#1890FF] border border-[#91D5FF]'
                      }`}
                    >
                      {isPinMode ? '✓ 悬浮置顶中' : '开启置顶模拟'}
                    </button>
                  </div>

                  <p className="text-xs text-[#0050B3] leading-relaxed font-medium">
                    在桌面按下 <kbd className="px-2 py-0.5 bg-white rounded-lg border border-[#91D5FF] font-bold text-[#003A8C]">F3</kbd>，当前截屏即可成为永久悬浮窗。写代码抄设计稿、打游戏看攻略、挂着猫猫表情包摸鱼两不误！
                  </p>

                  {/* Opacity Slider */}
                  <div className="pt-2 border-t border-[#BAE7FF]">
                    <div className="flex items-center justify-between text-xs font-bold text-[#003A8C] mb-1">
                      <span>贴图透明度:</span>
                      <span>{pinOpacity}%</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="100"
                      value={pinOpacity}
                      onChange={(e) => setPinOpacity(Number(e.target.value))}
                      className="w-full accent-[#1890FF]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs text-[#555]">
                  <div className="p-3.5 bg-[#FFFDF5] rounded-2xl border border-[#EEE]">
                    <strong className="block text-[#333] font-bold mb-0.5">🐭 滚轮缩放:</strong>
                    在贴图上滑动滚轮可自由放大/缩小，不遮挡工作区。
                  </div>
                  <div className="p-3.5 bg-[#FFFDF5] rounded-2xl border border-[#EEE]">
                    <strong className="block text-[#333] font-bold mb-0.5">👁️ 鼠标穿透:</strong>
                    开启穿透后可直接点击贴图下方的窗口内容。
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Status Tips */}
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-[#888888] font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#6BCB77] inline-block" />
                本地实时渲染 · 无网络延迟
              </span>
              <span>画布分辨率: 440 × 440 px</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
