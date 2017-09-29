<template lang="html">
  <div>
    <nav-menu :items="items"></nav-menu>
    <slot></slot>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu';

export default {
  name: 'light-layout',
  components: { NavMenu },
  data() {
    return {
      items: [
        { label: 'Sign In', path: 'login' },
        { label: 'Sign Up', path: 'register' },
      ],
    };
  },
};
</script>

<style scoped>
</style>
