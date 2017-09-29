<template lang="html">
  <div class="">
    <h1>This page is shown only to authenticated users.</h1>
    <button @click="goRegister" type="button" name="button">Register</button>
  </div>
</template>

<script>
export default {
  name: 'private-page',
  methods: {
    goRegister() {
      this.$router.push({ name: 'Register' });
    },
  },
};
</script>

<style lang="css">
</style>
