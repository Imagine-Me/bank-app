<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      amount: 0,
      error: false,
    };
  },
  computed: {
    ...mapState(["balance"]),
  },
  methods: {
    ...mapActions(["updateBalance", "updateTransactions"]),
  },
};
</script>
