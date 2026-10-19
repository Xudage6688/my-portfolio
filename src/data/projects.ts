import type { L10n } from "@/i18n/types";

export type ProjectTier = "hero" | "more" | "footer";

export type Project = {
  id: string;
  tier: ProjectTier;
  title: L10n;
  subtitle: L10n;
  summary: L10n;
  problem: L10n;
  stack: string[];
  github: string;
  liveUrl?: string;
  liveLabel?: L10n;
  placeholder: string;
};

export const siteConfig = {
  name: "刘旭 (Daisy Liu)",
  shortName: "Xudage",
  domain: "https://xudage.fun",
  role: {
    en: "Senior Test Engineer / SDET · 8+ Years",
    zh: "高级测试工程师 / 自动化测试开发 / 质量保障 · 8年+",
  },
  tagline: {
    en: "Lab Testing QA · Test System Automation · AI-Augmented Quality",
    zh: "实验室检测质量 · 测试系统自动化 · AI 智能测试",
  },
  bio: {
    en:
      "Based in Shenzhen. At QIMA I own Lab Testing and myQIMA platform QA—sample intake through report delivery—with Cypress/Playwright E2E, k6 performance testing, and Jira Xray traceability. I also build DevOps tooling and LLM-driven test agents. Projects here reflect personal and open-source work on GitHub.",
    zh:
      "现居深圳。在 QIMA 负责实验室检测管理系统与 myQIMA 平台全链路质量保障（样品受理→检测排程→报告交付），涵盖 E2E 自动化、k6 性能压测与 Jira Xray 可追溯体系；并自研 DevOps 工具台与 LLM 驱动的 QA Test Agent。本站项目来自个人实践与开源仓库。",
  },
  linkedin: "https://www.linkedin.com/in/daisy-liu-b98509314/",
  location: { en: "Shenzhen", zh: "深圳" },
  github: "https://github.com/Xudage6688",
  email: "liuxu15132@gmail.com",
  phone: "+86 17304468366",
  resumes: {
    cn: "/resumes/Daisy_Liu_CN.pdf",
    en: "/resumes/Daisy_Liu_EN.pdf",
  },
};

export const aboutHighlights: L10n[] = [
  {
    en: "QA Test Agent (LLM): parse requirements → one-click Xray-format test cases",
    zh: "自研 QA Test Agent：自动解析测试需求，一键生成完整 Xray 格式用例",
  },
  {
    en: "k6 performance platform: ramping-vus, p95 < 2s thresholds; multi-scenario load & capacity planning",
    zh: "率先落地 k6 性能测试：ramping-vus + 生产级阈值，多场景高并发压测与容量规划",
  },
  {
    en: "LT module automation 0% → 94% (core flows 100%); myQIMA core 100%; regression 3 days → 4 hours",
    zh: "LT 模块自动化 0% → 94%（核心流程 100%），myQIMA 核心模块 100%；回归 3 天 → 4 小时",
  },
  {
    en: "DevOps tool platform: 8.5K LOC, 87% test coverage, 7 integrated modules (Jira / CI / Jenkins)",
    zh: "DevOps 工具台：8.5K 行代码、87% 覆盖率，集成 Jira / CircleCI / Jenkins 等 7 大模块",
  },
  {
    en: "QIMAGPT Proxy (Go): OpenAI-compatible API gateway; #1 GitHub contributor in a 37-person team",
    zh: "自研 QIMAGPT Proxy（Go）OpenAI 兼容网关；37 人团队 GitHub 贡献排名第一",
  },
  {
    en: "Jira Xray deep integration: test plan → execution → auto result sync with full traceability",
    zh: "测试管理与 Jira Xray 深度集成：计划→执行→结果回传全链路可追溯",
  },
];

export const aboutSkillGroups = [
  {
    label: "Test Automation",
    items: ["Cypress", "Playwright", "Selenium", "Appium", "k6", "HttpRunner"],
  },
  {
    label: "Management & CI/CD",
    items: ["Jira Xray", "CircleCI", "Jenkins", "GitHub Actions", "Docker"],
  },
  {
    label: "Languages & AI",
    items: ["Python", "TypeScript", "Go", "SQL", "QA Test Agent", "Ollama / DeepSeek"],
  },
];

