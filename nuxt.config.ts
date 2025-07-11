import { defineNuxtConfig } from "nuxt/config";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-09",
  srcDir: "src",
  typescript: {
    typeCheck: true,
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@clerk/nuxt",
    "@nuxt/image",
    // "@nuxt/content", // Nuxt Content 模块，用于处理内容
    // "@nuxtjs/color-mode",
    // "@nuxtjs/tailwindcss",
  ],
  plugins: ["@/plugins/nprogress.client.ts"],
  clerk: {
    skipServerMiddleware: true,
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["clsx", "tailwind-merge"], // 避免 Vite 预构建问题
    },
  },
  ui: {
    fonts: false,
  },
  imports: {
    // 禁用部分自动导入
    scan: false,
    // 自动导入 useI18n
    // 这里的 presets 配置可以根据需要添加或修改
    presets: [
      {
        from: "vue-i18n",
        imports: ["useI18n"],
      },
    ],
  },
  // 基于组件名称而非路径进行自动导入
  components: [
    {
      path: "@/components",
      pathPrefix: false,
      extensions: [".vue", ".tsx"],
    },
  ],
  // tailwindcss: {
  //   configPath: "./tailwind.config.ts", // 指定 tailwind 配置文件
  // },
  // postcss: {
  //   plugins: {
  //     "@tailwindcss/postcss": {},
  //     "postcss-color-gray": {}, // 启用 postcss-color-gray 插件，支持灰色函数
  //     "postcss-import": {},
  //     "postcss-nesting": {},
  //     autoprefixer: {},
  //     "postcss-preset-env": { stage: 1 },
  //   },
  // },
  // tailwindcss: { exposeConfig: true }, // 允许在运行时获取 Tailwind 配置
});
