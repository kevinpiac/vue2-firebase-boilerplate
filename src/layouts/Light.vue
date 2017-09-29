<template lang="html">
  <div>
    <nav-menu :items="items"></nav-menu>
    <slot></slot>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu/Index';

export default {
  name: 'light-layout',
  components: { NavMenu },
  data() {
    return {
      items: [
        { label: this.$t('message.login'), path: 'login' },
        { label: this.$t('message.register'), path: 'register' },
      ],
    };
  },
};
</script>

<style scoped>
</style>
