import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS_DATA } from '../data/presets';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#FFFDF5] border-b border-[#F0ECE1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFF0F3] text-[#FF85A1] text-xs sm:text-sm font-bold border border-[#FFD1DC]">
            <HelpCircle className="w-4 h-4 text-[#FF85A1]" />
            <span>答疑解惑</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#333333] tracking-tight">
            常见问题 <span className="font-cute text-[#FF85A1]">FAQ</span>
          </h2>
          <p className="text-[#666666] text-sm sm:text-base font-medium">
            关于 MemeCapture 的开源性质、隐私安全与使用技巧。
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-[24px] border-2 border-[#FFE5B4]/80 bg-white overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.02)] transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-[#333333] hover:text-[#FF85A1] transition-colors"
                >
                  <span className="text-sm sm:text-base flex items-center gap-3">
                    <span className="w-7 h-7 rounded-xl bg-[#FFF0F3] text-[#FF85A1] border border-[#FFD1DC] text-xs flex items-center justify-center font-bold shrink-0">
                      Q{idx + 1}
                    </span>
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#FF85A1] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#999999] shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#666666] leading-relaxed border-t border-[#F0ECE1] font-medium">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
