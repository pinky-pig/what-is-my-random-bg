<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <RouterLink to="/">原生 JS 开发 RandomBg</RouterLink>

  <i style="margin: 0 .5em;">/</i>

  <RouterLink to="/Two">Vue 开发 Demo</RouterLink>

  <i style="margin: 0 .5em;">/</i>

  <RouterLink to="/three">Vue 开发 RandomBg</RouterLink>

  <RouterView />
</template>

