<template lang="html">
  <default-layout>
    <h1>{{ $t('profilePage.title') }}</h1>
    <el-row type="flex" justify="center">
      <el-col :span="20">
        <el-tabs v-model="activeName">
          <el-tab-pane :label="$t('profilePage.tabs.profile.paneLabel')" name="profilePane">
            <profile-tab></profile-tab>
          </el-tab-pane>
          <el-tab-pane :label="$t('profilePage.tabs.credentials.paneLabel')" name="credentialsPane">
            <credentials-tab></credentials-tab>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </default-layout>
</template>

<script>
import DefaultLayout from '@/layouts/Default';
import CredentialsTab from './tabs/Credentials';
import ProfileTab from './tabs/Profile';

export default {
  name: 'profile-page',
  components: { DefaultLayout, CredentialsTab, ProfileTab },
  data() {
    return {
      activeName: 'profilePane',
    };
  },
};
</script>

<style scoped>
</style>
