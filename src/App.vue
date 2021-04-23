<template>
  <router-view />
</template>
<script>

export default {
  mounted: function () {
    this.$store.dispatch("signIn")
  },
};
</script>
