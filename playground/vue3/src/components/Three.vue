<script setup lang="ts">
import '../../../../packages/v-custom-random-bg/src'

const rendered = (e:CustomEvent) => {
  console.log(e.detail[0]);
}
</script>

<template>
  <h1>Vite + Vue3 + 3</h1>
  <v-custom-random-bg @rendered="rendered" />
</template>
