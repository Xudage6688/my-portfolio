import type { Locale } from "./types";

export type Messages = {
  nav: {
    projects: string;
    about: string;
    dict: string;
    github: string;
    menuOpen: string;
    backToTop: string;
  };
  hero: {
    headline: string;
    viewProjects: string;
    githubProfile: string;
  };
  projects: {
    kicker: string;
    title: string;
    intro: string;
    heroTier: string;
    moreTier: string;
    moreRepos: string;
    heroBadge: string;
    problemLabel: string;
    liveDemo: string;
    interactivePreview: string;
  };
  about: {
    kicker: string;
    experience: string;
    skills: string;
    contact: string;
    resumeCn: string;
    resumeEn: string;
  };
  footer: {
    phase: string;
    contact: string;
  };
  dictPage: {
    metaTitle: string;
    metaDescription: string;
    kicker: string;
    title: string;
    intro: string;
  };
  dictDemo: {
    whyPreviewTitle: string;
    whyPreviewBody: string;
    cloneLocal: string;
    dictDirs: string;
    gifAlt: string;
    gifCaption: string;
    searchLabel: string;
    searchPlaceholder: string;
    miss: string;
    resultsCount: string;
    techTitle: string;
    tech1: string;
    tech2: string;
    tech3: string;
    tech4: string;
    localTitle: string;
    localCode: string;
    openGithub: string;
  };
  lang: {
    en: string;
    zh: string;
    switchTo: string;
  };
};

const en: Messages = {
  nav: {
    projects: "Projects",
    about: "About",
    dict: "Dict",
    github: "GitHub",
    menuOpen: "Open menu",
    backToTop: "Back to top",
  },
  hero: {
    headline: "Traceable quality from lab workflow to release",
    viewProjects: "View projects",
    githubProfile: "GitHub Profile",
  },
  projects: {
    kicker: "Selected Work",
    title: "Projects",
    intro:
      "Test automation, DevOps platforms, and AI tooling from daily QA work—plus full-stack projects you can try online.",
    heroTier: "Hero Projects",
    moreTier: "More Projects",
    moreRepos: "More repositories",
    heroBadge: "Hero Project",
    problemLabel: "What it solves",
    liveDemo: "Live Demo",
    interactivePreview: "Interactive preview",
  },
  about: {
    kicker: "About",
    experience: "Experience (summary)",
    skills: "Skills",
    contact: "Contact & résumé",
    resumeCn: "Résumé (中文 PDF)",
    resumeEn: "Résumé (English PDF)",
  },
  footer: {
    phase: "",
    contact: "Contact",
  },
  dictPage: {
    metaTitle: "MyDict preview · Xudage Portfolio",
    metaDescription:
      "Interactive demo of the MyDict MDX dictionary UI. Full dictionaries run locally with mdictcc.",
    kicker: "MyDict · Portfolio Demo",
    title: "Dictionary preview",
    intro:
      "Try the lookup UI with sample entries; full MDX libraries and the native engine are not hosted on this server.",
  },
  dictDemo: {
    whyPreviewTitle: "Why a preview instead of the full online dictionary?",
    whyPreviewBody:
      "The real app depends on local .mdx / .mdd files (often hundreds of MB to several GB) and the native mdictcc engine—too heavy for this portfolio VPS. This page demonstrates the interaction with built-in sample entries; for the full experience,",
    cloneLocal: "clone the repo and run it locally",
    dictDirs: "with your own dictionary folder.",
    gifAlt: "Screen recording of MyDict with full local dictionaries",
    gifCaption:
      "Local full build (multi-dictionary MDX); this site offers a lightweight interactive preview plus sample entries.",
    searchLabel: "Lookup (sample dictionary)",
    searchPlaceholder: "Try hello / quality / automation / mdict",
    miss: 'Not found in the sample set: "{word}". Configure MDICT_DIR locally for full libraries.',
    resultsCount: "dictionary results · demo data",
    techTitle: "Technical highlights (matches the repo)",
    tech1: "Next.js Route Handlers + koffi → mdictcc",
    tech2: "Dictionary handle LRU + byte-capped caches",
    tech3: "Path-style /api/resource/<dictId>/…",
    tech4: "HTML sanitization, MDD assets & disk fallback",
    localTitle: "Run locally",
    localCode: `git clone https://github.com/Xudage6688/mydict
cd mydict
# Build mdictcc; place .mdx/.mdd under dicts/
npm install && npm run dev`,
    openGithub: "Open GitHub repository →",
  },
  lang: {
    en: "EN",
    zh: "中文",
    switchTo: "Switch language",
  },
};

