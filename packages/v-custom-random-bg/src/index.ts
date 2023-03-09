import { defineCustomElement } from 'vue'
// 1.直接定义的就是 defineCustomElement
import RandomBg1 from './RandomBg'
// 2.将正常的 Vue 组件转成 defineCustomElement （需要以 *.ce.vue 结尾）
import RandomBg from './RandomBg.ce.vue'
const RandomBg2 = defineCustomElement(RandomBg) // 转换为自定义元素构造器

// 3.注册 Web Components
export function register() {
  customElements.get('random-bg1') || window.customElements.define('random-bg1', RandomBg1)
  customElements.get('random-bg2') || window.customElements.define('random-bg2', RandomBg2)
}

// 注册
register()

// 导出组件
// import RandomBg from './RandomBg.vue'
// export default RandomBg as typeof RandomBg
