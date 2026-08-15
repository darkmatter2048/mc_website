import React, { useState, useEffect } from 'react';
import { Download, Github, Sparkles, Heart, Menu, X, Star } from 'lucide-react';
import confetti from 'canvas-confetti';

interface NavbarProps {
  onOpenDownload: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownload }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [starCount, setStarCount] = useState(1280);
  const [hasStarred, setHasStarred] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStarClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!hasStarred) {
      setStarCount((prev) => prev + 1);
      setHasStarred(true);
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.1, x: 0.8 },
        colors: ['#FFD166', '#FF6B6B', '#4D96FF', '#6BCB77'],
      });
    }
    window.open('https://github.com/darkmatter2048/MemeCapture', '_blank', 'noopener,noreferrer');
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#FFFDF5]/90 backdrop-blur-md shadow-sm border-b border-[#FFE5B4]/60'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            id="brand-logo"
            className="flex items-center gap-3 group select-none"
          >
            <div className="w-10 h-10 bg-[#FF85A1] rounded-xl flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-6 group-hover:scale-105 transition-all duration-200">
              <span className="text-white text-2xl leading-none">📸</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-2xl tracking-tight text-[#333333] font-cute">
                  MemeCapture
                </span>
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#FFF0F3] text-[#FF85A1] rounded-full border border-[#FFD1DC]">
                  v1.2
                </span>
              </div>
              <span className="text-[11px] text-[#777777] font-medium tracking-wide">
                截图即表情 · 斗图神器
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-5 py-2 rounded-full border border-[#EEE] shadow-xs">
            <a
              href="#features"
              id="nav-features"
              className="px-3.5 py-1.5 text-sm font-medium text-[#666666] hover:text-[#FF85A1] hover:bg-[#FFF0F3] rounded-full transition-colors"
            >
              核心功能
            </a>
            <a
              href="#demo"
              id="nav-demo"
              className="px-3.5 py-1.5 text-sm font-medium text-[#666666] hover:text-[#FF85A1] hover:bg-[#FFF0F3] rounded-full transition-colors flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FFD93D]" />
              在线试玩
            </a>
            <a
              href="#shortcuts"
              id="nav-shortcuts"
              className="px-3.5 py-1.5 text-sm font-medium text-[#666666] hover:text-[#FF85A1] hover:bg-[#FFF0F3] rounded-full transition-colors"
            >
              快捷键
            </a>
            <a
              href="#gallery"
              id="nav-gallery"
              className="px-3.5 py-1.5 text-sm font-medium text-[#666666] hover:text-[#FF85A1] hover:bg-[#FFF0F3] rounded-full transition-colors"
            >
              梗图墙
            </a>
            <a
              href="#faq"
              id="nav-faq"
              className="px-3.5 py-1.5 text-sm font-medium text-[#666666] hover:text-[#FF85A1] hover:bg-[#FFF0F3] rounded-full transition-colors"
            >
              常见问题
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* GitHub Star Button */}
            <button
              onClick={handleStarClick}
              id="btn-github-star"
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-[#444444] bg-white hover:bg-[#FFFDF5] border-2 border-[#FFE5B4] hover:border-[#FF85A1] hover:text-[#FF85A1] rounded-full shadow-xs transition-all group"
              title="前往 GitHub 点亮 Star 支持作者"
            >
              <Github className="w-4 h-4 text-[#333333] group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
              <span className="flex items-center gap-0.5 px-1.5 py-0.5 bg-[#FFFBE6] text-[#FAAD14] border border-[#FFE58F] rounded-full font-bold">
                <Star className={`w-3 h-3 ${hasStarred ? 'fill-[#FFD93D] text-[#FFD93D]' : 'text-[#FAAD14]'}`} />
                {starCount.toLocaleString()}
              </span>
            </button>

            {/* Download CTA */}
            <button
              onClick={onOpenDownload}
              id="btn-nav-download"
              className="flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-[#FF85A1] hover:bg-[#ff7092] rounded-full shadow-[0_4px_14px_rgba(255,133,161,0.35)] hover:shadow-[0_6px_18px_rgba(255,133,161,0.45)] transition-all hover:scale-105 active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>免费下载</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenDownload}
              className="px-3.5 py-1.5 text-xs font-bold text-white bg-[#FF85A1] rounded-full shadow-xs"
            >
              下载
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="btn-mobile-toggle"
              className="p-2 text-[#444444] hover:text-[#2D3436] bg-white rounded-xl border border-[#EEE]"
              aria-label="打开导航菜单"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-[#FFE5B4]/80 shadow-xl space-y-2">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-[#444444] hover:bg-[#FFF0F3] hover:text-[#FF85A1] rounded-xl"
            >
              核心功能
            </a>
            <a
              href="#demo"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-[#444444] hover:bg-[#FFF0F3] hover:text-[#FF85A1] rounded-xl"
            >
              在线试玩沙盒
            </a>
            <a
              href="#shortcuts"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-[#444444] hover:bg-[#FFF0F3] hover:text-[#FF85A1] rounded-xl"
            >
              快捷键指南
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-[#444444] hover:bg-[#FFF0F3] hover:text-[#FF85A1] rounded-xl"
            >
              梗图墙
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-[#444444] hover:bg-[#FFF0F3] hover:text-[#FF85A1] rounded-xl"
            >
              常见问题
            </a>
            <div className="pt-2 border-t border-[#EEE] flex gap-2">
              <a
                href="https://github.com/darkmatter2048/MemeCapture"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-semibold bg-[#FFFDF5] border border-[#FFE5B4] rounded-xl text-[#444444]"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDownload();
                }}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-bold text-white bg-[#FF85A1] rounded-xl shadow-xs"
              >
                <Download className="w-4 h-4" />
                立即下载
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
