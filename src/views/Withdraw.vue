<template>
  <div class="mt-8 m-auto max-w-lg bg-white p-4 rounded-lg pb-16">
    <form @submit.prevent="formSubmission">
      <label for="">Enter Amount</label>
      <p v-if="error" class="text-red-500">Invalid amount</p>
      <input
        type="number"
        v-model="amount"
        class="w-full border mt-2 rounded p-3"
      />
      <div class="mt-2">
        <button class="float-right rounded px-4 py-2 bg-primary text-white">
          Withdraw
        </button>
        <router-link
          to="/"
          tag="button"
          class="float-right rounded px-4 py-2 bg-gray-500 mr-2 text-white"
          >Cancel</router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
import MoneyHandler from "../mixins/MoneyHandler";
export default {
  mixins: [MoneyHandler],
  methods: {
    formSubmission() {
      if (this.amount > this.balance || this.amount <= 0) {
        this.error = true;
        return;
      }
      const data = {
        amount: this.amount,
        type: "withdraw",
        balance: this.balance,
        date: new Date().getMonth() + "/" + new Date().getFullYear(),
      };
      const newBalance = parseInt(this.balance) - parseInt(this.amount);
      this.updateBalance(newBalance)
        .then(() => this.updateTransactions(data))
        .then(() => this.$router.push("/overview"));
    },
  },
};
</script>
