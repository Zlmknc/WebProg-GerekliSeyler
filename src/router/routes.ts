import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Todo.vue') },
      { path: '/help', component: () => import('src/pages/Help.vue') },
      { path: '/sepet', component: () => import('src/pages/TB1-SPT.vue') },
      { path: '/girişyap', component: () => import('src/pages/UyeGirisi.vue') },
      { path: '/AnaSayfa', component: () => import('src/pages/AnaSayfa.vue') },
      {
        path: '/ÇRÜ',
        component: () => import('src/pages/ÇizgiRomanÜrünleri.vue'),
      },
      {
        path: '/YeniUyelik',
        component: () => import('src/pages/HemenUyeOl.vue'),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
