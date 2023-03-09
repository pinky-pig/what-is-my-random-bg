import { defineCustomElement } from 'vue'
const RandomBg1 = defineCustomElement({
  // 这里是同平常一样的 Vue 组件选项
  props: {},
  emits: {},
  template: `<slot name="msg"></slot>`,
  // defineCustomElement 特有的：注入进 ShadowRoot 的 CSS
  styles: [`::slotted(div){color:lime}`]
})

export default RandomBg1 
