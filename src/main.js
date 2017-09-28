// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from '@/App';

/**
 * ==========
 * Plugins
 * ==========
 *
 * Import plugins to bootstrap the application
 */

/* eslint-disable no-unused-vars */
import plugins from '@/plugins';

/**
 * ============
 * Router
 * ============
 *
 * Import router and bootstrap the application
 */

import router from '@/router';

/**
 * ========
 * Store
 * ========
 *
 * Import the vuex store
 */
import store from '@/store';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  /**
   * Bind Vue instance to Html element
   * @type {String}
   */
  el: '#app',

  /**
   * Bind router
   */
  router,

  /**
   * Bind store
   */
  store,

  template: '<App/>',
  components: { App },
});
