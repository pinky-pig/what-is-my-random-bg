<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)

const props = defineProps(['color'])
const emit = defineEmits(['handleClick'])

const handleClick = () => {
  count.value++
  emit('handleClick', count.value)
}
</script>

<template>
  <slot name="msg"></slot>
  <button @click="handleClick"> count： {{ count }}</button>
  <p> propsValue - color: {{ props.color }}</p>
</template>

<style scoped>
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
</style>
