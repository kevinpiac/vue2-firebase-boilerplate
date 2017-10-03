<template lang="html">
  <div class="layout">
    <nav-menu></nav-menu>
    <slot></slot>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu/Index';

export default {
  name: 'light-layout',
  components: { NavMenu },
};
</script>

<style lang="stylus">
</style>
