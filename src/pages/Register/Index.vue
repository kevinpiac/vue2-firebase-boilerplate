<template lang="html">
  <light-layout>
    <h1>{{ $t('registerPage.title') }}</h1>
    <el-row type="flex" justify="center">
      <el-col :span="7" :xs="{span:20}" :lg="{span:5}">
        <el-card class="box-card">
          <el-form :rules="rules" :model="registerForm" ref="registerForm">
            <el-form-item :label="$t('registerPage.emailLabel')" prop="email">
              <el-input type="email" v-model="registerForm.email" auto-complete="on" :placeholder="$t('registerPage.emailPlaceholder')"></el-input>
            </el-form-item>
            <el-form-item :label="$t('registerPage.displayNameLabel')" prop="displayName">
              <el-input type="text" v-model="registerForm.displayName" auto-complete="on" :placeholder="$t('registerPage.displayNamePlaceholder')"></el-input>
            </el-form-item>
            <el-form-item :label="$t('registerPage.phoneNumberLabel')" prop="phoneNumber">
              <el-input type="tel" v-model="registerForm.phoneNumber" auto-complete="on" :placeholder="$t('registerPage.phoneNumberPlaceholder')"></el-input>
            </el-form-item>
            <el-form-item :label="$t('registerPage.passwordLabel')" prop="password">
              <el-input type="password" v-model="registerForm.password" auto-complete="off" :placeholder="$t('registerPage.passwordPlaceholder')"></el-input>
            </el-form-item>
            <br>
            <el-form-item>
              <el-button type="primary" @click="onRegister">{{ $t('registerPage.submit') }}</el-button>
            </el-form-item>
          </el-form>
          <p>{{ $t('registerPage.alreadyHaveAnAccount.message') }}</p>
          <el-button type="success" @click="$router.push({ name: 'Login' })">{{ $t('registerPage.alreadyHaveAnAccount.button') }}</el-button>
        </el-card>
      </el-col>
    </el-row>
  </light-layout>
</template>

<script>
import LightLayout from '@/layouts/Light';

export default {
  name: 'register-page',
  components: { LightLayout },
  data() {
    return {
      pageTitle: 'Register',
      registerForm: {
        email: null,
        password: null,
        displayName: null,
        phoneNumber: null,
      },
    };
  },
  computed: {
    /**
     * Important!
     * Store rules in computed property to be sure the translation works
     * on selected language changes
     */
    rules() {
      return {
        email: [{
          required: true,
          message: this.$t('registerPage.rules.requiredField', {
            fieldName: this.$t('registerPage.emailLabel'),
          }),
        }, {
          type: 'email',
          message: this.$t('registerPage.rules.typeEmail'),
        }],
        displayName: {
          required: true,
          message: this.$t('registerPage.rules.requiredField', {
            fieldName: this.$t('registerPage.displayNameLabel'),
          }),
        },
        password: [{
          required: true,
          message: this.$t('registerPage.rules.requiredField', {
            fieldName: this.$t('registerPage.passwordLabel'),
          }),
        }, {
          min: 8,
          max: 30,
          message: this.$t('registerPage.rules.sizeBetween', {
            fieldName: this.$t('registerPage.passwordLabel'),
            min: 8,
            max: 30,
          }),
        }],
      };
    },
  },
  methods: {
    onRegister() {
      const email = this.registerForm.email;
      const password = this.registerForm.password;
      const displayName = this.registerForm.displayName;
      const phoneNumber = this.registerForm.phoneNumber;

      /**
       * Check for validation using Element validation
       *
       * http://element.eleme.io/#/en-US/component/form
       */
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
          /**
           * Create user with firebase sdk
           */
          this.$firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
            /**
             * If everything does right we update profile with other info
             * we don't need to wait promise is resolved.
             * This might change in next version.
             */
            user.updateProfile({ displayName, phoneNumber });

            /**
             * Show success message
             */
            this.$message({
              message: 'You are registered',
              type: 'success',
            });

            /**
             * Call $store's login action
             */
            this.$store.dispatch('auth/login');

            /**
             * Redirect to Profile page
             */
            this.$router.push({ name: 'Profile' });
          }).catch((err) => {
            if (err) {
              /**
               * Show error message
               */
              this.$message({
                message: err.message,
                type: 'warning',
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
