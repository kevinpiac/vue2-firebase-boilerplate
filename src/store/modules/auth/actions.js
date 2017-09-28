/**
 * ========================
 * Actions for auth module
 * ========================
 *
 * https://vuex.vuejs.org/en/actions.html
 */

import * as types from './mutation-types';

export default {
  login: ({ commit }) => {
    commit(types.LOGIN);
  },
  logout: ({ commit }) => {
    commit(types.LOGOUT);
  },
};
