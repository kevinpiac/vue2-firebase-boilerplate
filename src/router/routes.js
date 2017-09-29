import store from '@/store';

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: { name: 'Login' },
  },
  {
    path: '/private',
    name: 'Private',
    component: () => import('@/pages/Private.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login.vue'),
    meta: {
      guest: true,
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/pages/Register.vue'),
    meta: {
      guest: true,
    },
  },
  {
    path: '/logout',
    name: 'Logout',
    beforeEnter(to, from, next) {
      store.dispatch('auth/logout');
      next({ name: 'Register' });
    },
  },
  {
    path: '/*',
    redirect: { name: 'Home' },
  },
];

export default routes;
