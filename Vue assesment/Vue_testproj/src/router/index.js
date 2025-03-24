import Lifecycle from '@/Lifecycle.vue'
import ParentComp from '@/ParentComp.vue'
import ReactiveStateManagement from '@/ReactiveStateManagement.vue'
import UserComponent from '@/UserComponent.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/parent",
      component: ParentComp
    },
    {
      path: "/lifecycle",
      component: Lifecycle
    },
    {
      path: "/reactive",
      component: ReactiveStateManagement
    },
    {
      path: "/user/:id",
      name: 'User',
      component: UserComponent,
      props: true,
    },
  ],
})

export default router
