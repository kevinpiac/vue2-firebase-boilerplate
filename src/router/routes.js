import store from '@/store';

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: { name: 'Login' },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/pages/Profile/Index'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login/Index'),
    meta: {
      guest: true,
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/pages/Register/Index'),
    meta: {
      guest: true,
    },
  },
  {
    path: '/logout',
    name: 'Logout',
    beforeEnter(to, from, next) {
      store.dispatch('auth/logout');
      next({ name: 'Login' });
    },
  },
  {
    path: '/*',
    redirect: { name: 'Home' },
  },
];

export default routes;
