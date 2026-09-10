export type DictDemoEntry = {
  word: string;
  dictName: string;
  phonetic?: string;
  /** 静态示例 HTML，仅用于作品集预览 */
  html: string;
};

/** 内置示例词条（无 MDX/MDD，体查词 UI 与多词典卡片布局） */
export const dictDemoEntries: DictDemoEntry[] = [
  {
    word: "hello",
    dictName: "Demo · EN–ZH",
    phonetic: "/həˈləʊ/",
    html: `<p><strong>int.</strong> 喂；你好</p><p class="muted">Used as a greeting or to attract attention.</p>`,
  },
  {
    word: "hello",
    dictName: "Demo · Learner",
    html: `<p><strong>exclamation</strong></p><ul><li>Hello! Nice to meet you.</li><li>Say hello to your mom for me.</li></ul>`,
  },
  {
    word: "quality",
    dictName: "Demo · QA Context",
    html: `<p><strong>n.</strong> 质量；品质</p><p class="muted">Degree of excellence; fitness for purpose — central to test strategy and release gates.</p>`,
  },
  {
    word: "automation",
    dictName: "Demo · QA Context",
    html: `<p><strong>n.</strong> 自动化</p><p class="muted">Use of frameworks (e.g. Cypress, Playwright) and CI to make verification repeatable.</p>`,
  },
  {
    word: "mdict",
    dictName: "Demo · Project",
    html: `<p><strong>MyDict (mdictfe)</strong></p><p class="muted">Next.js + koffi FFI → mdictcc engine; LRU 句柄、路径型 <code>/api/resource</code>、词条 HTML 消毒与资源改写。</p>`,
  },
];

export const dictDemoQuickWords = ["hello", "quality", "automation", "mdict"];

export function lookupDemo(word: string): DictDemoEntry[] {
  const q = word.trim().toLowerCase();
  if (!q) return [];
  return dictDemoEntries.filter((e) => e.word.toLowerCase() === q);
}

export function suggestDemo(prefix: string): string[] {
  const p = prefix.trim().toLowerCase();
  if (!p) return [];
  return dictDemoQuickWords.filter((w) => w.startsWith(p) && w !== p);
}
