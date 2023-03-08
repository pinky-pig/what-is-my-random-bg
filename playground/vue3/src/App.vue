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
  // eslint-disable-next-line no-console
  console.log(e.detail, '重新渲染后的数据')
}
</script>

<template>
  <h1>Vite + Vue3</h1>

  <button @click="isRerenderFlag++">
    Redraw
  </button>

  <random-bg
    :initial-data="initialData"
    :rerender="`${isRerenderFlag}`"
    @rendered="printf"
  />
</template>
