export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/layout/layout.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/404.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'any',
    redirect: '/404'
  }
]
