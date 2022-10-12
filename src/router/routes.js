export default [
  {
    path: '/login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/message',
    component: () => import('@/views/Message.vue'),
  },
]
