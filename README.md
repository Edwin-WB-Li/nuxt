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
