import { defineCustomElement } from 'vue'
// 1.直接定义的就是 defineCustomElement
// 2.将正常的 Vue 组件转成 defineCustomElement （需要以 *.ce.vue 结尾）
import RandomBgCe from './RandomBg.ce.vue'
const RandomBg = defineCustomElement(RandomBgCe) // 转换为自定义元素构造器

// 3.注册 Web Components
export function register() {
  customElements.get('v-custom-random-bg') || window.customElements.define('v-custom-random-bg', RandomBg)
}

// 注册
register()

// 导出组件
// import RandomBg from './RandomBg.vue'
// export default RandomBg as typeof RandomBg
