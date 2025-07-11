import NProgress from "nprogress";
import "nprogress/nprogress.css"; // 引入基础样式

// 配置进度条参数
NProgress.configure({
  showSpinner: false, // 隐藏加载动画
  speed: 300, // 动画速度（ms）
  minimum: 0.1, // 初始进度百分比
});

export default defineNuxtPlugin((nuxtApp) => {
  // 路由跳转开始时启动进度条
  nuxtApp.hook("page:start", () => {
    NProgress.start();
  });

  // 路由跳转结束时完成进度条
  nuxtApp.hook("page:finish", () => {
    NProgress.done();
  });
});
