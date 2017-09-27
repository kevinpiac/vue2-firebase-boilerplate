// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from '@/App';

/**
 * ==========
 * PLUGINS
 * ==========
 *
 * import plugins and bootstrap the application
 */

/* eslint-disable no-unused-vars */
import axios from '@/plugins/axios';
import router from '@/router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
