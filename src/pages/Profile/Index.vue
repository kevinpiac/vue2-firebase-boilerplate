<template lang="html">
  <default-layout>
    <h1>{{ $t('title') }}</h1>
    <el-row type="flex" justify="center">
      <el-col :span="20">
        <el-tabs v-model="activeName">
          <el-tab-pane :label="$t('tabs.profile.paneLabel')" name="profilePane">
            <profile-tab></profile-tab>
          </el-tab-pane>
          <el-tab-pane :label="$t('tabs.credentials.paneLabel')" name="credentialsPane">
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
import Locale from './locale';

export default {
  name: 'profile-page',
  /**
   * Set component specific locale
   */
  i18n: {
    messages: Locale,
  },

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