const zh: Messages = {
  nav: {
    projects: "项目",
    about: "关于",
    dict: "词典",
    github: "GitHub",
    menuOpen: "打开菜单",
    backToTop: "回到顶部",
  },
  hero: {
    headline: "从实验室流程到上线，质量全程可验证",
    viewProjects: "查看项目",
    githubProfile: "GitHub 主页",
  },
  projects: {
    kicker: "精选作品",
    title: "项目展示",
    intro: "测试自动化、DevOps 工具台与 AI 测试实践为主，辅以可在线体验的全栈项目。",
    heroTier: "主打项目",
    moreTier: "更多项目",
    moreRepos: "更多仓库",
    heroBadge: "主打项目",
    problemLabel: "解决了什么问题",
    liveDemo: "在线演示",
    interactivePreview: "交互预览",
  },
  about: {
    kicker: "关于",
    experience: "工作经历（摘要）",
    skills: "技能栈",
    contact: "联系 & 简历",
    resumeCn: "中文简历 PDF",
    resumeEn: "English Resume PDF",
  },
  footer: {
    phase: "",
    contact: "联系方式",
  },
  dictPage: {
    metaTitle: "MyDict 预览 · Xudage Portfolio",
    metaDescription: "MyDict MDX 词典 UI 交互演示；完整词库请在本地配合 mdictcc 运行。",
    kicker: "MyDict · 作品集演示",
    title: "词典交互预览",
    intro: "体验查词与多词典结果卡片；完整 MDX 词库与引擎不在公网服务器托管。",
  },
  dictDemo: {
    whyPreviewTitle: "为何是「预览」而不是完整在线词典？",
    whyPreviewBody:
      "真实项目依赖本地 .mdx / .mdd 词库（常为数百 MB～数 GB）与原生 mdictcc 引擎，不适合放到当前作品集服务器。此页用内置示例词条演示查词交互；完整能力请",
    cloneLocal: "克隆仓库在本地运行",
    dictDirs: "并挂载自己的词典目录。",
    gifAlt: "MyDict 本地完整版查词录屏演示",
    gifCaption: "本地完整版实机录屏（多词典 MDX）；线上为轻量交互预览 + 示例词条",
    searchLabel: "查词（示例词库）",
    searchPlaceholder: "输入 hello / quality / automation / mdict",
    miss: "示例库中未找到「{word}」。完整词库请在本地配置 MDICT_DIR。",
    resultsCount: "个词典结果 · 演示数据",
    techTitle: "技术要点（与仓库一致）",
    tech1: "Next.js Route Handlers + koffi 调用 mdictcc",
    tech2: "词典句柄 LRU、词条/资源字节上限缓存",
    tech3: "路径型 /api/resource/<dictId>/…",
    tech4: "HTML 消毒、MDD 资源与磁盘回退",
    localTitle: "本地运行",
    localCode: `git clone https://github.com/Xudage6688/mydict
cd mydict
# 编译 mdictcc 引擎，将 .mdx/.mdd 放入 dicts/
npm install && npm run dev`,
    openGithub: "打开 GitHub 仓库 →",
  },
  lang: {
    en: "EN",
    zh: "中文",
    switchTo: "切换语言",
  },
};

export const messages: Record<Locale, Messages> = { en, zh };

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}
