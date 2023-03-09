

<div align="center">
	<h1 style="margin:10px">random-bg</h1>
	<h6 align="center">Component based in Vue3</h6>
</div>

Github Pages 演示地址： [https://pinky-pig.github.io/what-is-my-random-bg/](https://pinky-pig.github.io/what-is-my-random-bg/)  
Github 代码地址： [https://github.com/pinky-pig/what-is-my-random-bg](https://github.com/pinky-pig/what-is-my-random-bg)

# 🌸 Get Started 

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/imagesrandom-bg.gif"  height="300">
</p>


## 🎉 Introduce

RandomBg 随机多边形加上 `blur()` 创造的背景色。  
基于 [web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) 开发，在 Html 、 Vue 2 | 3 、 React 等框架中均可优雅使用 。  
可传入初始背景数组，也可自行重新渲染。

## 🏄‍♂️ Feature

- 可随机生成背景
- 可传入配置 初始渲染背景 initial-data 
- 生成后的函数方法回调


## 👊 Todo

- [ ] 可配置色库

```js

```
## 🍄 Usage Steps

```bash
npm i random-bg
```

### 🍔 在 Vue2 中使用

```vue
<script>
import '../../../packages/random-bg/src'
</script>

<template>
  <random-bg dblable />
</template>
```


### 🍟 在 Vue3 中使用

```vue
<script setup lang="ts">
import { ref } from 'vue'
import '../../../packages/random-bg/src'

// 初始化颜色
const initialData = JSON.stringify(
  [
    { path: 'polygon(28% 42%,16% 71%,21% 25%,31% 26%,9% 13%,9% 40%,23% 91%,6% 90%,4% 6%,12% 67%)', color: '#dab6c4' },
    { path: 'polygon(65% 17%,50% 35%,47% 79%,62% 63%,53% 91%,35% 41%)', color: '#7b886f' },
    { path: 'polygon(67% 36%,88% 79%,75% 37%,91% 23%,81% 29%,79% 40%,78% 16%,96% 47%,74% 63%)', color: '#b4dc7f' },
  ],
)
const isRerenderFlag = ref(0)
const printf = (e: any) => {

  console.log(e.detail, '重新渲染后的数据')
}
</script>

<template>
  <button @click="isRerenderFlag++">
    Redraw
  </button>

  <random-bg
    :initial-data="initialData"
    :rerender="`${isRerenderFlag}`"
    @rendered="printf"
  />
</template>
```

### 🌭 在 Vanilla.js 中使用

```ts
import '../../../packages/random-bg/src'

const initialData = JSON.stringify(
  [
    { path: 'polygon(28% 42%,16% 71%,21% 25%,31% 26%,9% 13%,9% 40%,23% 91%,6% 90%,4% 6%,12% 67%)', color: '#dab6c4' },
    { path: 'polygon(65% 17%,50% 35%,47% 79%,62% 63%,53% 91%,35% 41%)', color: '#7b886f' },
    { path: 'polygon(67% 36%,88% 79%,75% 37%,91% 23%,81% 29%,79% 40%,78% 16%,96% 47%,74% 63%)', color: '#b4dc7f' },
  ],
)

let isRerenderFlag = 0
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <button id="Redraw">
      Redraw
    </button>

    <random-bg 
      rerender='${isRerenderFlag}'
      initial-data='${initialData}'
     />
  </div>
`

const redrawBtn = document.getElementById('Redraw') as HTMLElement
redrawBtn.onclick = () => {
  document.getElementsByTagName('random-bg')[0].setAttribute('rerender', `${isRerenderFlag++}`)
}
```

### 🌭 在 React.js 中使用

```js
import { useState } from 'react'
import './App.css'
import '../../../packages/random-bg/src'

function App() {
  const [count, setCount] = useState(0)

  const initialData = JSON.stringify(
    [
      { path: 'polygon(28% 42%,16% 71%,21% 25%,31% 26%,9% 13%,9% 40%,23% 91%,6% 90%,4% 6%,12% 67%)', color: '#dab6c4' },
      { path: 'polygon(65% 17%,50% 35%,47% 79%,62% 63%,53% 91%,35% 41%)', color: '#7b886f' },
      { path: 'polygon(67% 36%,88% 79%,75% 37%,91% 23%,81% 29%,79% 40%,78% 16%,96% 47%,74% 63%)', color: '#b4dc7f' },
    ],
  )

  return (
    <div className="App">
      <div>

      <random-bg
        initial-data={initialData}
        rerender={count}
      />
      </div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          Redraw
        </button>
      </div>

    </div>
  )
}

export default App

```


## ⚡ Configurations

这里展示一些组件的配置，包括设置 拖拽、缩放、吸附功能是否开启，以及一些事件方法。

```vue
<template>
  <random-bg
    :initial-data="initialData"
    :rerender="`${isRerenderFlag}`"
    @rendered="printf"
  />
</template>
```

- initial-data 初始化的背景色，如果不传入，那么就是随机生成
- rerender 监听值，值变化就重新渲染
- @rendered 重新渲染后生成的数组，可传入给 `initial-data`
