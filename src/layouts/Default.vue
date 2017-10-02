<template lang="html">
  <div>
    <nav-menu></nav-menu>
    <slot></slot>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu/Index';

export default {
  name: 'default-layout',
  components: { NavMenu },
};
</script>

<style lang="css">
</style>
