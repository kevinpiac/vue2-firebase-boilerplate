import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
import guard from './guard';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes,
});

/**
 * Apply a guard method before each route to check if it requires auth
 */
router.beforeEach((to, from, next) => {
  if (to.meta.auth === true) {
    guard.guardRoute(to, from, next);
  } else {
    next();
  }
});

export default router;
