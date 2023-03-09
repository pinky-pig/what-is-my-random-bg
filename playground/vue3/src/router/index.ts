import { createRouter, createWebHistory } from 'vue-router'
import One from '../components/One.vue'
import Two from '../components/Two.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'One',
      component: One
    },
    {
      path: '/Two',
      name: 'Two',
      component: Two
    },
    {
      path: '/Three',
      name: 'Three',
      component: () => import('../components/Three.vue')
    }
  ]
})

export default router
