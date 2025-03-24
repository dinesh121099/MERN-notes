import ProdCat from '@/components/prodCat.vue'
import ProdData from '@/components/prodData.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/category',
      element: ProdCat
    },
    {
      path: '/products',
      element: ProdData
    }
  ],
})

export default router
