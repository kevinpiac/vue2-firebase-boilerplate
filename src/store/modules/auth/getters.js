/**
 * ========================
 * Getters for auth module
 * ========================
 *
 * https://vuex.vuejs.org/en/getters.html
 */


const getters = {
  isAuthenticated: state => state.authenticated,
  currentUser: state => state.user,
  currentUserId: state => state.user.uid,
  currentUserEmail: state => state.user.email,
  currentUserEmailVerified: state => state.user.emailVerified,
  currentUserPhoneNumber: state => state.user.phoneNumber,
  currentUserDisplayName: state => state.user.displayName,
  currentUserPhotoURL: state => state.user.photoURL,
  currentUserProfile: state => ({
    uid: state.user.uid,
    email: state.user.email,
    emailVerified: state.user.emailVerified,
    phoneNumber: state.user.phoneNumber,
    displayName: state.user.displayName,
    photoURL: state.user.photoURL,
  }),
};

export default getters;
