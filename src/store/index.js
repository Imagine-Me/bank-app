import { createStore } from "vuex";
import firebase from "firebase";
import { config } from "../firebase/config";
export default createStore({
  state: {
    isAuthenticated: false,
    isLoading: true,
    firebase: null,
    uid: null,
    name: "John Doe",
    accountNo: "657334804425",
    balance: 25000,
    joinedDate: "12/2021",
    recentTransctions: [
      { date: "12-5-2021", type: "deposit", amount: 3000, balance: 20000 },
      { date: "22-4-2021", type: "withdraw", amount: 20000, balance: 17000 },
      { date: "03-4-2021", type: "deposit", amount: 10000, balance: 37000 },
      { date: "29-3-2021", type: "withdraw", amount: 3000, balance: 27000 },
      { date: "14-2 -2021", type: "withdraw", amount: 1000, balance: 30000 },
    ],
    recentLoans: [],
  },
  getters: {
    isAuthenticated: (state) => {
      return state.isAuthenticated;
    },
    isLoading: (state) => {
      return state.isLoading;
    },
  },
  mutations: {
    changeAuthState(state) {
      state.isAuthenticated = true;
    },
    changeIsLoading(state) {
      state.isLoading = false;
    },
    addFirebase(state, { payload }) {
      state.firebase = payload;
    },
    addUid(state, { payload }) {
      state.uid = payload;
    },
  },
  actions: {
    signIn({ commit }) {
      console.log(config);
      firebase.initializeApp(config);
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          console.log("There is a user", user);
        } else {
          // No user is signed in.
          console.log("there is no user");
        }
        commit("changeIsLoading");
        commit({ type: "addFirebase", payload: firebase });
      });
    },
    signInWithEmail({ commit }, { email, password }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          console.log(user, commit);
          // ...
        })
        .catch((error) => {
          console.log(error);
        });
    },
    signUpWithEmail({ commit }, { email, password, name }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          const profileChangeRequest = userCredential.profileChangeRequest();
          profileChangeRequest.displayName = name;
          profileChangeRequest.commitChangesWithCompletion((err) => {
            console.log(err);
          });
          commit({ type: "changeAuthState" });
          // ...
        })
        .catch((error) => {
          console.log(error);
          // ..
        });
    },
  },
  modules: {},
});
