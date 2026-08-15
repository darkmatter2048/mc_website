import { Tv, BookOpen, Music2, MessageCircle } from 'lucide-react';

const SOCIALS = [
  { name: 'B站', icon: Tv, color: '#FB7299', href: 'https://space.bilibili.com/1847808902' },
  { name: '小红书', icon: BookOpen, color: '#FF2442', href: 'https://xhslink.cn/m/3tf3EuwPIah' },
  { name: '抖音', icon: Music2, color: '#161823', href: 'https://v.douyin.com/C0Z6jZe49mg/ ' },
  { name: '公众号:软软件件', icon: MessageCircle, color: '#07C160', href: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzY4MjM3NTE5Ng==&scene=124#wechat_redirect' },
];

export const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-[#F0ECE1]">
      <div className="flex items-center justify-center gap-3 flex-wrap px-4">
        {SOCIALS.map(({ name, icon: Icon, color, href }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noreferrer"
            title={name}
            className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-[#EEE] text-sm font-bold shadow-xs hover:-translate-y-0.5 hover:shadow-sm transition-all"
            style={{ color }}
          >
            <Icon className="w-4 h-4" style={{ color }} />
            <span>{name}</span>
          </a>
        ))}
      </div>
    </footer>
  );
};
