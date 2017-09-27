/**
 * Auth Service
 *
 * Allows to abstract the authentication provider. It could be you API, Firebase
 * or any other source.
 */

export default {
  isAuthenticated() {
    /* your logic goes here */
    return false;
  },
  authenticate(credentials, cb) {
    /* your logic goes here */
    if (1 === 2) {
      cb('error');
    } else {
      cb(null, 'success');
    }
  },
  logout(cb) {
    /* your logic goes here */
    cb(true);
  },
};
