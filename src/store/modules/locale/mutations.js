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
    */
   [types.SWITCH](state, locale) {
     state.locale = locale;
   },
 };
