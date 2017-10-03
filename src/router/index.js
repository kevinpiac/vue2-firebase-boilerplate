import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
import guard from './guard';

Vue.use(Router);

const router = new Router({
  /**
   * Remove the default and ugly hash mode ('#' in url)
   *
   * https://router.vuejs.org/en/essentials/history-mode.html
   */
  mode: 'history',

  /**
   * Inject our routes object
   */
  routes,

  /**
   * Scroll top left on route change
   *
   * https://router.vuejs.org/en/advanced/scroll-behavior.html
   */
  scrollBehavior: () => ({ x: 0, y: 0 }),

});

/**
 * Apply a guard method before each route to check if it requires auth
 */
router.beforeEach((to, from, next) => {
  /**
   * If the route meta 'auth' key is set to true we consider
   * this route as a protected one
   */
  if (to.meta.auth === true) {
    guard.guardRoute(to, from, next);
  } else {
    next();
  }
});

export default router;
