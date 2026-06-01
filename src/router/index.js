import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: { title: 'Home - DSG Website' },
    },
  ],
})

router.afterEach((to) => {
  document.title = to.meta.title || 'DSG Website'
})

export default router
