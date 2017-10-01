<template>
  <light-layout>
    <h1>{{ $t('loginPage.title') }}</h1>
    <el-row type="flex" justify="center">
      <el-col :span="7" :xs="{span:20}" :lg="{span:5}">
        <el-card class="box-card">
          <el-form :rules="rules" :model="loginForm" ref="loginForm">
            <el-form-item :label="$t('loginPage.emailLabel')" prop="email">
              <el-input type="email" v-model="loginForm.email" auto-complete="on" :placeholder="$t('loginPage.emailPlaceholder')"></el-input>
            </el-form-item>
            <el-form-item :label="$t('loginPage.passwordLabel')" prop="password">
              <el-input type="password" v-model="loginForm.password" auto-complete="off" :placeholder="$t('loginPage.passwordPlaceholder')"></el-input>
            </el-form-item>
            <br>
            <el-form-item>
              <el-button type="primary" @click="onLogin">{{ $t('loginPage.submit') }}</el-button>
            </el-form-item>
          </el-form>
          <p>{{ $t('loginPage.dontHaveAnAccount.message') }}</p>
          <el-button type="success" @click="$router.push({ name: 'Register' })">{{ $t('loginPage.dontHaveAnAccount.button') }}</el-button>
        </el-card>
      </el-col>
    </el-row>
  </light-layout>
</template>

<script>
import LightLayout from '@/layouts/Light';

export default {
  name: 'login-page',
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
          message: this.$t('loginPage.rules.requiredField', {
            fieldName: this.$t('registerPage.emailLabel'),
          }),
        }, {
          type: 'email',
          message: this.$t('loginPage.rules.typeEmail'),
        }],
        password: [{
          required: true,
          message: this.$t('loginPage.rules.requiredField', {
            fieldName: this.$t('loginPage.passwordLabel'),
          }),
        }, {
          min: 8,
          max: 30,
          message: this.$t('loginPage.rules.sizeBetween', {
            fieldName: this.$t('loginPage.passwordLabel'),
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
              message: 'You are logged in',
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
