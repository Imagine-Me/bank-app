<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-1 gap-6 mt-5"
  >
    <Card>
      <h4 class="text-lg font-medium">Account</h4>
      <div
        v-if="dataLoading"
        class="rounded bg-gray-300 animate-pusle w-16 h-4"
      ></div>
      <h3 v-else class="text-2xl mt-2 text-primary">₹{{ balance }}</h3>
      <div class="flex justify-around mt-2">
        <div
          v-if="dataLoading"
          class="rounded bg-gray-300 animate-pusle w-full h-4"
        ></div>
        <div
          v-else
          class="text-xl font-thin"
          v-for="letter in accountNo"
          :key="'account_number_' + letter"
        >
          {{ letter }}
        </div>
      </div>
      <div class="h-10"></div>
      <div
        class="absolute inset-x-0 bottom-0 p-3 flex justify-between text-sm text-gray-500"
      >
        <div>{{ name }}</div>
        <div
          v-if="dataLoading"
          class="rounded bg-gray-300 animate-pusle w-12"
        ></div>
        <div v-else>{{ joinedDate }}</div>
      </div>
    </Card>
    <Card>
      <router-link class="h-full block" to="deposit">
        <h4 class="text-lg font-medium capitalize">deposit</h4>
        <div class="flex items-center mt-7">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.5 22.5C25.5 22.25 24.5 21.75 23.75 21C23 20.75 22.75 20 22.75 19.5C22.75 19 23 18.25 23.5 18C24.25 17.5 25 17 25.75 17.25C27.25 17.25 28.5 18 29.25 19L31.5 16C30.75 15.25 30 14.75 29.25 14.25C28.5 13.75 27.5 13.5 26.5 13.5V10H23.5V13.5C22.25 13.75 21 14.5 20 15.5C19 16.75 18.25 18.25 18.5 19.75C18.5 21.25 19 22.75 20 23.75C21.25 25 23 25.75 24.5 26.5C25.25 26.75 26.25 27.25 27 27.75C27.5 28.25 27.75 29 27.75 29.75C27.75 30.5 27.5 31.25 27 32C26.25 32.75 25.25 33 24.5 33C23.5 33 22.25 32.75 21.5 32C20.75 31.5 20 30.75 19.5 30L17 32.75C17.75 33.75 18.5 34.5 19.5 35.25C20.75 36 22.25 36.75 23.75 36.75V40H26.5V36.25C28 36 29.25 35.25 30.25 34.25C31.5 33 32.25 31 32.25 29.25C32.25 27.75 31.75 26 30.5 25C29.25 23.75 28 23 26.5 22.5V22.5ZM25 5C14 5 5 14 5 25C5 36 14 45 25 45C36 45 45 36 45 25C45 14 36 5 25 5ZM25 42.25C15.5 42.25 7.75 34.5 7.75 25C7.75 15.5 15.5 7.75 25 7.75C34.5 7.75 42.25 15.5 42.25 25C42.25 34.5 34.5 42.25 25 42.25V42.25Z"
              fill="#FF4580"
            />
          </svg>

          <p class="text-dark ml-3">Deposit money to your account instantly!</p>
        </div>
      </router-link>
    </Card>
    <Card>
      <router-link class="h-full block" to="withdraw">
        <h4 class="text-lg font-medium">Withdraw</h4>
        <div class="flex items-center mt-7">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 25C23.7639 25 22.5555 25.3666 21.5277 26.0533C20.4999 26.7401 19.6988 27.7162 19.2258 28.8582C18.7527 30.0003 18.6289 31.2569 18.8701 32.4693C19.1113 33.6817 19.7065 34.7953 20.5806 35.6694C21.4547 36.5435 22.5683 37.1388 23.7807 37.3799C24.9931 37.6211 26.2497 37.4973 27.3918 37.0242C28.5338 36.5512 29.5099 35.7501 30.1967 34.7223C30.8834 33.6945 31.25 32.4861 31.25 31.25C31.25 29.5924 30.5915 28.0027 29.4194 26.8306C28.2473 25.6585 26.6576 25 25 25ZM25 33.3333C24.588 33.3333 24.1852 33.2111 23.8426 32.9822C23.5 32.7533 23.2329 32.4279 23.0753 32.0473C22.9176 31.6666 22.8763 31.2477 22.9567 30.8436C23.0371 30.4394 23.2355 30.0682 23.5269 29.7769C23.8182 29.4855 24.1894 29.2871 24.5936 29.2067C24.9977 29.1263 25.4166 29.1676 25.7973 29.3253C26.1779 29.4829 26.5033 29.75 26.7322 30.0926C26.9611 30.4352 27.0833 30.838 27.0833 31.25C27.0833 31.8025 26.8638 32.3324 26.4731 32.7231C26.0824 33.1138 25.5525 33.3333 25 33.3333ZM23.5208 20.2292C23.719 20.4188 23.9526 20.5675 24.2083 20.6667C24.4577 20.7769 24.7274 20.8338 25 20.8338C25.2726 20.8338 25.5423 20.7769 25.7917 20.6667C26.0474 20.5675 26.281 20.4188 26.4792 20.2292L31.25 15.5417C31.6534 15.1383 31.88 14.5913 31.88 14.0208C31.88 13.4504 31.6534 12.9033 31.25 12.5C30.8467 12.0966 30.2996 11.87 29.7292 11.87C29.1587 11.87 28.6117 12.0966 28.2083 12.5L27.0833 13.7292V6.25C27.0833 5.69746 26.8638 5.16756 26.4731 4.77686C26.0824 4.38616 25.5525 4.16666 25 4.16666C24.4475 4.16666 23.9176 4.38616 23.5269 4.77686C23.1362 5.16756 22.9167 5.69746 22.9167 6.25V13.7292L21.7917 12.5C21.3883 12.0966 20.8413 11.87 20.2708 11.87C19.7004 11.87 19.1534 12.0966 18.75 12.5C18.3467 12.9033 18.1201 13.4504 18.1201 14.0208C18.1201 14.5913 18.3467 15.1383 18.75 15.5417L23.5208 20.2292ZM39.5833 31.25C39.5833 30.838 39.4612 30.4352 39.2322 30.0926C39.0033 29.75 38.6779 29.4829 38.2973 29.3253C37.9166 29.1676 37.4977 29.1263 37.0936 29.2067C36.6894 29.2871 36.3182 29.4855 36.0269 29.7769C35.7355 30.0682 35.5371 30.4394 35.4567 30.8436C35.3763 31.2477 35.4176 31.6666 35.5753 32.0473C35.7329 32.4279 36 32.7533 36.3426 32.9822C36.6852 33.2111 37.088 33.3333 37.5 33.3333C38.0525 33.3333 38.5824 33.1138 38.9731 32.7231C39.3638 32.3324 39.5833 31.8025 39.5833 31.25ZM41.6667 16.6667H35.4167C34.8641 16.6667 34.3342 16.8862 33.9435 17.2769C33.5528 17.6676 33.3333 18.1975 33.3333 18.75C33.3333 19.3025 33.5528 19.8324 33.9435 20.2231C34.3342 20.6138 34.8641 20.8333 35.4167 20.8333H41.6667C42.2192 20.8333 42.7491 21.0528 43.1398 21.4435C43.5305 21.8342 43.75 22.3641 43.75 22.9167V39.5833C43.75 40.1359 43.5305 40.6658 43.1398 41.0565C42.7491 41.4472 42.2192 41.6667 41.6667 41.6667H8.33334C7.7808 41.6667 7.2509 41.4472 6.8602 41.0565C6.4695 40.6658 6.25 40.1359 6.25 39.5833V22.9167C6.25 22.3641 6.4695 21.8342 6.8602 21.4435C7.2509 21.0528 7.7808 20.8333 8.33334 20.8333H14.5833C15.1359 20.8333 15.6658 20.6138 16.0565 20.2231C16.4472 19.8324 16.6667 19.3025 16.6667 18.75C16.6667 18.1975 16.4472 17.6676 16.0565 17.2769C15.6658 16.8862 15.1359 16.6667 14.5833 16.6667H8.33334C6.67573 16.6667 5.08602 17.3251 3.91392 18.4972C2.74182 19.6693 2.08334 21.2591 2.08334 22.9167V39.5833C2.08334 41.2409 2.74182 42.8306 3.91392 44.0028C5.08602 45.1749 6.67573 45.8333 8.33334 45.8333H41.6667C43.3243 45.8333 44.914 45.1749 46.0861 44.0028C47.2582 42.8306 47.9167 41.2409 47.9167 39.5833V22.9167C47.9167 21.2591 47.2582 19.6693 46.0861 18.4972C44.914 17.3251 43.3243 16.6667 41.6667 16.6667ZM10.4167 31.25C10.4167 31.662 10.5389 32.0648 10.7678 32.4074C10.9967 32.75 11.3221 33.0171 11.7027 33.1747C12.0834 33.3324 12.5023 33.3737 12.9064 33.2933C13.3106 33.2129 13.6818 33.0145 13.9731 32.7231C14.2645 32.4318 14.4629 32.0606 14.5433 31.6564C14.6237 31.2523 14.5824 30.8334 14.4248 30.4527C14.2671 30.0721 14 29.7467 13.6574 29.5178C13.3148 29.2889 12.912 29.1667 12.5 29.1667C11.9475 29.1667 11.4176 29.3862 11.0269 29.7769C10.6362 30.1676 10.4167 30.6975 10.4167 31.25Z"
              fill="#FF4580"
            />
          </svg>

          <p class="ml-3 text-dark">Withdraw money from your account</p>
        </div>
      </router-link>
    </Card>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-6 mt-5">
    <Card>
      <h4 class="text-lg font-medium">Transactions</h4>
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
            v-for="(transaction, index) in transactions"
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
    </Card>
    <Card class="mb-20 md:mb-0">
      <h4 class="text-lg font-medium">Loans</h4>
    </Card>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Card from "../components/Card";

export default {
  components: {
    Card,
  },
  computed: {
    ...mapState([
      "name",
      "accountNo",
      "balance",
      "joinedDate",
      "recentTransctions",
      "recentLoans",
      "firebase",
      "uid",
      "dataLoading",
    ]),
    transactions: function () {
      const keys = Object.keys(this.recentTransctions);
      const result = [];
      keys.reverse().forEach((v, i) => {
        if (i < 5) {
          result.push(this.recentTransctions[v]);
        }
      });
      return result;
    },
  },
  mounted() {
    this.getOverView();
  },
  methods: {
    ...mapActions(["getOverView"]),
  },
};
</script>
