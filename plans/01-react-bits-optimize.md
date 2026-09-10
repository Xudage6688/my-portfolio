# Plan: react-bits 组件优化 xudage-portfolio

> 分支: `feat/react-bits-optimize`  
> 参考源: `C:/Users/Daisy Liu/.tmp2A9ldZ/react-bits/src/ts-tailwind/`  
> 依赖状态: 项目已有 `framer-motion ^13.2.0`，无需新增

---

## Phase 0: 文档发现 (已执行)

### 可用组件清单 (TS-Tailwind 版本，无额外依赖)

| 组件 | 来源文件 | 用途 | 依赖 |
|------|----------|------|------|
| GlareHover | `Animations/GlareHover/GlareHover.tsx` | 卡片悬停高光 | 无 |
| StarBorder | `Animations/StarBorder/StarBorder.tsx` | 边框星芒动画 | 需加 keyframes 到 tailwind.config |
| ShinyText | `TextAnimations/ShinyText/ShinyText.tsx` | 金属光泽文字 | framer-motion |
| DecryptedText | `TextAnimations/DecryptedText/DecryptedText.tsx` | 解密乱码文字动画 | framer-motion (motion/react) |
| DotField | `Backgrounds/DotField/DotField.tsx` + `.css` | 点阵鼠标交互背景 | 无 |
| FadeContent | `Animations/FadeContent/FadeContent.tsx` | 滚动淡入 | **需要 gsap** |
| GradientText | `TextAnimations/GradientText/` | 渐变文字 | 无 |

### 决策

- **排除**: FadeContent、AnimatedContent（依赖 gsap，新增重依赖）
- **纳入**: GlareHover（卡片）、ShinyText（标题）、DecryptedText（副标题）、StarBorder（按钮）
- **备选**: DotField 替换 Hero Aurora 背景（如用户确认）

---

## Phase 1: 新增配置文件 (tailwind.config.ts / CSS keyframes)

**目标**: 添加 StarBorder 所需的 CSS keyframes

**复制来源**: `C:/Users/Daisy Liu/.tmp2A9ldZ/react-bits/src/ts-tailwind/Animations/StarBorder/StarBorder.tsx` 第 64-84 行的注释代码

**实现**: 在 `src/app/globals.css` 末尾添加：

```css
@keyframes star-movement-top {
  0% { transform: translate(0%, 0%); opacity: 1; }
  100% { transform: translate(100%, 0%); opacity: 0; }
}
@keyframes star-movement-bottom {
  0% { transform: translate(0%, 0%); opacity: 1; }
  100% { transform: translate(-100%, 0%); opacity: 0; }
}
.animate-star-movement-top { animation: star-movement-top linear infinite alternate; }
.animate-star-movement-bottom { animation: star-movement-bottom linear infinite alternate; }
```

**验证**: `npm run build` 无报错

---

## Phase 2: 创建新组件

### 2.1 `src/components/rb/StarBorderButton.tsx`
- 复制自 `src/ts-tailwind/Animations/StarBorder/StarBorder.tsx`
- 修改: 去除默认 button 样式，支持任意子元素
- 用途: CTA 按钮边框动画

### 2.2 `src/components/rb/DecryptedText.tsx`
- 复制自 `src/ts-tailwind/TextAnimations/DecryptedText/DecryptedText.tsx`
- 完全按原样复制（仅调整 import 路径如果路径差异）
- 用途: Hero 副标题 hover 解密效果

### 2.3 `src/components/rb/GlareCard.tsx`
- 复制自 `src/ts-tailwind/Animations/GlareHover/GlareHover.tsx`
- 调整默认参数适配项目颜色
- 用途: ProjectCard 悬停高光层

---

## Phase 3: 集成到现有组件

### 3.1 HeroSection — ShinyText + DecryptedText
**文件**: `src/components/HeroSection.tsx`

- 主标题 (`BlurText`) 保持不变
- 副标题 (`tagline`) 改为 `DecryptedText`，`animateOn="hover"`
- 或添加一个新的 `ShinyText` 行作为 role 标签

### 3.2 ProjectCard — GlareCard 高光效果
**文件**: `src/components/ProjectCard.tsx`

- 在 `<article>` 内图片层上叠加 GlareHover 效果
- 颜色适配项目主题: `glareColor="#22d3ee"`, `glareOpacity=0.15`
- 保持现有 hover scale 动画，叠加 GlareHover 高光

### 3.3 CTA 按钮 — StarBorder
**文件**: `src/components/HeroSection.tsx`

- "View Projects" 按钮用 StarBorder 替代普通 button
- 参数: `color="#22d3ee"`, `speed="4s"`

### 3.4 SiteHeader — GlowCursor (可选)
**文件**: `src/components/SiteHeader.tsx` 或 `app/layout.tsx`

- 全屏 GlowCursor 可能过于炫目，先在 header 区域测试
- 如不合适则跳过

---

## Phase 4: 验证

### 4.1 Build 验证
```bash
npm run build
```
要求: 0 errors, 0 warnings

### 4.2 功能验证清单
- [ ] HeroSection: 副标题 hover 显示解密动画
- [ ] Hero CTA 按钮: 边框有星芒扫过效果
- [ ] ProjectCard: hover 时图片层有光泽扫过
- [ ] 所有页面导航正常
- [ ] i18n 中英文切换正常
- [ ] 移动端布局正常

### 4.3 性能检查
- 无新增重依赖（无 gsap、无新 WebGL 库）
- framer-motion 已存在，DecryptedText 使用 `motion/react`（同库）

---

## Anti-Pattern Guards

- **不引入 gsap**（项目无此依赖，避免增量）
- **不改现有组件 API**（保持向后兼容）
- **不修改 deploy/nginx.conf / docker-compose.yml**
- **StarBorder 不使用 motion 动画**（用纯 CSS keyframes，与项目 Tailwind 风格一致）
- **GlareHover 用 styled-component 方式（CSS-in-JS），不需要 Tailwind 配置**

---

## Source Reference Paths

| 组件 | react-bits 源路径 |
|------|------------------|
| StarBorder | `src/ts-tailwind/Animations/StarBorder/StarBorder.tsx` |
| GlareHover | `src/ts-tailwind/Animations/GlareHover/GlareHover.tsx` |
| ShinyText | `src/ts-tailwind/TextAnimations/ShinyText/ShinyText.tsx` |
| DecryptedText | `src/ts-tailwind/TextAnimations/DecryptedText/DecryptedText.tsx` |
| Noise bg | `src/ts-default/Backgrounds/Noise/` (需要查找正确路径) |
