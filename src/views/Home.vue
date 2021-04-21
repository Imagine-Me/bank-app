<template>
  <div class="h-full p-5 bg-secondary flex">
    <NavBar />
    <div class="flex-1">Bonjour</div>
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