export const aboutExperience = [
  {
    company: { en: "QIMA", zh: "QIMA（启迈检测）" },
    role: {
      en: "Test Engineer / Test System Developer",
      zh: "测试工程师 / 测试系统开发",
    },
    period: { en: "2024.08 – Present", zh: "2024.08 – 至今" },
    location: siteConfig.location,
  },
  {
    company: { en: "KPMG", zh: "毕马威（KPMG）" },
    role: {
      en: "Senior Test Engineer / Team Leader",
      zh: "高级测试工程师 / Team Leader",
    },
    period: { en: "2021.09 – 2024.05", zh: "2021.09 – 2024.05" },
    location: siteConfig.location,
  },
  {
    company: { en: "Qian Da Ma (Everyday Fresh)", zh: "钱大妈" },
    role: {
      en: "Senior Test Engineer",
      zh: "高级测试工程师",
    },
    period: { en: "2021.06 – 2021.09", zh: "2021.06 – 2021.09" },
    location: siteConfig.location,
  },
  {
    company: { en: "Ji De Cai", zh: "集德才" },
    role: {
      en: "Test Engineer",
      zh: "测试工程师",
    },
    period: { en: "2019.06 – 2021.03", zh: "2019.06 – 2021.03" },
    location: siteConfig.location,
  },
];

export const aboutEducation: L10n = {
  en:
    "Wuhan University · B.S. in Physics (2012–2017) · Intermediate System Integration Project Management Engineer (national cert., 2022–2023)",
  zh:
    "武汉大学 · 物理学 · 本科学士学位（2012–2017） · 中级系统集成项目管理工程师（国家认证，2022–2023）",
};

