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
   [types.LOGIN](state) {
     state.authenticated = true;
   },
   /**
    * Logout
    */
   [types.LOGOUT](state) {
     state.authenticated = false;
   },
 };
