<template lang="html">
  <default-layout>
    <h1>Private page</h1>
    <p>This page is shown only to authenticated users</p>
  </default-layout>
</template>

<script>
import DefaultLayout from '@/layouts/Default';

export default {
  name: 'private-page',
  components: { DefaultLayout },
};
</script>

<style scoped>
</style>
