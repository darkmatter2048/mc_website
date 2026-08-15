import React, { useState } from 'react';
import { Keyboard, Command, Sparkles, Check } from 'lucide-react';
import { SHORTCUTS_DATA } from '../data/presets';

export const ShortcutsGuide: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'capture' | 'edit' | 'gif' | 'pin'>('all');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const filteredShortcuts = filterCategory === 'all'
    ? SHORTCUTS_DATA
    : SHORTCUTS_DATA.filter((item) => item.category === filterCategory);

  const handleCopyShortcut = (key: string) => {
    navigator.clipboard.writeText(key);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1500);
  };

  return (
    <section id="shortcuts" className="py-24 bg-[#FFFDF5] border-b border-[#F0ECE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFF0F3] text-[#FF85A1] text-xs sm:text-sm font-bold border border-[#FFD1DC]">
            <Keyboard className="w-4 h-4" />
            <span>键盘侠最爱 · 全局热键随心改</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#333333] tracking-tight">
            高频快捷键一览，<span className="text-[#FF85A1] font-cute">盲操如飞</span>
          </h2>
          <p className="text-[#666666] text-sm sm:text-base font-medium">
            默认预设最符合人体工学的按键逻辑，可在软件「偏好设置」中 100% 自由重绑定。
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: '全部快捷键' },
            { id: 'capture', label: '📸 截屏 & 取色' },
            { id: 'edit', label: '🎨 标注 & 斗图' },
            { id: 'gif', label: '🎬 GIF 录制' },
            { id: 'pin', label: '📌 贴图置顶' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterCategory(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                filterCategory === tab.id
                  ? 'bg-[#FF85A1] text-white shadow-sm'
                  : 'bg-white text-[#555555] hover:bg-[#FFF0F3] hover:text-[#FF85A1] border-2 border-[#EEE]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Shortcuts Grid List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {filteredShortcuts.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleCopyShortcut(item.key)}
              className="bg-white p-4.5 rounded-[22px] border-2 border-[#FFE5B4]/70 hover:border-[#FF85A1] shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all cursor-pointer group flex items-center justify-between"
            >
              <div className="space-y-1">
                <div className="text-sm font-bold text-[#333333] flex items-center gap-2">
                  <span>{item.action}</span>
                </div>
                <div className="text-xs text-[#666666] font-medium">
                  {item.description}
                </div>
              </div>

              <div className="flex items-center gap-1.5 pl-3">
                <kbd className="px-3 py-1.5 bg-[#FFFDF5] group-hover:bg-[#FFF0F3] group-hover:text-[#FF85A1] group-hover:border-[#FFD1DC] text-[#333333] text-xs font-mono font-bold rounded-xl border-2 border-[#FFE5B4] shadow-2xs transition-colors whitespace-nowrap">
                  {copiedKey === item.key ? '✓ 已复制' : item.key}
                </kbd>
              </div>
            </div>
          ))}
        </div>

        {/* Pro Tip */}
        <div className="mt-8 max-w-md mx-auto text-center text-xs font-bold text-[#874D00] bg-[#FFFBE6] p-3.5 rounded-2xl border border-[#FFE58F] shadow-2xs">
          💡 贴心小技巧： 截图时按下 <kbd className="px-2 py-0.5 bg-white rounded-lg border border-[#FFE58F] font-bold text-[#333]">Space</kbd> 空格键可快速吸附整个窗口或控件。
        </div>

      </div>
    </section>
  );
};
