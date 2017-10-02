<template lang="html">
  <div>
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

<style scoped>
</style>
