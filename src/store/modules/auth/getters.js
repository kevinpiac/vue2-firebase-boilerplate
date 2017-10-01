/**
 * ========================
 * Getters for auth module
 * ========================
 *
 * https://vuex.vuejs.org/en/getters.html
 */

export default {
  isAuthenticated: state => state.authenticated,
  currentUser: state => state.user,
  currentUserEmail: state => state.user.email,
};
