import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './router';

const pagesRouter = [
  {
    path: '/',
    name: '主页',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/components',
    name: '组件页面',
    redirect: '/components/Icon',
    component: () => import('@/views/home.vue'),
    children: [...routes]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: pagesRouter,
  scrollBehavior(to: any, from: any) {
    if (to.path !== from.path) {
      return { top: 0 };
    }
  }
});
export default router;
