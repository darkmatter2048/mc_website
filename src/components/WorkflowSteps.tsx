import React from 'react';
import { Camera, Wand2, Send, ArrowRight } from 'lucide-react';

export const WorkflowSteps: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: '按下快捷键 · 瞬间捕捉画面',
      desc: '按下 F1 或 Alt+A 框选任意区域，或按下 F2 录制高帧率 GIF 动图，智能边缘吸附快准狠。',
      icon: Camera,
      tag: '快捷唤醒',
      iconBg: 'bg-[#FFD93D] text-[#333333]',
      numColor: 'text-[#FAAD14]',
      cardBg: 'bg-white',
      border: 'border-2 border-[#FFE5B4]',
      tagBg: 'bg-[#FFFBE6] text-[#FAAD14] border-[#FFE58F]'
    },
    {
      num: '02',
      title: '加粗描边字 · 贴上魔性灵魂',
      desc: '输入经典表情包大字，贴上墨镜、青筋怒火或熊猫头，随手打码敏感信息或高亮核心重点。',
      icon: Wand2,
      tag: '魔性编辑',
      iconBg: 'bg-[#FF85A1] text-white',
      numColor: 'text-[#FF85A1]',
      cardBg: 'bg-white',
      border: 'border-2 border-[#FFD1DC]',
      tagBg: 'bg-[#FFF0F3] text-[#FF85A1] border-[#FFD1DC]'
    },
    {
      num: '03',
      title: '回车一键复制 · 聊天群里封神',
      desc: '按下 Enter 直接将高清表情包存入剪贴板，秒粘贴至微信/QQ等任何聊天框，斗图快准狠！',
      icon: Send,
      tag: '光速直发',
      iconBg: 'bg-[#6BCB77] text-white',
      numColor: 'text-[#6BCB77]',
      cardBg: 'bg-white',
      border: 'border-2 border-[#D9F7BE]',
      tagBg: 'bg-[#F6FFED] text-[#52C41A] border-[#B7EB8F]'
    }
  ];

  return (
    <section className="py-24 bg-[#FFFDF5] border-b border-[#F0ECE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF85A1] bg-[#FFF0F3] px-4 py-1.5 rounded-full border border-[#FFD1DC]">
            三步成图 · 零学习成本
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#333333]">
            只需 3 秒，一张<span className="text-[#FF85A1] font-cute">爆款表情包</span>就此诞生
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className={`relative ${step.cardBg} p-8 rounded-[32px] ${step.border} shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1`}
              >
                {/* Step badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${step.iconBg} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className={`text-4xl font-black ${step.numColor} font-cute`}>
                    {step.num}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className={`inline-block px-3 py-1 text-xs font-bold rounded-lg border ${step.tagBg}`}>
                    {step.tag}
                  </div>
                  <h3 className="text-xl font-bold text-[#333333]">
                    {step.title}
                  </h3>
                  <p className="text-[#666666] text-sm leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
