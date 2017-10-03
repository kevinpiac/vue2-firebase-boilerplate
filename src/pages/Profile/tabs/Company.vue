<template lang="html">
  <el-row type="flex" justify="center">
    <el-col :span="10" :xs="{span:20}" :lg="{span:10}">
      <br>
      <el-card class="box-card">
        <el-form :model="companyForm" ref="companyForm">
          <el-form-item :label="$t('tabs.company.companyForm.companyNameLabel')" prop="companyName">
            <el-input type="text" v-model="companyForm.companyName" auto-complete="on" :placeholder="$t('tabs.company.companyForm.companyNamePlaceholder')"></el-input>
          </el-form-item>
          <el-form-item :label="$t('tabs.company.companyForm.addressLabel')" prop="address">
            <el-input type="text" v-model="companyForm.address" auto-complete="on" :placeholder="$t('tabs.company.companyForm.addressPlaceholder')"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" align="left" @click="saveCompanyInfo">{{ $t('tabs.company.companyForm.submit') }}</el-button>
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
  name: 'company-tab',
  /**
   * Set component specific locale
   */
  i18n: {
    messages: Locale,
  },

  mixins: [StoreGetters],
  mounted() {
    this.initFormData();
  },
  data() {
    return {
      companyForm: {
        companyName: '',
        address: '',
      },
    };
  },
  methods: {
    initFormData() {
      /**
       * Show loading popup with Element service
       */
      const loading = this.$loading({ fullscreen: false });

      /**
       * Get current user Id
       */
      const userId = this.currentUserId;

      /**
       * Get the reference we want in Firebase database
       */
      const dbRef = this.$firebase.database().ref(`companies/${userId}`);

      /**
       * Watch for a database result and close loader
       */
      dbRef.on('value', (snapshot) => {
        const res = snapshot.val();
        if (res) {
          this.companyForm = res;
        }
        loading.close();
      });
    },
    saveCompanyInfo() {
      /**
       * Get current user Id
       */
      const userId = this.currentUserId;

      /**
       * Get the reference... again
       */
      const dbRef = this.$firebase.database().ref(`companies/${userId}`);

      /**
       * Save our informations
       */
      dbRef.set({
        companyName: this.companyForm.companyName,
        address: this.companyForm.address,
      }).then(() => {
        this.$message({
          message: this.$t('tabs.company.companyForm.onDataUpdate'),
          type: 'success',
        });
      }).catch(() => {
        this.$message({
          message: this.$t('tabs.company.companyForm.onFailure'),
          type: 'error',
        });
      });
    },
  },
};
</script>

<style scoped>
</style>
