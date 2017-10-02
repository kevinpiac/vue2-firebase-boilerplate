<template lang="html">
  <el-row type="flex" justify="center">
    <el-col :span="7">
      <br>
      <el-card class="box-card">
        <el-form :rules="rules" :model="credentialsForm" ref="credentialsFormEmail">
          <el-form-item :label="$t('tabs.credentials.credentialsForm.emailLabel')" prop="email">
            <el-input type="email" v-model="credentialsForm.email" auto-complete="off" :placeholder="$t('tabs.credentials.credentialsForm.emailPlaceholder')"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="updateEmail">{{ $t('tabs.credentials.credentialsForm.submit') }}</el-button>
            <el-button @click="handleReset">{{ $t('tabs.credentials.credentialsForm.reset' )}}</el-button>
          </el-form-item>
        </el-form>
        <el-form :rules="rules" :model="credentialsForm" ref="credentialsFormPassword">
          <el-form-item :label="$t('tabs.credentials.credentialsForm.passwordLabel')" prop="password">
            <el-input type="password" v-model="credentialsForm.password" auto-complete="off" :placeholder="$t('tabs.credentials.credentialsForm.passwordPlaceholder')"></el-input>
          </el-form-item>
          <el-form-item :label="$t('tabs.credentials.credentialsForm.passwordConfirmationLabel')" prop="passwordConfirmation">
            <el-input type="password" v-model="credentialsForm.passwordConfirmation" auto-complete="off" :placeholder="$t('tabs.credentials.credentialsForm.passwordConfirmationPlaceholder')"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" align="left" @click="updatePassword">{{ $t('tabs.credentials.credentialsForm.submit') }}</el-button>
            <el-button @click="handleReset">{{ $t('tabs.credentials.credentialsForm.reset' )}}</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import Reauthenticate from '@/mixins/Reauthenticate';
import StoreGetters from '@/mixins/Store/getters';
import Locale from '../locale';

export default {
  name: 'credentials-tab',
  /**
   * Set component specific locale
   */
  i18n: {
    messages: Locale,
  },

  mixins: [Reauthenticate, StoreGetters],
  mounted() {
    this.initFormData();
  },
  data() {
    return {
      credentialsForm: {
        email: null,
        password: '',
        passwordConfirmation: '',
      },
    };
  },
  computed: {
    /**
     * Important!
     * Keep rules in computed property to be sure the translation works
     * on selected language changes
     */
    rules() {
      return {
        email: [{
          required: true,
          message: this.$t('tabs.credentials.credentialsForm.rules.requiredField', {
            fieldName: this.$t('tabs.credentials.credentialsForm.emailLabel'),
          }),
        }, {
          type: 'email',
          message: this.$t('tabs.credentials.credentialsForm.rules.typeEmail'),
        }],
        password: [{
          required: true,
          message: this.$t('tabs.credentials.credentialsForm.rules.requiredField', {
            fieldName: this.$t('tabs.credentials.credentialsForm.passwordLabel'),
          }),
        }, {
          min: 6,
          max: 30,
          message: this.$t('tabs.credentials.credentialsForm.rules.sizeBetween', {
            fieldName: this.$t('tabs.credentials.credentialsForm.passwordLabel'),
            min: 6,
            max: 30,
          }),
        }],
        passwordConfirmation: [{
          required: true,
          message: this.$t('tabs.credentials.credentialsForm.rules.requiredField', {
            fieldName: this.$t('tabs.credentials.credentialsForm.passwordConfirmationLabel'),
          }),
        }, {
          validator: (rule, value, cb) => {
            if (value !== this.credentialsForm.password) {
              cb(new Error(this.$t('tabs.credentials.credentialsForm.rules.passwordAreEqual')));
            } else {
              cb();
            }
          },
        }],
      };
    },
  },
  methods: {
    initFormData() {
      this.credentialsForm.email = this.$store.getters['auth/currentUserEmail'];
      this.credentialsForm.password = '';
      this.credentialsForm.passwordConfirmation = '';
    },
    handleReset() {
      this.initFormData();
    },
    updateEmail() {
      /**
       * Check for validation using Element validation
       *
       * http://element.eleme.io/#/en-US/component/form
       */
      this.$refs.credentialsFormEmail.validate((valid) => {
        if (valid) {
          /**
           * Get current user instance with firebase sdk
           */
          const user = this.$firebase.auth().currentUser;

          /**
           * Update email value
           */
          user.updateEmail(this.credentialsForm.email).then(() => {
            /**
             * Update the $store's state
             */
            this.$store.dispatch('auth/updateUser');

            /**
             * Show toast message
             */
            this.$message({
              message: this.$t('tabs.credentials.credentialsForm.onEmailUpdated'),
              type: 'success',
            });
          }).catch((err) => {
            if (err.code === 'auth/requires-recent-login') {
              this.askForPassword().then(() => {
                this.handleReset();
              }).catch(() => {
                this.handleReset();
              });
            }
          });
        }
      });
    },
    updatePassword() {
      /**
       * Check for validation using Element validation
       *
       * http://element.eleme.io/#/en-US/component/form
       */
      this.$refs.credentialsFormPassword.validate((valid) => {
        if (valid) {
          const user = this.$firebase.auth().currentUser;
          user.updatePassword(this.credentialsForm.password).then(() => {
            this.$message({
              message: this.$t('tabs.credentials.credentialsForm.onPasswordUpdated'),
              type: 'success',
            });
          }).catch((err) => {
            this.$message(err.message);
            if (err.code === 'auth/requires-recent-login') {
              this.askForPassword().then(() => {
                this.handleReset();
              }).catch(() => {
                this.handleReset();
              });
            }
          });
        }
      });
    },
  },
};
</script>

<style scoped>
</style>
