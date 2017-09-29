import firebase from '@/plugins/firebase';

export default {
  /**
   * Applied as a middleware before a root is executed.
   * @method guardRoute
   * @param  {Object}   to     the next route object
   * @param  {Object}   from   the current route object
   * @param  {Function} next   callback used by vue-router
   * @return {void}
   */
  guardRoute(to, from, next) {
    firebase.getUserStatus().then(() => {
      next();
    }).catch(() => {
      next({ name: 'Login' });
    });
  },
};
