# Next.js + Fumadocs + Cloudflare Worker

一个基于 [Next.js](https://nextjs.org/) 和 [Fumadocs](https://www.fumadocs.dev/) 的现代化博客和文档网站，使用 OpenNext 部署在 Cloudflare Workers 上。

## 🌐 在线预览

[https://nextjs-fumadocs-app.qingbao-ho.workers.dev](https://nextjs-fumadocs-app.qingbao-ho.workers.dev)

## ✨ 特性

- 📝 **博客系统** - 支持 MDX 格式的博客文章，包含封面图、作者信息、发布日期
- 📄 **法律文档页面** - Privacy Policy 和 Terms of Service 页面
- 🎨 **现代化 UI** - 使用 Tailwind CSS 和 Fumadocs UI 组件
- 🌗 **深色模式** - 完整的深色模式支持
- 📱 **响应式设计** - 完美适配各种屏幕尺寸
- ⚡ **边缘计算** - 部署在 Cloudflare Workers，全球低延迟访问
- 🔍 **SEO 友好** - 服务端渲染，优化搜索引擎抓取

## 🛠️ 技术栈

- **框架**: [Next.js 15](https://nextjs.org/)
- **部署**: [OpenNext](https://opennext.js.org/) on Cloudflare Workers
- **MDX 渲染**: [Fumadocs](https://www.fumadocs.dev/)
- **样式**: [Tailwind CSS](https://tailwindcss.com/)
- **UI 组件**: [shadcn/ui](https://ui.shadcn.com/)
- **图标**: [Lucide React](https://lucide.dev/)
- **字体**: Geist Sans & Geist Mono

## 📂 项目结构

```
.
├── content/                    # MDX 内容目录
│   ├── blog/                   # 博客文章
│   │   └── hello.mdx
│   └── legal/                  # 法律文档
│       ├── privacy.mdx
│       └── terms.mdx
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (legal)/            # 法律页面路由组
│   │   │   ├── privacy/
│   │   │   ├── terms/
│   │   │   └── layout.tsx
│   │   ├── blog/               # 博客路由
│   │   │   ├── [slug]/
│   │   │   ├── page.tsx
│   │   │   └── layout.tsx
│   │   ├── layout.tsx          # 根布局
│   │   └── page.tsx            # 首页
│   ├── components/             # React 组件
│   │   ├── ui/                 # shadcn/ui 组件
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── BlogShareButton.tsx
│   └── lib/
│       └── source.ts           # Fumadocs 数据源配置
├── source.config.ts            # MDX 集合配置
└── package.json
```

## 🤔 为什么使用 Fumadocs 而不是 Next.js 的 MDX 方案？

### Next.js MDX 方案的局限性

Next.js 原生的 `@next/mdx` 方案在 Cloudflare Workers 环境下存在一些限制：

1. **静态页面可行**：对于 `/privacy` 和 `/terms` 这种单个 MDX 文件对应单个路由的场景，可以直接导入 MDX 文件作为组件使用，能够正常工作。

2. **动态路由问题**：但对于博客这种需要动态路由（如 `/blog/[slug]`）的场景，即使使用 `generateStaticParams` 在构建时生成静态页面，在 Cloudflare Workers 环境下依然会出现问题。

3. **Workers 环境限制**：这可能与 Cloudflare Workers 的运行机制有关：
   - Workers 不支持 Node.js 文件系统 API
   - 构建产物的文件结构在 Workers 环境下的访问方式不同
   - OpenNext 对 Next.js 构建产物的转换可能对动态 MDX 导入支持不完善

### Fumadocs 的优势

1. **专为文档和博客设计**：Fumadocs 提供了完整的文档/博客解决方案
2. **构建时编译**：在构建阶段将 MDX 文件编译为 JSON，避免运行时文件系统访问
3. **集合管理**：通过 `defineCollections` 统一管理多个 MDX 内容集合
4. **完善的功能**：内置 TOC、搜索、代码高亮等功能
5. **Worker 友好**：完全兼容 Cloudflare Workers 环境

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建

```bash
pnpm run build
```

### 部署到 Cloudflare Workers

使用 OpenNext 构建并部署到 Cloudflare Workers：

```bash
# 部署到 Cloudflare
pnpm run deploy
```

## 📝 内容管理

### 添加博客文章

在 `content/blog/` 目录下创建新的 `.mdx` 文件：

```mdx
---
title: 文章标题
description: 文章描述
image: /images/blog/cover.jpg
author: 作者名
avatar: /images/avatar/author.jpg
date: 2026-02-12
---

## 文章内容

这里是文章正文...
```

### 添加法律文档

在 `content/legal/` 目录下创建或编辑 `.mdx` 文件：

```mdx
---
title: 文档标题
description: 文档描述
date: 2026-02-12
---

## 文档内容

这里是文档正文...
```

## 🎨 自定义

### 修改品牌信息

在以下文件中搜索 "Your Brand" 并替换为你的品牌名称：
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/app/layout.tsx`

### 修改主题

项目使用 Fumadocs 的主题系统，可以通过 Tailwind CSS 配置自定义颜色。

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📮 联系方式

如有问题或建议，欢迎通过 Issue 或 Email 联系。
