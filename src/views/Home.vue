<template>
  <div class="h-full p-5 bg-secondary flex">
    <NavBar />
    <div class="flex-1 px-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "Home",
  components: {
    NavBar,
  },
};
</script>
