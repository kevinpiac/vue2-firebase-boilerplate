/**
 * ==========================
 * Mutations for auth module
 * ==========================
 *
 * https://vuex.vuejs.org/en/mutations.html
 */

/* eslint-disable no-param-reassign */

 import * as types from './mutation-types';

 export default {
   /**
    * Login
    */
   [types.LOGIN](state, user) {
     state.authenticated = true;
     state.user = user;
   },
   /**
    * Logout
    */
   [types.LOGOUT](state) {
     state.authenticated = false;
     state.user = null;
   },
 };
