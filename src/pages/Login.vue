<template>
  <light-layout>
    Login Page Content
  </light-layout>
</template>

<script>
import LightLayout from '@/layouts/Light';

export default {
  name: 'login-page',
  components: { LightLayout },
  mounted() {
    this.$firebase.auth().createUserWithEmailAndPassword('kevinpiac@gmail.com', 'mdrmdr1').catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  },
};
</script>

<style scoped>
</style>
