import { MemePreset, StickerItem, FeatureItem, ShortcutItem, TestimonialItem, DownloadOption } from '../types';

// Built-in high-quality cute SVGs as Data URIs for offline reliable rendering
export const PRESET_MEMES: MemePreset[] = [
  {
    id: 'cat-cry',
    name: '委屈咪咪 (Sad Cat)',
    category: 'cat',
    defaultTopText: '周一早八',
    defaultBottomText: '真的一滴都没有了',
    description: '泪眼汪汪的委屈猫猫，打工人早起神器',
    url: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
        <defs>
          <radialGradient id="catBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#FFEED9"/>
            <stop offset="100%" stop-color="#FCD5B5"/>
          </radialGradient>
        </defs>
        <rect width="400" height="400" fill="url(#catBg)"/>
        <!-- Ears -->
        <polygon points="100,160 140,70 190,130" fill="#E89B6C"/>
        <polygon points="115,150 145,90 175,130" fill="#FFAAA6"/>
        <polygon points="300,160 260,70 210,130" fill="#E89B6C"/>
        <polygon points="285,150 255,90 225,130" fill="#FFAAA6"/>
        <!-- Face -->
        <ellipse cx="200" cy="230" rx="140" ry="115" fill="#FFAF7A"/>
        <ellipse cx="200" cy="245" rx="100" ry="80" fill="#FFF4E6"/>
        <!-- Eyes big watery -->
        <ellipse cx="145" cy="205" rx="35" ry="40" fill="#2C3E50"/>
        <ellipse cx="255" cy="205" rx="35" ry="40" fill="#2C3E50"/>
        <ellipse cx="140" cy="195" rx="16" ry="20" fill="#FFFFFF"/>
        <ellipse cx="155" cy="225" rx="8" ry="8" fill="#FFFFFF"/>
        <ellipse cx="250" cy="195" rx="16" ry="20" fill="#FFFFFF"/>
        <ellipse cx="265" cy="225" rx="8" ry="8" fill="#FFFFFF"/>
        <!-- Tears -->
        <path d="M140,240 Q130,280 145,310 Q160,280 150,240 Z" fill="#70C1B3" opacity="0.85"/>
        <path d="M250,240 Q240,280 255,310 Q270,280 260,240 Z" fill="#70C1B3" opacity="0.85"/>
        <!-- Nose & Mouth -->
        <polygon points="200,240 190,250 210,250" fill="#FF6B6B"/>
        <path d="M190,255 Q180,270 170,265" stroke="#7A4E3A" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M210,255 Q220,270 230,265" stroke="#7A4E3A" stroke-width="4" fill="none" stroke-linecap="round"/>
        <!-- Blush -->
        <ellipse cx="105" cy="245" rx="20" ry="12" fill="#FF8E8E" opacity="0.6"/>
        <ellipse cx="295" cy="245" rx="20" ry="12" fill="#FF8E8E" opacity="0.6"/>
        <!-- Whiskers -->
        <line x1="80" y1="230" x2="30" y2="220" stroke="#7A4E3A" stroke-width="3" stroke-linecap="round"/>
        <line x1="80" y1="245" x2="25" y2="245" stroke="#7A4E3A" stroke-width="3" stroke-linecap="round"/>
        <line x1="320" y1="230" x2="370" y2="220" stroke="#7A4E3A" stroke-width="3" stroke-linecap="round"/>
        <line x1="320" y1="245" x2="375" y2="245" stroke="#7A4E3A" stroke-width="3" stroke-linecap="round"/>
      </svg>
    `)
  },
  {
    id: 'capybara-chill',
    name: '情绪稳定水豚 (Capybara)',
    category: 'capybara',
    defaultTopText: '天塌下来',
    defaultBottomText: '也是先泡个热水澡',
    description: '头顶橘子的万物皆空豚豚，精神状态极其稳定',
    url: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
        <rect width="400" height="400" fill="#E8F4F8"/>
        <!-- Water bath -->
        <path d="M0,280 Q100,270 200,280 T400,280 L400,400 L0,400 Z" fill="#64B5F6" opacity="0.7"/>
        <path d="M0,300 Q100,290 200,300 T400,300 L400,400 L0,400 Z" fill="#42A5F5" opacity="0.5"/>
        <!-- Capybara Body -->
        <ellipse cx="200" cy="270" rx="130" ry="90" fill="#9C6644"/>
        <ellipse cx="200" cy="190" rx="95" ry="85" fill="#B07D58"/>
        <!-- Snout boxy -->
        <rect x="135" y="160" width="130" height="90" rx="35" fill="#8D5B3B"/>
        <!-- Nose nostrils -->
        <ellipse cx="180" cy="210" rx="7" ry="12" fill="#3D2314"/>
        <ellipse cx="220" cy="210" rx="7" ry="12" fill="#3D2314"/>
        <!-- Slanted chill eyes -->
        <line x1="130" y1="175" x2="165" y2="175" stroke="#3D2314" stroke-width="6" stroke-linecap="round"/>
        <line x1="235" y1="175" x2="270" y2="175" stroke="#3D2314" stroke-width="6" stroke-linecap="round"/>
        <!-- Tiny round ears -->
        <circle cx="110" cy="135" r="18" fill="#7F4F24"/>
        <circle cx="290" cy="135" r="18" fill="#7F4F24"/>
        <!-- Orange on head -->
        <circle cx="200" cy="95" r="28" fill="#FFA726"/>
        <ellipse cx="200" cy="67" rx="8" ry="4" fill="#66BB6A"/>
        <!-- Steam bubbles -->
        <circle cx="80" cy="220" r="10" fill="#E3F2FD" opacity="0.8"/>
        <circle cx="330" cy="210" r="14" fill="#E3F2FD" opacity="0.8"/>
      </svg>
    `)
  },
  {
    id: 'panda-head',
    name: '经典熊猫头 (Panda Meme)',
    category: 'panda',
    defaultTopText: '管理出来',
    defaultBottomText: '挨打！',
    description: '中国互联网斗图界的定海神针，百搭万能',
    url: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
        <rect width="400" height="400" fill="#F8F9FA"/>
        <!-- Panda Body -->
        <path d="M80,380 C80,280 320,280 320,380 Z" fill="#FFFFFF" stroke="#000000" stroke-width="6"/>
        <!-- Ears -->
        <circle cx="105" cy="115" r="38" fill="#1E1E1E"/>
        <circle cx="295" cy="115" r="38" fill="#1E1E1E"/>
        <!-- Panda Head -->
        <ellipse cx="200" cy="200" rx="140" ry="120" fill="#FFFFFF" stroke="#1E1E1E" stroke-width="7"/>
        <!-- Eye Patches -->
        <ellipse cx="140" cy="180" rx="35" ry="45" fill="#1E1E1E" transform="rotate(-15 140 180)"/>
        <ellipse cx="260" cy="180" rx="35" ry="45" fill="#1E1E1E" transform="rotate(15 260 180)"/>
        <!-- Eyes looking funny -->
        <circle cx="145" cy="175" r="8" fill="#FFFFFF"/>
        <circle cx="255" cy="175" r="8" fill="#FFFFFF"/>
        <!-- Smirk Expression -->
        <!-- Eyebrows raised -->
        <path d="M120,135 Q145,120 170,135" stroke="#1E1E1E" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M230,135 Q255,120 280,135" stroke="#1E1E1E" stroke-width="5" fill="none" stroke-linecap="round"/>
        <!-- Nose -->
        <ellipse cx="200" cy="215" rx="16" ry="10" fill="#1E1E1E"/>
        <!-- Mischievous grin mouth -->
        <path d="M150,240 Q200,290 250,240" stroke="#1E1E1E" stroke-width="6" fill="#FFFFFF"/>
        <line x1="200" y1="215" x2="200" y2="245" stroke="#1E1E1E" stroke-width="4"/>
      </svg>
    `)
  },
  {
    id: 'doge-side',
    name: '神烦柴犬 (Doge)',
    category: 'dog',
    defaultTopText: '就这？',
    defaultBottomText: '我还没用力你就倒下了',
    description: '灵魂斜眼凝视，自带精神嘲讽光环',
    url: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
        <rect width="400" height="400" fill="#FFF9E6"/>
        <!-- Ears -->
        <polygon points="90,140 130,50 180,110" fill="#DE9B52"/>
        <polygon points="310,140 270,50 220,110" fill="#DE9B52"/>
        <!-- Face base -->
        <circle cx="200" cy="220" r="130" fill="#E6A75E"/>
        <path d="M130,220 Q200,280 270,220 Q200,160 130,220 Z" fill="#FFF2DF"/>
        <!-- Cheeks -->
        <ellipse cx="140" cy="250" rx="35" ry="30" fill="#FFF8EE"/>
        <ellipse cx="260" cy="250" rx="35" ry="30" fill="#FFF8EE"/>
        <!-- Suspicious eyes (side glance) -->
        <ellipse cx="150" cy="180" rx="22" ry="18" fill="#FFFFFF" stroke="#5A3A1A" stroke-width="4"/>
        <circle cx="160" cy="180" r="10" fill="#3D2005"/>
        <ellipse cx="250" cy="180" rx="22" ry="18" fill="#FFFFFF" stroke="#5A3A1A" stroke-width="4"/>
        <circle cx="260" cy="180" r="10" fill="#3D2005"/>
        <!-- Raised eyebrow on one side -->
        <path d="M130,150 Q150,140 170,155" stroke="#5A3A1A" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M230,155 Q250,145 270,150" stroke="#5A3A1A" stroke-width="5" fill="none" stroke-linecap="round"/>
        <!-- Snout & Nose -->
        <polygon points="200,225 185,210 215,210" fill="#241400"/>
        <path d="M185,230 Q200,245 215,230" stroke="#241400" stroke-width="4" fill="none"/>
        <!-- Cheek blush -->
        <circle cx="110" cy="240" r="16" fill="#FFA5A5" opacity="0.6"/>
        <circle cx="290" cy="240" r="16" fill="#FFA5A5" opacity="0.6"/>
      </svg>
    `)
  },
  {
    id: 'duck-shock',
    name: '呆萌冲鸭 (Shocked Duck)',
    category: 'duck',
    defaultTopText: '什么？！',
    defaultBottomText: '今天竟然还要上班？',
    description: '圆滚滚大眼睛呆头小黄鸭，可爱暴击',
    url: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
        <rect width="400" height="400" fill="#FFF0F5"/>
        <!-- Body -->
        <ellipse cx="200" cy="270" rx="120" ry="90" fill="#FFD166"/>
        <!-- Head -->
        <circle cx="200" cy="180" r="90" fill="#FFD166"/>
        <!-- Big Shocked Eyes -->
        <circle cx="160" cy="160" r="26" fill="#FFFFFF" stroke="#333333" stroke-width="4"/>
        <circle cx="160" cy="160" r="14" fill="#111111"/>
        <circle cx="155" cy="155" r="5" fill="#FFFFFF"/>
        
        <circle cx="240" cy="160" r="26" fill="#FFFFFF" stroke="#333333" stroke-width="4"/>
        <circle cx="240" cy="160" r="14" fill="#111111"/>
        <circle cx="235" cy="155" r="5" fill="#FFFFFF"/>
        
        <!-- Shocked open Beak -->
        <ellipse cx="200" cy="205" rx="28" ry="18" fill="#F77F00"/>
        <ellipse cx="200" cy="208" rx="16" ry="10" fill="#D62828"/>
        
        <!-- Cheeks -->
        <circle cx="125" cy="200" r="18" fill="#FF8FA3" opacity="0.7"/>
        <circle cx="275" cy="200" r="18" fill="#FF8FA3" opacity="0.7"/>
        
        <!-- Little wing -->
        <ellipse cx="100" cy="260" rx="20" ry="35" fill="#FFBA08" transform="rotate(-20 100 260)"/>
        <ellipse cx="300" cy="260" rx="20" ry="35" fill="#FFBA08" transform="rotate(20 300 260)"/>
        <!-- Ah head feather -->
        <path d="M195,95 Q190,65 205,75 Q215,60 210,95" fill="#FFD166"/>
      </svg>
    `)
  }
];

export const STICKERS_LIST: StickerItem[] = [
  { id: 'anger', emoji: '💢', name: '青筋', category: 'emotion' },
  { id: 'sweat', emoji: '💧', name: '汗颜', category: 'emotion' },
  { id: 'sparkles', emoji: '✨', name: '闪烁', category: 'fx' },
  { id: 'fire', emoji: '🔥', name: '暴怒', category: 'fx' },
  { id: 'thug-glasses', emoji: '🕶️', name: '墨镜', category: 'prop' },
  { id: 'crown', emoji: '👑', name: '王冠', category: 'prop' },
  { id: 'clown', emoji: '🤡', name: '小丑', category: 'meme' },
  { id: 'poop', emoji: '💩', name: '便便', category: 'meme' },
  { id: 'question', emoji: '❓', name: '问号', category: 'symbol' },
  { id: 'exclamation', emoji: '❗', name: '感叹', category: 'symbol' },
  { id: 'heart', emoji: '💖', name: '比心', category: 'cute' },
  { id: 'cat-paw', emoji: '🐾', name: '肉垫', category: 'cute' },
  { id: 'target', emoji: '🎯', name: '准心', category: 'prop' },
  { id: 'crying', emoji: '😭', name: '大哭', category: 'emotion' },
  { id: 'skull', emoji: '💀', name: '秒杀', category: 'meme' },
  { id: 'pin', emoji: '📌', name: '图钉', category: 'tool' },
];

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'capture',
    title: '闪电截屏 · 像素级放大镜',
    subtitle: '毫米级边界吸附与 HEX/RGB 取色器',
    description: '支持多屏幕与窗口自动吸附，内置 16X 实时放大镜，精准取色按下 C 键即可复制色值，截图从未如此丝滑精准。',
    iconName: 'Zap',
    badge: '极速响应 0.05s',
    color: 'amber',
    previewType: 'magnifier'
  },
  {
    id: 'gif-record',
    title: 'GIF 动图录制 · 帧级魔性微调',
    subtitle: '录完即剪，自动压缩微信免降画质',
    description: '高清 60FPS 区域录屏，支持逐帧裁剪、倒放、变速与文字添加，智能调优调色板，体积永远压在微信与 QQ 表情包限制内。',
    iconName: 'Film',
    badge: '微信 1MB 免压',
    color: 'rose',
    previewType: 'gif'
  },
  {
    id: 'stickers',
    title: '海量魔性贴纸 · 灵魂描边字',
    subtitle: '熊猫头、柴犬与漫画爆炸气泡一网打尽',
    description: '内置百种热门斗图贴纸与经典 Impact 描边粗体，支持任意自由涂鸦、马赛克打码、聚光灯与荧光高亮，让每张图充满灵魂。',
    iconName: 'Smile',
    badge: '自带搞笑灵魂',
    color: 'purple',
    previewType: 'stickers'
  },
  {
    id: 'pin',
    title: '贴图置顶 · 悬浮灵感画布',
    subtitle: '透明度自由调节，支持鼠标穿透',
    description: '截取参考资料或萌宠表情直接悬浮在桌面上（F3），支持滚轮缩放、翻转、透明度滑动以及鼠标穿透，写代码、做设计必备神器。',
    iconName: 'Pin',
    badge: '生产力 x10',
    color: 'blue',
    previewType: 'pin'
  },
  {
    id: 'ocr',
    title: '智能离线 OCR · 隐私绝对安全',
    subtitle: '无需联网，瞬间提取图片中的文字与二维码',
    description: '内置高精度轻量级离线识别引擎，精准识别中英日韩多种语言，一键解析二维码链接，数据 100% 本地运算，绝不上云泄露隐私。',
    iconName: 'ScanText',
    badge: '100% 离线隐私',
    color: 'emerald',
    previewType: 'ocr'
  },
  {
    id: 'share',
    title: '一键极速直达 · 聊天群里封神',
    subtitle: '复制图片、文件、URL 或自定义快捷上传',
    description: '完成编辑一键回车（Enter）直接复制到剪贴板，秒粘贴至微信、QQ、Discord、Telegram、飞书，斗图永远走在最前线。',
    iconName: 'Share2',
    badge: '秒发聊天软件',
    color: 'orange',
    previewType: 'share'
  }
];

export const SHORTCUTS_DATA: ShortcutItem[] = [
  { key: 'F1 或 Alt + A', action: '快速截图', description: '呼出全屏或区域智能截图', category: 'capture' },
  { key: 'F2 或 Alt + G', action: 'GIF 录制', description: '框选区域开始录制魔性动图', category: 'gif' },
  { key: 'F3', action: '贴图置顶', description: '将当前截图直接悬浮固定在桌面上', category: 'pin' },
  { key: 'C', action: '复制取色器', description: '截图状态下实时复制光标处 HEX 颜色代码', category: 'capture' },
  { key: 'Space', action: '切换十字线 / 放大镜', description: '在精准像素游标和全局视野之间切换', category: 'capture' },
  { key: 'T', action: '文本 / 梗字输入', description: '快速添加黑白描边斗图文字或对白框', category: 'edit' },
  { key: 'M', action: '像素马赛克 / 高斯模糊', description: '保护隐私与敏感信息打码', category: 'edit' },
  { key: 'Ctrl + C / Enter', action: '复制并退出', description: '完成标注直接复制至剪贴板', category: 'edit' },
  { key: 'Ctrl + S', action: '快速保存', description: '保存为 PNG / WEBP / GIF 到自定义文件夹', category: 'edit' },
  { key: '滚轮上下', action: '调节画笔粗细 / 贴图缩放', description: '光标悬浮时快速微调参数', category: 'pin' },
];

export const DOWNLOAD_OPTIONS: DownloadOption[] = [
  {
    platform: 'windows',
    name: 'Windows 客户端 (64-bit)',
    ext: '.exe 安装包 / .zip 绿色版',
    size: '18.4 MB',
    version: 'v1.2.0',
    isRecommended: true,
    link: 'https://github.com/darkmatter2048/MemeCapture/releases',
    icon: 'Monitor'
  },
  {
    platform: 'mac-arm',
    name: 'macOS (Apple Silicon M1/M2/M3/M4)',
    ext: '.dmg 镜像包',
    size: '22.1 MB',
    version: 'v1.2.0',
    isRecommended: false,
    link: 'https://github.com/darkmatter2048/MemeCapture/releases',
    icon: 'Laptop'
  },
  {
    platform: 'mac-intel',
    name: 'macOS (Intel x86_64)',
    ext: '.dmg 镜像包',
    size: '23.8 MB',
    version: 'v1.2.0',
    isRecommended: false,
    link: 'https://github.com/darkmatter2048/MemeCapture/releases',
    icon: 'Laptop'
  },
  {
    platform: 'linux',
    name: 'Linux 客户端',
    ext: '.AppImage / .deb',
    size: '20.6 MB',
    version: 'v1.2.0',
    isRecommended: false,
    link: 'https://github.com/darkmatter2048/MemeCapture/releases',
    icon: 'Terminal'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: '1',
    author: '摸鱼艺术家小王',
    role: '资深产品经理 & 群聊梗王',
    avatar: '🐱',
    content: '以前做个表情包要开 PS 或者手机修图软件，现在有了 MemeCapture，看到搞笑画面按 F1 一框，打上字加个墨镜贴纸，直接回车粘贴到微信群，3秒钟完成击杀！',
    likes: 342
  },
  {
    id: '2',
    author: '前端修仙者',
    role: '全栈开发工程师',
    avatar: '🦊',
    content: 'F3 贴图置顶功能真的是生产力爆棚！做 UI 还原的时候把设计稿贴在屏幕右上角调半透明，直接照着写 CSS，简直不要太爽。而且 100% 离线 OCR 识别代码极其神速！',
    likes: 289
  },
  {
    id: '3',
    author: '二次元阿宅',
    role: '番剧剪辑UP主',
    avatar: '🐰',
    content: '录 GIF 的调色盘算法太神了，以往截出来的动图经常超过 5MB 微信发不出去，MemeCapture 自动帮我压在 1MB 内还能保证画面超高清，爱了爱了！',
    likes: 415
  }
];

export const FAQS_DATA = [
  {
    q: 'MemeCapture 是完全免费且开源的吗？',
    a: '是的！MemeCapture 采用宽松的开源许可证发布在 GitHub（作者：darkmatter2048），无论是个人日常使用还是商业办公，均 100% 永久免费，无任何捆绑软件、无弹出广告。'
  },
  {
    q: '截图或 OCR 识别时，会不会上传我的图片数据？',
    a: '绝对不会！MemeCapture 秉持隐私至上理念，所有截屏捕捉、图片渲染、GIF 编码以及 OCR 文本识别全部在您的本地 CPU/GPU 内存中完成，零网络上传，断网状态下也能完美运行。'
  },
  {
    q: '导出的 GIF 表情包怎么做到又高清又小的？',
    a: 'MemeCapture 采用了专为动态表情优化的 NeuQuant 调色板量化算法和局部帧差分压缩技术，自动剔除静态背景重复信息，生成画质细腻且体积轻巧（轻松控制在微信 < 1MB 限制内）的动态图。'
  },
  {
    q: '如何自定义快捷键或修改默认保存路径？',
    a: '在托盘图标右键点击「设置」或按下快捷键唤出控制面板，您可以在「按键绑定」中随心修改截图、GIF 录屏、贴图置顶的按键，也可以设置保存文件命名规则与自动复制选项。'
  },
  {
    q: '支持哪些操作系统？',
    a: '目前完美支持 Windows 10/11 (64-bit)、macOS (包括 Apple Silicon M系列芯片与 Intel 架构)，以及主流 Linux 发行版 (Ubuntu, Fedora, Arch 等通过 AppImage)。'
  }
];
