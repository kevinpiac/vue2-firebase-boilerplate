/**
 * =====================
 * Store Getters Mixin
 * =====================
 *
 * Map all store's getters as computed properties
 */
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated',
      currentUser: 'auth/currentUser',
      currentUserId: 'auth/currentUserId',
      currentUserEmail: 'auth/currentUserEmail',
      currentUserEmailVerified: 'auth/currentUserEmailVerified',
      currentUserPhoneNumber: 'auth/currentUserPhoneNumber',
      currentUserDisplayName: 'auth/currentUserDisplayName',
      currentUserPhotoURL: 'auth/currentUserPhotoURL',
      currentUserProfile: 'auth/currentUserProfile',
    }),
  },
};
