import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  // pages: true,
  modules: ["@nuxtjs/tailwindcss", "@clerk/nuxt", "@nuxtjs/color-mode"], // 加载 Tailwind CSS、Clerk 和 Color Mode 模块
  // srcDir: ".",
  postcss: {
    plugins: {
      "postcss-color-gray": {}, // 启用 postcss-color-gray 插件，支持灰色函数
      "postcss-import": {},
      "postcss-nesting": {},
      autoprefixer: {},
      "postcss-preset-env": { stage: 1 },
    },
  },
  // tailwindcss: { exposeConfig: true }, // 允许在运行时获取 Tailwind 配置
  tailwindcss: {
     configPath: './tailwind.config.ts', // 指定 tailwind 配置文件
   }
});
