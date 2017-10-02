<template>
  <light-layout>
    <h1>{{ $t('title') }}</h1>
    <el-row type="flex" justify="center">
      <el-col :span="7" :xs="{span:20}" :lg="{span:5}">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="line-height: 36px;">{{ $t('title') }}</span>
          </div>
          <el-form :rules="rules" :model="resetForm" ref="resetForm">
            <el-form-item :label="$t('emailLabel')" prop="email">
              <el-input type="email" v-model="resetForm.email" auto-complete="on" :placeholder="$t('emailPlaceholder')"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onReset">{{ $t('submit') }}</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </light-layout>
</template>

<script>
import LightLayout from '@/layouts/Light';
/**
 * Import specific locale
 */
import Locale from './locale';

export default {
  name: 'reset-password-page',
  /**
   * Set component specific locale
   */
  i18n: {
    messages: Locale,
  },
  components: { LightLayout },
  data() {
    return {
      resetForm: {
        email: null,
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
      };
    },
  },
  methods: {
    onReset() {
      const email = this.resetForm.email;

      /**
       * Check for validation using Element validation
       *
       * http://element.eleme.io/#/en-US/component/form
       */
      this.$refs.resetForm.validate((valid) => {
        if (valid) {
          /**
           * Send reset email using firebase sdk
           *
           * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#sendPasswordResetEmail
           */
          const actionCodeSettings = {
            url: process.env.APP_LOGIN_URL,
          };
          this.$firebase.auth().sendPasswordResetEmail(email, actionCodeSettings).then(() => {
            this.$message({
              message: this.$t('resetEmailSent'),
              type: 'success',
            });
            this.$router.push({ name: 'Login' });
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
