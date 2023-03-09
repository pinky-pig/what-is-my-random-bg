<script setup lang="ts">
import { ref } from 'vue';
import '../../../../packages/v-custom-button/src'

const customButtonVueCount = ref(0)
const handleClick = (e:CustomEvent) => {
  customButtonVueCount.value = e.detail[0]
}
</script>

<template>
  <h1>Vite + Vue3 + 2</h1>
  <custom-button-vue :color="'red'" @handleClick="handleClick" >
    <div slot="msg">
      <p>custom-button-vue slot</p>
    </div>
  </custom-button-vue> 

  定义的web components 组件传出来的值： {{ customButtonVueCount }}

  <custom-button-ts>
    <div slot="msg">
      <p>custom-button-ts slot</p>
    </div>
  </custom-button-ts>
</template>
