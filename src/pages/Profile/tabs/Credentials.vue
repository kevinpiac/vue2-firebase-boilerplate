<template lang="html">
  <el-row type="flex" justify="center">
    <el-col :span="7">
      <br>
      <el-card class="box-card">
        <el-form :model="credentialsForm">
          <el-form-item :label="$t('profilePage.tabs.credentials.credentialsForm.emailLabel')" prop="email">
            <el-input type="email" v-model="credentialsForm.email" auto-complete="off" :placeholder="$t('profilePage.tabs.credentials.credentialsForm.emailPlaceholder')"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="updateEmail">{{ $t('profilePage.tabs.credentials.credentialsForm.submit') }}</el-button>
            <el-button @click="handleReset">{{ $t('profilePage.tabs.credentials.credentialsForm.reset' )}}</el-button>
          </el-form-item>
        </el-form>
        <el-form :model="credentialsForm">
          <el-form-item :label="$t('profilePage.tabs.credentials.credentialsForm.passwordLabel')" prop="password">
            <el-input type="password" v-model="credentialsForm.password" auto-complete="off" :placeholder="$t('profilePage.tabs.credentials.credentialsForm.passwordPlaceholder')"></el-input>
          </el-form-item>
          <el-form-item :label="$t('profilePage.tabs.credentials.credentialsForm.passwordConfirmationLabel')" prop="password">
            <el-input type="password" v-model="credentialsForm.passwordConfirmation" auto-complete="off" :placeholder="$t('profilePage.tabs.credentials.credentialsForm.passwordConfirmationPlaceholder')"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" align="left" @click="updatePassword">{{ $t('profilePage.tabs.credentials.credentialsForm.submit') }}</el-button>
            <el-button @click="handleReset">{{ $t('profilePage.tabs.credentials.credentialsForm.reset' )}}</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import Reauthenticate from '@/mixins/Reauthenticate';

export default {
  name: 'credentials-tab',
  mixins: [Reauthenticate],
  mounted() {
    this.initFormData();
  },
  data() {
    return {
      credentialsForm: {
        email: null,
        password: null,
        passwordConfirmation: null,
      },
    };
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
      const user = this.$firebase.auth().currentUser;
      user.updateEmail(this.credentialsForm.email).then(() => {
        this.$message({
          message: this.$t('profilePage.tabs.credentials.credentialsForm.onEmailUpdated'),
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
    },
    updatePassword() {
      const user = this.$firebase.auth().currentUser;
      user.updatePassword(this.credentialsForm.password).then(() => {
        this.$message({
          message: this.$t('profilePage.tabs.credentials.credentialsForm.onPasswordUpdated'),
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
    },
  },
};
</script>

<style scoped>
</style>
