<script setup lang="ts">
import { ref } from 'vue'
import '../../../../packages/random-bg/src'
// import 'packages'

// 随机色色板
const palettes = [
  '031926-468189-77aca2-9dbebb-f4e9cd'.split('-').map(a => `#${a}`),
  'f4faff-dee7e7-b7adcf-4f646f-535657'.split('-').map(a => `#${a}`),
  'acadbc-9b9ece-6665dd-473bf0-000500'.split('-').map(a => `#${a}`),
  '88498f-779fa1-e0cba8-ff6542-564154'.split('-').map(a => `#${a}`),
  '493b2a-593f62-7b6d8d-8499b1-a5c4d4'.split('-').map(a => `#${a}`),
  'c41e3d-7d1128-ff2c55-3c0919-e2294f'.split('-').map(a => `#${a}`),
  '16bac5-5fbff9-efe9f4-171d1c-5863f8'.split('-').map(a => `#${a}`),
  'd9e5d6-00a7e1-eddea4-f7a072-ff9b42'.split('-').map(a => `#${a}`),
]

// 初始化颜色
const initialData = [
    { path: 'polygon(28% 42%,16% 71%,21% 25%,31% 26%,9% 13%,9% 40%,23% 91%,6% 90%,4% 6%,12% 67%)', color: '#dab6c4' },
    { path: 'polygon(65% 17%,50% 35%,47% 79%,62% 63%,53% 91%,35% 41%)', color: '#7b886f' },
    { path: 'polygon(67% 36%,88% 79%,75% 37%,91% 23%,81% 29%,79% 40%,78% 16%,96% 47%,74% 63%)', color: '#b4dc7f' },
  ]

const isRerenderFlag = ref(0)
const printf = (e: any) => {
  // eslint-disable-next-line no-console
  console.log(e.detail, '重新渲染后的数据')
}
</script>

<template>
  <h1>Vite + Vue3 + 1</h1>

  <button @click="isRerenderFlag++">
    Redraw
  </button>

  <random-bg
    :palettes="palettes"
    :initial="initialData"
    :rerender="`${isRerenderFlag}`"
    @rendered="printf"
  />
</template>
