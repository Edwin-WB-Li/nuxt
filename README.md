# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

```typescript
husky是Git钩子管理工具，在中提到它通过.git/hooks机制拦截Git操作（如提交），将钩子脚本统一管理在.husky目录下，并利用core.hooksPath配置实现路径重定向。典型应用是在pre-commit阶段触发代码检查

lint-staged专注于暂存区文件处理，在中描述它只对git add后的文件运行检查（如ESLint），避免全量扫描。常与husky联动，在pre-commit钩子中执行，提升效率

@commitlint/config-conventional是提交规范配置，在中说明它基于AngJS规范定义type-enum等规则，要求提交信息符合feat/fix/docs等前缀格式，通常配合commitlint和husky的commit-msg钩子实现校验

husky管理钩子生命周期，lint-staged处理提交前代码质检，@commitlint/config-conventional控制提交信息规范性
```

服务端组件在​​服务器环境​​渲染为静态 HTML，​​不包含客户端 JavaScript​​，适合以下场景：

​​SEO 关键内容​​
如首页标题、商品描述、博客正文等需被搜索引擎抓取的内容。服务端渲染确保 HTML 完整输出，避免爬虫解析空页面。
​​静态或低交互内容​​
页脚、版权声明、营销横幅等无需响应用户操作的部分，可减少客户端资源加载。
​​敏感数据逻辑​​
涉及数据库查询、密钥验证或隐私计算（如用户权限校验），避免敏感代码泄露到客户端。
​​高计算成本操作​​
Markdown 解析、语法高亮、大型数据聚合等耗时任务，在服务端执行可避免阻塞浏览器。
​​性能优化需求​​
通过减少客户端 Hydration 负担，加速首屏加载（尤其低端设备

客户端组件仅在​​浏览器环境​​执行，适合依赖浏览器 API 或强交互的场景：

​​浏览器专属 API​​
如 localStorage、Geolocation、WebGL 或 IntersectionObserver 等。
​​用户交互组件​​
表单、动画、拖拽元素、实时图表等需动态响应的部分。
​​状态驱动 UI​​
依赖 Vue 响应式状态（如购物车实时更新）的组件。
​​第三方库集成​​
如地图 SDK（Google Maps）、视频播放器（Video.js）等仅支持浏览器的库。
​​异步数据加载​​
评论区、个性化推荐等非首屏关键内容，可用 `<ClientOnly>` 包裹延迟加载

| 场景               | 服务端组件注意事项                     | 客户端组件注意事项               |
|--------------------|----------------------------------------|----------------------------------|
| 生命周期钩子       | 避免使用 `onMounted`（仅在客户端执行） | 可使用全部 Vue 生命周期钩子      |
| 状态同步           | 使用 `useState` 共享服务端初始状态     | 通过 Props 接收服务端数据       |
| 组件命名           | 添加 `.server.vue` 后缀                | 添加 `.client.vue` 后缀          |
| 错误处理           | 使用 `<NuxtClientFallback>` 处理渲染错误 | 标准 Vue 错误捕获机制           |

总结：
首屏静态化​​：核心内容（如产品介绍）用服务端组件，提升加载速度。
​​交互动态化​​：按钮、表单等用客户端组件，确保流畅体验。
​​敏感操作服务端化​​：权限校验、支付逻辑通过 API 或服务端组件处理。
​​渐进增强​​：静态骨架（服务端） + 动态填充（客户端），如商品列表

NUXT_PUBLIC_ 前缀的变量会暴露给客户端

| 特性             | useHead                                      | useSeoMeta                                  |
|------------------|----------------------------------------------|--------------------------------------------|
| **功能范围**     | 完整控制 `<head>` 标签（meta、script、link、htmlAttrs 等） | 仅限 **SEO 元标签**（title、description、og:xxx、canonical 等） |
| **语法简洁性**   | 需手动配置 `meta: [ ... ]` 数组，灵活性高但稍显繁琐      | 扁平化对象语法，避免属性名错误，代码更简洁             |
| **动态支持**     | ✅ 支持响应式数据（`ref`、`computed`）              | ✅ 同样支持响应式数据                           |
| **适用场景**     | 需配置非 SEO 标签（如外部样式、脚本、HTML 属性）       | 专注 SEO 优化（标题、描述、社交分享标签）             |

两者可​​协同工作​​，分工明确：

​​useSeoMeta 处理核心 SEO 标签​​
设置标题、描述、Open Graph 等社交元数据。
​​useHead 补充其他 `<head>` 元素​​
如语言属性、外部资源、脚本等

| 场景                             | 推荐方案                 |
|----------------------------------|--------------------------|
| 仅需基础 SEO（标题、描述、og）   | ✅ useSeoMeta（简洁高效） |
| 需额外控制（样式、脚本、属性）    | ✅ useHead（功能全面）    |
| 复杂页面（SEO + 外部资源）       | ✅ 组合使用（分工明确）   |

nuxt-content

<ContentRenderer> 组件用于渲染通过 queryCollection() 查询获得的文档 ，此组件 仅支持Markdown 文件
