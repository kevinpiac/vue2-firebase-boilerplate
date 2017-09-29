<template lang="html">
  <el-menu
    theme="dark"
    class="main-menu"
    mode="horizontal">
    <el-menu-item
      v-for="item in items"
      :key="item.label"
      :index="item.name"
      @click="goToRouteName(item.name)">
      {{ item.label }}
    </el-menu-item>

    <el-menu-item index="switch">
      <locale-switch></locale-switch>
    </el-menu-item>
  </el-menu>
</template>

<script>
/**
 * =============
 * Nav Menu
 * =============
 *
 * Sample navigation with element-ui component.
 */
import LocaleSwitch from '@/components/LocaleSwitch/Index';

export default {
  props: ['items'],
  components: { LocaleSwitch },
  methods: {
    goToRouteName(name) {
      this.$router.push({ name });
    },
  },
};
</script>

<style scoped>
.main-menu {
  border-radius: 0!important;
}
</style>
