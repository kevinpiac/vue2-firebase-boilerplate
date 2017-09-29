/**
 * ========================
 * Actions for auth module
 * ========================
 *
 * https://vuex.vuejs.org/en/actions.html
 */

import firebase from '@/plugins/firebase';
import * as types from './mutation-types';

export default {
  login: ({ commit }, user) => {
    commit(types.LOGIN, user);
  },
  logout: ({ commit }) => {
    firebase.logout().then(() => {
      commit(types.LOGOUT);
    });
  },
};
