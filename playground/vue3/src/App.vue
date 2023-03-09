<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <RouterLink to="/">Home</RouterLink>

  <i style="margin: 0 .5em;">/</i>
  <RouterLink to="/Two">Components</RouterLink>
  <i style="margin: 0 .5em;">/</i>
  <RouterLink to="/three">Jsx</RouterLink>
  <RouterView />
</template>

