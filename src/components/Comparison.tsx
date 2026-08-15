import React from 'react';
import { Check, X, Sparkles } from 'lucide-react';

export const Comparison: React.FC = () => {
  const comparisonData = [
    {
      feature: '斗图专用黑白描边大字',
      memeCapture: true,
      snipaste: false,
      systemSnip: false,
      wechat: false,
    },
    {
      feature: '魔性贴纸库 (熊猫头/墨镜/暴怒)',
      memeCapture: true,
      snipaste: false,
      systemSnip: false,
      wechat: '少许普通emoji',
    },
    {
      feature: '高清 GIF 录制 + 微信免压调色',
      memeCapture: true,
      snipaste: false,
      systemSnip: false,
      wechat: false,
    },
    {
      feature: '桌面贴图置顶 (F3/透明度/穿透)',
      memeCapture: true,
      snipaste: true,
      systemSnip: false,
      wechat: false,
    },
    {
      feature: '100% 本地离线 OCR (无隐私上传)',
      memeCapture: true,
      snipaste: '需收费/需联网',
      systemSnip: '有限支持',
      wechat: '云端上传',
    },
    {
      feature: '开源免费 · 绝无弹窗捆绑',
      memeCapture: true,
      snipaste: '专业版收费',
      systemSnip: true,
      wechat: '绑定聊天客户端',
    }
  ];

  return (
    <section className="py-24 bg-[#FFFDF5] border-b border-[#F0ECE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs sm:text-sm font-bold text-[#FF85A1] bg-[#FFF0F3] px-4 py-1.5 rounded-full border border-[#FFD1DC] inline-flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#FFD93D]" />
            横向实力对比
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#333333] tracking-tight">
            为什么选择 <span className="text-[#FF85A1] font-cute">MemeCapture</span>？
          </h2>
          <p className="text-[#666666] text-sm sm:text-base font-medium">
            融合了专业截图标注的极致效率，与专为中文斗图文化定制的灵魂功能。
          </p>
        </div>

        {/* Table Container */}
        <div className="max-w-4xl mx-auto overflow-x-auto rounded-[32px] border-2 border-[#FFE5B4] shadow-[0_20px_50px_rgba(0,0,0,0.05)] bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-[#F0ECE1] bg-[#FFFDF5]">
                <th className="p-4 sm:p-5 text-sm sm:text-base font-bold text-[#333333]">
                  功能特性
                </th>
                <th className="p-4 sm:p-5 text-sm sm:text-base font-extrabold text-[#FF85A1] bg-[#FFF0F3] border-x-2 border-[#FFD1DC] text-center">
                  <div className="flex items-center justify-center gap-1.5 font-cute text-base sm:text-lg">
                    <Sparkles className="w-4 h-4 text-[#FFD93D]" />
                    <span>MemeCapture</span>
                  </div>
                </th>
                <th className="p-4 sm:p-5 text-sm sm:text-base font-bold text-[#666666] text-center">
                  普通截图工具
                </th>
                <th className="p-4 sm:p-5 text-sm sm:text-base font-bold text-[#666666] text-center">
                  系统自带截图
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0ECE1] text-sm">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#FFFDF5] transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-[#333333]">
                    {row.feature}
                  </td>
                  
                  {/* MemeCapture */}
                  <td className="p-4 sm:p-5 text-center bg-[#FFF0F3]/40 border-x-2 border-[#FFD1DC]">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#6BCB77] text-white font-bold shadow-xs">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </span>
                  </td>

                  {/* Other tool */}
                  <td className="p-4 sm:p-5 text-center text-[#666666] text-xs sm:text-sm font-medium">
                    {row.snipaste === true ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#E6F7FF] text-[#1890FF]">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                    ) : row.snipaste === false ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-stone-100 text-stone-400">
                        <X className="w-3.5 h-3.5" />
                      </span>
                    ) : (
                      <span>{row.snipaste}</span>
                    )}
                  </td>

                  {/* System tool */}
                  <td className="p-4 sm:p-5 text-center text-[#666666] text-xs sm:text-sm font-medium">
                    {row.systemSnip === true ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#E6F7FF] text-[#1890FF]">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                    ) : row.systemSnip === false ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-stone-100 text-stone-400">
                        <X className="w-3.5 h-3.5" />
                      </span>
                    ) : (
                      <span>{row.systemSnip}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
