export interface MemePreset {
  id: string;
  name: string;
  category: 'cat' | 'dog' | 'capybara' | 'panda' | 'duck';
  url: string;
  defaultTopText?: string;
  defaultBottomText?: string;
  description: string;
}

export interface StickerItem {
  id: string;
  emoji: string;
  name: string;
  category: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badge?: string;
  color: string;
  previewType: 'magnifier' | 'gif' | 'stickers' | 'pin' | 'ocr' | 'share';
}

export interface ShortcutItem {
  key: string;
  action: string;
  description: string;
  category: 'capture' | 'edit' | 'gif' | 'pin';
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  avatar: string;
  content: string;
  memePreview?: string;
  likes: number;
}

export interface DownloadOption {
  platform: 'windows' | 'mac-arm' | 'mac-intel' | 'linux';
  name: string;
  ext: string;
  size: string;
  version: string;
  isRecommended?: boolean;
  link: string;
  icon: string;
}
