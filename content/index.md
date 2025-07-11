# My First Page

Here is some content.

# Nuxt

```typescript

客户端组件
  如果仅用于客户端渲染，可以在组件文件名后添加 .client 后缀
  .client 组件仅在挂载后渲染。要使用 onMounted() 访问渲染的模板，请在 onMounted() 钩子的回调中添加 await nextTick()
  <ClientOnly> 组件用于专门在客户端渲染组件。

独立服务器组件，
  export default defineNuxtConfig({
    experimental: {
      componentIslands: true
    }
  })
  
```