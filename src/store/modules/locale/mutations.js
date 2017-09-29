/**
 * ==========================
 * Mutations for locale module
 * ==========================
 *
 * https://vuex.vuejs.org/en/mutations.html
 */

/* eslint-disable no-param-reassign */

 import * as types from './mutation-types';

 export default {
   /**
    * Switch
    *
    * Used to change the locale value.
    */
   [types.SWITCH](state, locale) {
     state.locale = locale;
   },
 };
