
import { defineCustomElement } from 'vue'
// 1.直接定义的就是 defineCustomElement
import ButtonTs from './Button'

// 2.将正常的 Vue 组件转成 defineCustomElement （需要以 *.ce.vue 结尾）
import ButtonCe from './Button.ce.vue'
const ButtonVue = defineCustomElement(ButtonCe) // 转换为自定义元素构造器

// 3.注册 Web Components
export function register() {
  customElements.get('custom-button-ts') || window.customElements.define('custom-button-ts', ButtonTs)
  customElements.get('custom-button-vue') || window.customElements.define('custom-button-vue', ButtonVue)
}

// 注册
register()

