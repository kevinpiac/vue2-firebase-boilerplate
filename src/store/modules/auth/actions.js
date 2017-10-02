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
  /**
   * Adds user to state and set state.authenticated value to true
   */
  login: ({ commit }, user) => {
    commit(types.LOGIN, user);
  },
  /**
   * Removes user from state and reset state.authenticated
   */
  logout: ({ commit }) => {
    firebase.logout().then(() => {
      commit(types.LOGOUT);
    });
  },
  /**
   * Replaces state.user by firebase.auth().currentUser
   */
  updateUser: ({ commit }) => {
    /**
     * This function is declared at @/plugins/firebase.js
     * It returns Firebase.auth().currentUser;
     */
    const user = firebase.currentUser();

    commit(types.UPDATE_USER, user);
  },
};
