<template lang="html">
  <el-row type="flex" justify="center">
    <el-col :span="10">
      <h1>🔥 WORK IN PROGRESS 🔥</h1>
      <br>
      <el-card>
        <el-form :rules="rules" ref="profileForm" :model="profileForm">
          <el-form-item :label="$t('tabs.profile.profileForm.fullNameLabel')" prop="fullName">
            <el-input
              type="text"
              v-model="profileForm.fullName"
              auto-complete="on"
              :placeholder="$t('tabs.profile.profileForm.fullNamePlaceholder')">
            </el-input>
          </el-form-item>
          <el-form-item :label="$t('tabs.profile.profileForm.phoneLabel')">
            <el-input
              type="tel"
              v-model="profileForm.phone"
              auto-complete="on"
              :placeholder="$t('tabs.profile.profileForm.phonePlaceholder')">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="updateProfile()">{{ $t('tabs.profile.profileForm.updateProfile')}}</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import StoreGetters from '@/mixins/Store/getters';
import Locale from '../locale';

export default {
  name: 'profile-tab',
  /**
   * Set component specific locale
   */
  i18n: {
    messages: Locale,
  },

  mixins: [StoreGetters],
  mounted() {
    this.initData();
  },
  data() {
    return {
      profileForm: {
        fullName: null,
        phone: null,
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
        fullName: {
          required: true,
          message: this.$t('tabs.profile.profileForm.rules.requiredField', {
            fieldName: this.$t('tabs.profile.profileForm.fullNameLabel'),
          }),
        },
      };
    },
  },
  watch: {
    currentUser() {
      this.initData();
    },
  },
  methods: {
    initData() {
      /**
       * Init data using mixin (StoreGetters) computed props
       */
      this.profileForm.fullName = this.currentUserDisplayName;
      this.profileForm.phone = this.currentUserPhoneNumber;
    },
    updateProfile() {
      /**
       * Check for validation using Element validation
       *
       * http://element.eleme.io/#/en-US/component/form
       */
      this.$refs.profileForm.validate((valid) => {
        if (valid) {
          /**
           * Update the user's profile in firebase
           *
           * https://firebase.google.com/docs/auth/web/manage-users#update_a_users_profile
           */
          const user = this.$firebase.auth().currentUser;
          user.updateProfile({
            displayName: this.profileForm.fullName,
            phoneNumber: this.profileForm.phone,
          }).then(() => {
            /**
             * Update the $store's state
             */
            this.$store.dispatch('auth/updateUser');

            this.$message({
              message: this.$t('tabs.profile.profileForm.onProfileUpdated'),
              type: 'success',
            });
          }).catch((err) => {
            this.$message({
              message: err.message,
              type: 'error',
            });
          });
        }
      });
    },
  },
};
</script>

<style scoped>
</style>
