<template lang="html">
  <default-layout>
    <h1>{{ $t('profilePage.title') }}</h1>
    <el-row type="flex" justify="center">
      <el-col :span="20">
        <el-tabs v-model="activeName">
          <el-tab-pane :label="$t('profilePage.tabs.profile.paneLabel')" name="profilePane">
            <h2> Work in progress </h2>
          </el-tab-pane>
          <el-tab-pane :label="$t('profilePage.tabs.credentials.paneLabel')" name="credentialsPane">
            <el-row type="flex" justify="center">
              <el-col :span="7">
                <br>
                <br>
                <el-card class="box-card">
                  <el-form :model="credentialsForm">
                    <el-form-item :label="$t('profilePage.credentialsForm.emailLabel')" prop="email">
                      <el-input type="email" v-model="credentialsForm.email" auto-complete="off" :placeholder="$t('profilePage.credentialsForm.emailPlaceholder')"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="updateEmail">{{ $t('profilePage.credentialsForm.submit') }}</el-button>
                      <el-button @click="handleReset">{{ $t('profilePage.credentialsForm.reset' )}}</el-button>
                    </el-form-item>
                  </el-form>
                  <el-form :model="credentialsForm">
                    <el-form-item :label="$t('profilePage.credentialsForm.passwordLabel')" prop="email">
                      <el-input type="email" v-model="credentialsForm.password" auto-complete="off" :placeholder="$t('profilePage.credentialsForm.passwordPlaceholder')"></el-input>
                    </el-form-item>
                    <el-form-item :label="$t('profilePage.credentialsForm.passwordConfirmationLabel')" prop="password">
                      <el-input type="password" v-model="credentialsForm.passwordConfirmation" auto-complete="off" :placeholder="$t('profilePage.credentialsForm.passwordConfirmationPlaceholder')"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" align="left" @click="updatePassword">{{ $t('profilePage.credentialsForm.submit') }}</el-button>
                      <el-button @click="handleReset">{{ $t('profilePage.credentialsForm.reset' )}}</el-button>
                    </el-form-item>
                  </el-form>
                </el-card>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </default-layout>
</template>

<script>
import DefaultLayout from '@/layouts/Default';
import Reauthenticate from '@/mixins/Reauthenticate';

export default {
  name: 'profile-page',
  components: { DefaultLayout },
  mounted() {
    this.initFormData();
  },
  data() {
    return {
      activeName: 'profilePane',
      credentialsForm: {
        email: null,
        password: null,
        passwordConfirmation: null,
      },
    };
  },
  mixins: [Reauthenticate],
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
          message: this.$t('profilePage.credentialsForm.onEmailUpdated'),
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
          message: this.$t('profilePage.credentialsForm.onPasswordUpdated'),
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
