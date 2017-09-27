<template lang="html">
  <light-layout>
    <h1>{{ pageTitle}}</h1>
    <el-row type="flex" justify="center">
      <el-col :span="5">
        <el-card class="box-card">
          <el-form :model="registerForm">
            <el-form-item label="Email" prop="email">
              <el-input type="email" v-model="registerForm.email" auto-complete="on"></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="password">
              <el-input type="password" v-model="registerForm.password" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onRegister">Register</el-button>
            </el-form-item>
          </el-form>
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
      this.registerForm.password).catch((err) => {
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
