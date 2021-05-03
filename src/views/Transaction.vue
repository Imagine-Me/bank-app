<template>
  <div class="mt-8 m-auto max-w-2xl bg-white p-4 rounded-lg pb-16">
    <table class="table-auto w-full mt-4">
      <thead class="text-left">
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(transaction, index) in recentTransctions"
          :key="'transaction_' + index"
        >
          <td class="py-2">{{ transaction.date }}</td>
          <td>
            <div
              class="rounded-lg capitalize text-center w-20 text-white p-1 text-sm"
              :class="{
                'bg-red-500': transaction.type == 'withdraw',
                'bg-green-500': transaction.type == 'deposit',
              }"
            >
              {{ transaction.type }}
            </div>
          </td>
          <td>{{ transaction.amount }}</td>
          <td>{{ transaction.balance }}</td>
        </tr>
      </tbody>
    </table>
    <div
      v-if="dataLoading"
      class="rounded bg-gray-300 animate-pusle w-full h-4"
    ></div>
    <div
      v-if="dataLoading"
      class="rounded bg-gray-300 animate-pusle w-full h-4 mt-2"
    ></div>
    <div
      v-if="dataLoading"
      class="rounded bg-gray-300 animate-pusle w-full h-4 mt-2"
    ></div>
    <div
      v-if="dataLoading"
      class="rounded bg-gray-300 animate-pusle w-full h-4 mt-2"
    ></div>
    <div v-else-if="!recentTransctions">No data available</div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["recentTransctions"]),
  },
};
</script>
