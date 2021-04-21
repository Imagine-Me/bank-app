<template>
  <router-view />
</template>
<script>
export default {
  mounted: function () {
    // this.$nextTick(function(){
    //   console.log("Updated",this.$route.name);
    //   if (this.$route.name === "Home") {
    //     this.$router.push("overview");
    //   }

    // })
  },
};
</script>
