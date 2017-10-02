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
   /**
    * Update user data
    */
   [types.UPDATE_USER](state, user) {
     /**
      * Set user to null allows to be sure that changes are detected by the scope
      */
     state.user = null;

     state.user = user;
   },
 };
