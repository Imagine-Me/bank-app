<script>
import { mapState } from "vuex";
import Spinner from "@/assets/icons/Spinner";
export default {
  data() {
    return {
      email: "",
      password: "",
      loader: false,
    };
  },
  components: {
    Spinner,
  },
  computed: {
    ...mapState(["isAuthenticated"]),
  },
  watch: {
    isAuthenticated: function (data) {
      this.loader = false;
      if (data) {
        this.$router.push("overview");
      }
    },
  },
};
</script>
