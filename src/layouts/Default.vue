<template lang="html">
  <div>
    <nav-menu :items="items"></nav-menu>
    <slot></slot>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu';

export default {
  name: 'default-layout',
  components: { NavMenu },
  data() {
    return {
      items: [
        { label: 'Sign Out', path: 'logout' },
        { label: 'Private', path: 'private' },
      ],
    };
  },
};
</script>

<style lang="css">
</style>
