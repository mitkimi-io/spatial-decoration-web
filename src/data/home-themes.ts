export type HomeTheme = {
  id: string;
  nameZh: string;
  nameEn: string;
  description: string;
  trackCount: number;
  /** 后续替换为 CDN 地址 */
  coverUrl: string;
};

export const HOME_THEMES: HomeTheme[] = [
  {
    id: "builtin",
    nameZh: "默认",
    nameEn: "Default",
    description: "内置默认，循环视频背景",
    trackCount: 4,
    coverUrl: "/themes/builtin/cover.png",
  },
  {
    id: "kaleidoscope",
    nameZh: "万花筒",
    nameEn: "Kaleidoscope",
    description: "万花筒视觉，循环视频",
    trackCount: 3,
    coverUrl: "/themes/kaleidoscope/cover.png",
  },
  {
    id: "heartbeat",
    nameZh: "心动",
    nameEn: "Heartbeat",
    description: "心动主题",
    trackCount: 5,
    coverUrl: "/themes/heartbeat/cover.png",
  },
  {
    id: "dream",
    nameZh: "梦幻",
    nameEn: "Dream",
    description: "梦幻氛围",
    trackCount: 2,
    coverUrl: "/themes/dream/cover.png",
  },
  {
    id: "stellar-orbit",
    nameZh: "星际轨道",
    nameEn: "Stellar Orbit",
    description: "星际轨道视觉",
    trackCount: 4,
    coverUrl: "/themes/stellar-orbit/cover.png",
  },
];
