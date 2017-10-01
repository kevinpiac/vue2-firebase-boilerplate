<template lang="html">
  <el-row type="flex" justify="center">
    <el-col :span="10">
      <h1>🔥 WORK IN PROGRESS 🔥</h1>
      <br>
      <el-card>
        <el-form :model="profileForm">
          <el-form-item :label="$t('profilePage.tabs.profile.profileForm.fullNameLabel')" prop="fullName">
            <el-input
              type="text"
              v-model="profileForm.fullName"
              auto-complete="on"
              :placeholder="$t('profilePage.tabs.profile.profileForm.fullNamePlaceholder')">
            </el-input>
          </el-form-item>
          <el-form-item :label="$t('profilePage.tabs.profile.profileForm.phoneLabel')">
            <el-input
              type="tel"
              v-model="profileForm.phone"
              auto-complete="on"
              :placeholder="$t('profilePage.tabs.profile.profileForm.phonePlaceholder')">
            </el-input>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'profile-tab',
  mounted() {
    this.initData();
  },
  data() {
    return {
      profileForm: {
        fullName: null,
        phone: null,
        company: null,
      },
    };
  },
  methods: {
    initData() {
      const userId = this.$firebase.auth().currentUser.uid;
      const userRef = this.$firebase.database().ref(`/users/${userId}`);
      userRef.once('value').then((snapshot) => {
        console.log('snapshot', snapshot);
      });
    },
  },
};
</script>

<style scoped>
</style>
