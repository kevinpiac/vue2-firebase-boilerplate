/**
 * =====================
 * Reauthenticate Mixin
 * =====================
 *
 * Export a set of functions used to ask user for reauthentication
 * using firebase SDK
 */

export default {
  methods: {
    /**
     * Reauthenticate a user with firebase sdk
     * @method reauthenticateWithEmailAndPassword
     * @param  {string}                           email
     * @param  {string}                           password
     * @return {void}
     */
    reauthenticateWithPassword(password) {
      const user = this.$firebase.auth().currentUser;
      const credential = this.$firebase.auth.EmailAuthProvider.credential(
        user.email,
        password,
      );
      return user.reauthenticateWithCredential(credential);
    },
    /**
     * Open a prompt, ask for password and reauthenticate user
     * @method askForPassword
     * @return {void}
     */
    askForPassword() {
      const h = this.$createElement;

      /**
       * We use Element's MessageBox component
       * http://element.eleme.io/#/en-US/component/message-box
       */
      return this.$msgbox({
        title: this.$t('reauthenticateMixin.boxTitle'),
        /**
         * small hack to create a custom password input inside the messageBox
         */
        message: h('div', null, [
          h('input', {
            attrs: {
              type: 'password',
              id: 'prompt-password-input',
              placeholder: this.$t('reauthenticateMixin.passwordPlaceholder'),
            },
            class: 'el-input__inner',
          }),
        ]),
        showCancelButton: true,
        confirmButtonText: this.$t('reauthenticateMixin.confirmation'),
        cancelButtonText: this.$t('reauthenticateMixin.cancel'),
        beforeClose: (action, instance, done) => {
          /**
           * get user's password input
           */
          const input = document.getElementById('prompt-password-input');
          const password = input.value;

          /**
           * clean the input
           */
          input.value = '';

          if (action === 'confirm') {
            /**
             * reauthenticate
             */
            this.reauthenticateWithPassword(password).then(() => {
              this.$message({
                message: this.$t('reauthenticateMixin.successMessage'),
                type: 'success',
              });
              done();
            }).catch(() => {
              this.$message({
                message: this.$t('reauthenticateMixin.failureMessage'),
                type: 'error',
              });
            });
          } else {
            done();
          }
        },
      });
    },
  },
};
