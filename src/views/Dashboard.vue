<template>
  <HomeHeader class="capitalize">{{ title }}</HomeHeader>
  <router-view></router-view>
</template>
<script>
import HomeHeader from "../components/HomeHeader";
export default {
  computed: {
    title() {
      return this.$route.name;
    },
  },
  components: {
    HomeHeader,
  },
};
</script>