export const projects: Project[] = [
  {
    id: "qa-toolkit-demo",
    tier: "hero",
    title: { en: "DevOps Test Tool Platform", zh: "DevOps 测试工具平台" },
    subtitle: {
      en: "Python 3.12 + Streamlit · 8.5K LOC · 87% coverage",
      zh: "Python 3.12 + Streamlit · 8.5K 行代码 · 87% 覆盖率",
    },
    summary: {
      en: "Integrated QA/DevOps hub: Jira, CI/CD pipelines, Jenkins deploy control, and test utilities.",
      zh: "集成化测试与 DevOps 平台：Jira 工单、流水线管理、Jenkins 部署与测试辅助工具。",
    },
    problem: {
      en:
        "Seven built-in modules (impact analysis, image diff, PR shortcuts, CircleCI, Jira batch ops, Jenkins sequential/concurrent deploy, test tools) replace scattered CLI context switches with one testable Streamlit app.",
      zh:
        "内置 7 大工具（影响分析、镜像对比、PR 快开、CircleCI、Jira 批量、Jenkins 顺序/并发部署、测试辅助），将分散 CLI 操作收敛为可测试的 Streamlit 平台。",
    },
    stack: ["Python 3.12", "Streamlit", "Jira API", "CircleCI", "Jenkins"],
    github: "https://github.com/Xudage6688/qa-toolkit-demo",
    placeholder: "/placeholders/qa-toolkit.svg",
  },
  {
    id: "qsp-automation-demo",
    tier: "hero",
    title: { en: "QSP Cypress Automation", zh: "QSP Cypress 自动化" },
    subtitle: {
      en: "Cypress E2E framework for inspection & lab platforms",
      zh: "检验/实验室平台 Cypress E2E 框架",
    },
    summary: {
      en: "Cypress E2E suite for QSP inspection and lab platforms.",
      zh: "面向 QSP 检验/实验室平台的 Cypress E2E 框架。",
    },
    problem: {
      en:
        "Page Object + API hybrid suite for Lab Testing and myQIMA (booking, payment, reports, supplier, calculator) with Jira Xray sync and multi-environment CI.",
      zh:
        "Page Object + API 混合框架，覆盖实验室检测与 myQIMA 核心流程（预订、支付、报告、供应商、计算器），支持 Jira Xray 与多环境 CI。",
    },
    stack: ["Cypress", "JavaScript", "PostgreSQL", "Xray"],
    github: "https://github.com/Xudage6688/Cypress-automation-demo",
    placeholder: "/placeholders/cypress.svg",
  },
  {
    id: "siliconflow-query",
    tier: "hero",
    title: { en: "SiliconFlow Query", zh: "SiliconFlow Query" },
    subtitle: { en: "CLI to discover free AI models on SiliconFlow", zh: "硅基流动免费模型筛选 CLI" },
    summary: {
      en: "CLI to scrape and index free SiliconFlow models locally.",
      zh: "硅基流动免费模型筛选与本地索引 CLI。",
    },
    problem: {
      en:
        "Scrapes official pricing and capabilities into a local DB so you do not manually compare free vs deprecated models page by page.",
      zh:
        "自动抓取官网模型价格与能力信息并写入本地数据库，避免手动逐页比对免费模型与 deprecated 状态。",
    },
    stack: ["Python", "Typer", "Playwright", "Rich"],
    github: "https://github.com/Xudage6688/siliconflow-query",
    placeholder: "/placeholders/cli.svg",
  },
  {
    id: "wedding-invitation",
    tier: "more",
    title: { en: "Wedding Invitation", zh: "婚礼邀请函" },
    subtitle: { en: "Full-stack wedding invitation SPA", zh: "全栈婚礼邀请站点" },
    summary: {
      en: "React + Express + MySQL wedding site with guest wall and lottery.",
      zh: "React + Express + MySQL 的婚礼站点，含留言墙与抽奖。",
    },
    problem: {
      en:
        "Self-hosted invites, RSVP, guest wall, and lottery flow with Docker Compose one-command deploy.",
      zh: "为婚礼场景提供可自部署的邀请函、RSVP、签到墙与抽奖流程，Docker Compose 一键上线。",
    },
    stack: ["React", "Express", "MySQL", "Docker"],
    github: "https://github.com/Xudage6688/wedding-hub",
    liveUrl: "/wedding/",
    liveLabel: { en: "Live Demo", zh: "在线演示" },
    placeholder: "/placeholders/wedding.svg",
  },
  {
    id: "mdict",
    tier: "more",
    title: { en: "MyDict", zh: "MyDict 词典" },
    subtitle: { en: "MDX dictionary web app (mdictcc + Next.js)", zh: "MDX 词典 Web 应用（mdictcc + Next.js）" },
    summary: {
      en: "MDX/MDD lookup via mdictcc; public interactive preview, full libs run locally.",
      zh: "基于 mdictcc 的 MDX/MDD 查词应用；公网提供交互预览，完整词库需本地部署。",
    },
    problem: {
      en:
        "koffi FFI to mdictcc, LRU handles, path-based resources—MDict-like UX on the web; large dictionaries stay local-first for VPS and licensing.",
      zh:
        "通过 koffi 调用原生引擎、LRU 句柄与路径型资源路由，在 Web 端复现 MDict 查词体验；大体积词库与版权不适合托管在作品集 VPS，故采用「预览 + 本地运行」展示。",
    },
    stack: ["Next.js", "TypeScript", "koffi", "mdictcc"],
    github: "https://github.com/Xudage6688/mydict",
    liveUrl: "/dict/",
    liveLabel: { en: "Interactive preview", zh: "交互预览" },
    placeholder: "/demos/mydict-demo.gif",
  },
  {
    id: "experimental-tools-demo",
    tier: "more",
    title: { en: "Experimental Tools", zh: "Experimental Tools" },
    subtitle: { en: "DevOps automation toolkit collection", zh: "DevOps 自动化脚本合集" },
    summary: {
      en: "Jira export, ArgoCD, Jenkins, CircleCI CLI utilities.",
      zh: "Jira 导出、ArgoCD、Jenkins、CircleCI 等 DevOps 脚本合集。",
    },
    problem: {
      en:
        "Reusable release and QA helper scripts (Jira/Confluence export, ArgoCD images, concurrent Jenkins deploys).",
      zh:
        "沉淀发布与测试辅助脚本（Jira/Confluence 导出、ArgoCD 镜像查询、并发 Jenkins 部署），形成可复用的 CLI 工具箱。",
    },
    stack: ["Python", "Jira API", "ArgoCD", "Jenkins"],
    github: "https://github.com/Xudage6688/experimental-tools-demo",
    placeholder: "/placeholders/devops.svg",
  },
];

export const footerProjects: Project[] = [
  {
    id: "sxj-automation-demo",
    tier: "footer",
    title: { en: "Finance Lease Automation", zh: "融资租赁自动化" },
    subtitle: { en: "Cypress automation demo (finance lease)", zh: "融资租赁 Cypress 演示" },
    summary: {
      en: "Cypress demo for finance lease flows.",
      zh: "融资租赁场景 Cypress 自动化示例。",
    },
    problem: {
      en: "Sibling demo repo to the QSP suite—Page Objects and flow encapsulation.",
      zh: "与 QSP 套件同质的独立演示仓库，展示 Page Object 与业务流封装。",
    },
    stack: ["Cypress", "Python"],
    github: "https://github.com/Xudage6688/Finance-lease-automation-demo",
    placeholder: "/placeholders/cypress.svg",
  },
];
