import { useEffect, useState } from 'react';
import { X, Check, Copy } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PASSWORD = '亝已已咧一并诶北有艾哉忛 /~0c023aBuSZ~:/';

async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // fall through to legacy method
  }
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

export const DownloadModal = ({ isOpen, onClose }: DownloadModalProps) => {
  const [copied, setCopied] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsAndroid(/android/i.test(navigator.userAgent));
    }
  }, []);

  if (!isOpen) return null;

  const handleCopy = async () => {
    await copyText(PASSWORD);
    setCopied(true);
    if (isAndroid) {
      setTimeout(() => {
        window.location.href = 'quark://';
      }, 800);
    }
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-white rounded-[28px] border-2 border-[#FFE5B4] shadow-[0_25px_60px_rgba(0,0,0,0.15)] p-6 sm:p-8 space-y-5">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#888888] hover:text-[#333333] hover:bg-[#FFF0F3] transition-colors"
          aria-label="关闭"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-extrabold text-[#333333] text-center pr-6">
          下载表情大盗
        </h3>

        {/* QR code */}
        <div className="flex flex-col items-center gap-2">
          <img
            src="/qr.jpg"
            alt="下载二维码"
            className="w-48 h-48 sm:w-56 sm:h-56 object-contain"
          />
          <p className="text-sm text-[#666666] font-medium">扫描二维码下载软件</p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 text-xs text-[#999999] font-medium">
          <div className="flex-1 h-px bg-[#EEE]" />
          或者
          <div className="flex-1 h-px bg-[#EEE]" />
        </div>

        {/* Copy password */}
        <div className="space-y-3">
          <p className="text-sm text-[#666666] font-medium text-center">
            复制口令后打开夸克APP
          </p>
          <button
            onClick={handleCopy}
            className="w-full py-3.5 bg-[#FF85A1] hover:bg-[#ff7092] text-white font-bold rounded-full shadow-[0_8px_20px_rgba(255,133,161,0.4)] transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? '已复制口令' : '复制口令'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
