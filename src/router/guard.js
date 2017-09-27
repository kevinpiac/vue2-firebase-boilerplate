export default {
  guardRoute(to, from, next) {
    const isAuthenticated = true;
    if (isAuthenticated === true) {
      next();
    } else {
      next({ name: 'Login' });
    }
  },
};
