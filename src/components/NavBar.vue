<template>
  <div class="flex w-20 bg-white rounded-lg justify-center items-center">
    <div>
      <NavLink :isActive="route == 'Home'">
        <HomeIcon />
      </NavLink>
      <NavLink :isActive="route == 'Homea'">
        <User1 />
      </NavLink>
      <NavLink>
        <Logout />
      </NavLink>
    </div>
  </div>
</template>

<script>
import NavLink from "./NavLinks/NavLink";
import HomeIcon from "@/assets/icons/Home";
import User1 from "@/assets/icons/User1";
import Logout from "@/assets/icons/Logout";

export default {
  computed: {
    route: function () {
      return this.$route.name;
    },
  },
  components: {
    NavLink,
    HomeIcon,
    User1,
    Logout,
  },
};
</script>
