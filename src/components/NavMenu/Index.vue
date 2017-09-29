<template lang="html">
  <el-menu
    theme="dark"
    class="main-menu"
    mode="horizontal"
    :router="true">
    <el-menu-item v-for="item in items" :key="item.label" :index="item.path">{{ item.label }}</el-menu-item>
    <el-menu-item index="switch">
      <locale-switch></locale-switch>
    </el-menu-item>
  </el-menu>
</template>

<script>
import LocaleSwitch from '@/components/LocaleSwitch/Index';

export default {
  props: ['items'],
  components: { LocaleSwitch },
};
</script>

<style scoped>
.main-menu {
  border-radius: 0!important;
}
</style>
