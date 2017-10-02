<template>
  <light-layout>
    <h1>{{ $t('title') }}</h1>
    <el-row type="flex" justify="center">
      <el-col :span="7" :xs="{span:20}" :lg="{span:5}">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="line-height: 36px;">{{ $t('title') }}</span>
          </div>
          <el-form :rules="rules" :model="loginForm" ref="loginForm">
            <el-form-item :label="$t('emailLabel')" prop="email">
              <el-input type="email" v-model="loginForm.email" auto-complete="on" :placeholder="$t('emailPlaceholder')"></el-input>
            </el-form-item>
            <el-form-item :label="$t('passwordLabel')" prop="password">
              <el-input type="password" v-model="loginForm.password" auto-complete="off" :placeholder="$t('passwordPlaceholder')"></el-input>
            </el-form-item>
            <br>
            <el-form-item>
              <el-button type="primary" @click="onLogin">{{ $t('submit') }}</el-button>
            </el-form-item>
          </el-form>
          <router-link :to="{ name: 'ResetPassword', params: {} }">{{ $t('forgotPassword') }}</router-link>
        </el-card>
        <br>
        <el-card class="">
          <p>{{ $t('dontHaveAnAccount.message') }}</p>
          <el-button type="success" @click="$router.push({ name: 'Register' })">{{ $t('dontHaveAnAccount.button') }}</el-button>
        </el-card>
      </el-col>
    </el-row>
  </light-layout>
</template>

<script>
import LightLayout from '@/layouts/Light';
import Locale from './locale';

export default {
  name: 'login-page',
  /**
   * Set component specific locale
   */
  i18n: {
    messages: Locale,
  },
  components: { LightLayout },
  data() {
    return {
      loginForm: {
        email: null,
        password: null,
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
          message: this.$t('rules.requiredField', {
            fieldName: this.$t('emailLabel'),
          }),
        }, {
          type: 'email',
          message: this.$t('rules.typeEmail'),
        }],
        password: [{
          required: true,
          message: this.$t('rules.requiredField', {
            fieldName: this.$t('passwordLabel'),
          }),
        }, {
          min: 8,
          max: 30,
          message: this.$t('rules.sizeBetween', {
            fieldName: this.$t('passwordLabel'),
            min: 8,
            max: 30,
          }),
        }],
      };
    },
  },
  methods: {
    onLogin() {
      const email = this.loginForm.email;
      const password = this.loginForm.password;

      /**
       * Check for validation using Element validation
       *
       * http://element.eleme.io/#/en-US/component/form
       */
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          /**
           * Sign in user with firebase sdk
           */
          this.$firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
            this.$message({
              message: this.$t('onLoggedIn'),
              type: 'success',
            });

            /**
             * Dispatch the user login action on the store
             */
            this.$store.dispatch('auth/login', user);

            /**
             * Redirect to profile page
             */
            this.$router.push({ name: 'Profile' });
          }).catch((err) => {
            if (err) {
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
