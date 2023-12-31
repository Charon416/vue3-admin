// 对外暴露配置路由（常量路由）
export const constantRoute = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login' // 命名路由
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue'),
    name: 'home' //
  },
  {
    path: '/',
    component: () => import('@/views/layout/index.vue'),
    name: 'layout' //
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404'
  },
  {
    path: '/:pathMath(.*)*',
    redirect: '/404',
    name: 'any'
  }
]
