import { useState } from 'react';
import { Download, Github } from 'lucide-react';
import { DownloadModal } from './components/DownloadModal';
import { Footer } from './components/Footer';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF5] text-[#2D3436] antialiased relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-[-120px] right-[-100px] w-[450px] h-[450px] bg-[#FFE5B4] rounded-full blur-3xl opacity-60 pointer-events-none -z-10" />
      <div className="absolute bottom-[-120px] left-[-100px] w-[450px] h-[450px] bg-[#FFD1DC] rounded-full blur-3xl opacity-50 pointer-events-none -z-10" />

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center gap-8 px-4">
        {/* Icon / Logo */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-40 h-40 rounded-[22%] overflow-hidden shadow-lg">
            <img
              src="/icon.png"
              alt="表情大盗"
              className="w-full h-full object-cover scale-[1.25]"
            />
          </div>
          <span className="font-extrabold text-2xl tracking-tight text-[#333333] font-cute">
            表情大盗
          </span>
          <span className="text-sm text-[#777777] font-medium text-center">
            适用于Android系统的微信，QQ表情包提取器
          </span>
        </div>

        {/* Actions: Download + GitHub */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          {/* Download button with hover QR bubble */}
          <div className="relative group">
            <button
              onClick={() => setDownloadModalOpen(true)}
              id="btn-download"
              className="flex items-center gap-2 px-8 py-3.5 bg-[#FF85A1] hover:bg-[#ff7092] text-white font-bold rounded-full shadow-[0_10px_20px_rgba(255,133,161,0.35)] hover:scale-105 active:scale-95 transition-all"
            >
              <Download className="w-5 h-5" />
              <span>下载APP</span>
            </button>

            {/* Hover bubble: QR + text */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-20 w-56 opacity-0 translate-y-2 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
              <div className="relative w-full bg-white rounded-2xl border border-[#FFE5B4] shadow-xl px-4 py-3 flex flex-col items-center gap-1.5">
                <img
                  src="/qr.jpg"
                  alt="下载二维码"
                  className="w-44 h-44 object-contain"
                />
                <span className="text-sm font-bold text-[#333333]">下载APK</span>
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-[7px] w-3.5 h-3.5 bg-white border-b border-r border-[#FFE5B4] rotate-45" />
              </div>
            </div>
          </div>

          <a
            href="https://github.com/darkmatter2048/MemeCapture"
            target="_blank"
            rel="noreferrer"
            id="btn-github"
            className="flex items-center gap-2 px-8 py-3.5 bg-white hover:bg-[#FFF0F3] text-[#444444] hover:text-[#FF85A1] border-2 border-[#FFE5B4] hover:border-[#FF85A1] font-bold rounded-full transition-all hover:scale-105"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
        </div>
      </main>

      {/* Footer: social pills */}
      <Footer />

      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </div>
  );
}
