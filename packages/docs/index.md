# Web Components

- 原生
- Vue3 - *.ce.vue - defineCustomElement() 
- Vue3 - ts - defineCustomElement() 

## Vue3 

> https://vuejs.org/guide/extras/web-components.html#building-custom-elements-with-vue

### *.ce.vue 和 ts

1. 主要有两种写法，这里在尝试的过程中，先尝试使用的是 `*.ce.vue` 方法，这种方法也是跟 Vue 组件最相似，使用也是最简单的。

- 这里开发的时候正常开发组件，然后命名为`*.ce.vue`。
- 导出的时候并注册。
- 使用的时候，需要配置 `vite.config.ts` ，如下，具体可见[官网](https://vuejs.org/guide/extras/web-components.html#building-custom-elements-with-vue)

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // 将所有带短横线的标签名都视为自定义元素
          isCustomElement: (tag) => tag.includes('-')
        }
      }
    })
  ],
})

```
2. 如果直接在 ts 文件中定义，在使用的时候还需要设置 Vue 为 `vue.esm-bundler` 

```ts
export default defineConfig({
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  }
})
```

3. 具体开发的异同点，详情见 `/packages/v-custom-button/src`。 使用方法详情参见 `/playground/vue3`
