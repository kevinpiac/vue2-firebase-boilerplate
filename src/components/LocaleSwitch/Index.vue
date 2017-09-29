<template lang="html">
  <el-select
    v-model="selected"
    @change="changed()">
    <el-option
      v-for="item in locales"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
/**
 * =============
 * LocaleSwitch
 * =============
 *
 * Sample component to show how you easily you can switch locale.
 */
export default {
  data() {
    return {
      selected: this.$store.getters['locale/currentLocale'],
      locales: [{
        label: 'English',
        value: 'en',
      }, {
        label: 'Français',
        value: 'fr',
      }],
    };
  },
  methods: {
    changed() {
      this.$store.dispatch('locale/switch', this.selected);
    },
  },
};
</script>

<style scoped>
</style>
