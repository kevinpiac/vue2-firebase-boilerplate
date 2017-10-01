<template lang="html">
  <light-layout>
    <h1>{{ $t('registerPage.title') }}</h1>
    <el-row type="flex" justify="center">
      <el-col :span="5">
        <el-card class="box-card">
          <el-form :model="registerForm">
            <el-form-item :label="$t('registerPage.emailLabel')" prop="email">
              <el-input type="email" v-model="registerForm.email" auto-complete="on" :placeholder="$t('registerPage.emailPlaceholder')"></el-input>
            </el-form-item>
            <el-form-item :label="$t('registerPage.passwordLabel')" prop="password">
              <el-input type="password" v-model="registerForm.password" auto-complete="off" :placeholder="$t('registerPage.passwordPlaceholder')"></el-input>
            </el-form-item>
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
      },
    };
  },
  methods: {
    onRegister() {
      const email = this.registerForm.email;
      const password = this.registerForm.password;

      if (!email || !password) {
        return;
      }
      this.$firebase.auth().createUserWithEmailAndPassword(this.registerForm.email,
      this.registerForm.password).then(() => {
        this.$message({
          message: 'You are registered',
          type: 'success',
        });
        this.$store.dispatch('auth/login');
        this.$router.push({ name: 'Profile' });
      }).catch((err) => {
        if (err) {
          this.$message({
            message: err.message,
            type: 'warning',
          });
        }
      });
    },
  },
};
</script>

<style scoped>
</style>
