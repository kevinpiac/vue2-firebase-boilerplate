import auth from '@/services/Auth';

export default {
  guardRoute(to, from, next) {
    const isAuthenticated = auth.isAuthenticated();
    if (isAuthenticated === true) {
      next();
    } else {
      next({ name: 'Login' });
    }
  },
};
