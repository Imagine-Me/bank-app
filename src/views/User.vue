<template>
  <HomeHeader>User</HomeHeader>
  <div class="m-auto max-w-xs bg-white p-2 mt-5">
    <label for="">Name</label>
    <input class="border w-full p-1" type="text" readonly :value="name" />
    <label class="mt-2" for="">Account Number</label>
    <input class="border w-full p-1" type="text" readonly :value="accountNo" />
    <label for="">Balance</label>
    <input class="border w-full p-1" type="text" readonly :value="balance" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import HomeHeader from "../components/HomeHeader";

export default {
  components: {
    HomeHeader,
  },
  computed: {
    ...mapState(["name", "accountNo", "balance"]),
  },
};
</script>