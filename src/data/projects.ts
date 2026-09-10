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
    en: "Senior Automation Test Engineer / SDET · 8+ Years",
    zh: "高级自动化测试工程师 / SDET",
  },
  tagline: {
    en: "QA Automation · DevOps Tooling · AI-Augmented Testing",
    zh: "QA 自动化 · DevOps 工具链 · AI 辅助测试与工程效率",
  },
  bio: {
    en:
      "Based in Shenzhen. I build Web/API/E2E automation, CI/CD and DevOps tools, and explore LLMs for test design and engineering efficiency. Projects here are from personal practice and open-source repos—source on GitHub.",
    zh:
      "现居深圳，专注 Web/API/E2E 自动化、CI/CD 与 DevOps 工具开发，并探索 LLM 在测试用例生成与工程效率中的应用。本站项目均来自个人实践与开源仓库，源码可在 GitHub 查看。",
  },
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
    en: "Built a QA Test Agent: natural-language requirements → Xray-format test cases",
    zh: "独立开发 QA Test Agent：需求描述一键生成 Xray 格式测试用例",
  },
  {
    en: "QIMAGPT Proxy (Go): LibreChat → OpenAI-compatible API for internal AI tooling",
    zh: "自研 QIMAGPT Proxy（Go）：LibreChat → OpenAI 兼容 API，统一企业 AI 工具链",
  },
  {
    en: "#1 GitHub contributor in a 37-person team (QSP / myQIMA Portal automation)",
    zh: "37 人团队 GitHub 仓库贡献排名第一（QSP/myQIMA Portal 自动化）",
  },
  {
    en: "LT automation coverage 0% → 94%; myQIMA core modules 100%; regression 3 days → 4 hours",
    zh: "LT 业务自动化覆盖率 0% → 94%，myQIMA 核心模块达 100%；回归周期 3 天 → 4 小时",
  },
  {
    en: "Deep Cypress + Jira Xray integration; custom CircleCI / Jenkins API tooling",
    zh: "深度集成 Cypress + Jira Xray；自研 CircleCI / Jenkins API 工具链",
  },
];

export const aboutSkillGroups = [
  {
    label: "Automation & AI",
    items: ["Cypress", "Playwright", "k6", "LLM Test Agent", "Prompt Engineering"],
  },
  {
    label: "DevOps & Cloud",
    items: ["CircleCI", "Jenkins", "Docker", "AWS", "Streamlit Tooling"],
  },
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Go", "SQL"],
  },
];

export const aboutExperience = [
  {
    company: "QIMA",
    role: {
      en: "Senior Automation Test Engineer",
      zh: "高级自动化测试工程师",
    },
    period: { en: "2024.08 – Present", zh: "2024.08 – 至今" },
    location: siteConfig.location,
  },
  {
    company: "KPMG",
    role: {
      en: "Senior Test Engineer / Team Leader",
      zh: "高级测试工程师 / Team Leader",
    },
    period: { en: "2021.09 – 2024.05", zh: "2021.09 – 2024.05" },
    location: siteConfig.location,
  },
];

export const aboutEducation: L10n = {
  en:
    "Sichuan Normal University · International Economics & Trade · B.A. (2012–2017) · Intermediate Systems Integration Project Manager (2022–2023)",
  zh:
    "四川师范大学 · 国际经济与贸易 · 本科（2012–2017） · 系统集成项目管理工程师（中级，2022–2023）",
};

export const projects: Project[] = [
  {
    id: "qa-toolkit-demo",
    tier: "hero",
    title: { en: "QA DevOps Toolkit", zh: "QA DevOps 工具台" },
    subtitle: { en: "Streamlit-based QA DevOps toolkit", zh: "基于 Streamlit 的 QA DevOps 平台" },
    summary: {
      en: "Streamlit hub for Jira, CircleCI, and Jenkins workflows.",
      zh: "集成 Jira、CircleCI、Jenkins 的 Streamlit 自动化平台。",
    },
    problem: {
      en:
        "Consolidates daily QA work across Jira, CircleCI, and Jenkins into one web UI, cutting context switching, with a testable modular Python core.",
      zh:
        "将 QA 日常分散在 Jira、CircleCI、Jenkins 之间的操作收敛到单一 Web 界面，降低上下文切换成本，并提供可测试的模块化 Python 逻辑层。",
    },
    stack: ["Python", "Streamlit", "Jira API", "CircleCI", "Jenkins"],
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
        "Maintainable Page Object + API hybrid structure covering ACA, MyQIMA, AIMS, with Xray and multi-environment config.",
      zh:
        "建立 Page Object + API 混合的可维护自动化结构，覆盖 ACA、MyQIMA、AIMS 等多系统场景，并支持 Xray 与多环境配置。",
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
    github: "https://github.com/Xudage6688/Experimental-tools-demo",
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
