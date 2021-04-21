import { createStore } from "vuex";

export default createStore({
  state: {
    name: "John Doe",
    accountNo: "657334804425",
    balance: 25000,
    joinedDate: "12/2021",
    recentTransctions: [
      { date: "12-5-2021", type: "savings", amount: 3000, balance: 20000 },
      { date: "22-4-2021", type: "withdraw", amount: 20000, balance: 17000 },
      { date: "03-4-2021", type: "savings", amount: 10000, balance: 37000 },
      { date: "29-3-2021", type: "withdraw", amount: 3000, balance: 27000 },
      { date: "14-2 -2021", type: "withdraw", amount: 1000, balance: 30000 },
    ],
    recentLoans: [],
  },
  mutations: {},
  actions: {},
  modules: {},
});
