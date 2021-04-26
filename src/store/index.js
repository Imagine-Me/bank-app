import { createStore } from "vuex";
import firebase from "firebase";
import { config } from "../firebase/config";
// import router from "../router/index";

export default createStore({
  state: {
    isAuthenticated: false,
    isLoading: true,
    firebase: null,
    uid: null,
    name: "",
    accountNo: "",
    balance: 0,
    joinedDate: "",
    recentTransctions: [],
    recentLoans: [],
  },
  getters: {
    isAuthenticated: (state) => {
      return state.isAuthenticated;
    },
  },
  mutations: {
    changeIsLoading(state) {
      state.isLoading = false;
    },
    addFirebase(state, { payload }) {
      state.firebase = payload;
    },
    addUserDetails(state, { payload }) {
      state.uid = payload.uid;
      state.name = payload.name;
      state.isAuthenticated = true;
    },
  },
  actions: {
    signIn({ commit }) {
      firebase.initializeApp(config);
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          const userData = {
            uid: user.uid,
            name: user.displayName,
          };
          commit({ type: "addUserDetails", payload: userData });
        } else {
          // No user is signed in.
          console.log("there is no user");
        }
        commit("changeIsLoading");
        commit({ type: "addFirebase", payload: firebase });
      });
    },
    signInWithEmail(_, { email, password }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {})
        .catch((error) => {
          console.log(error);
        });
    },
    signUpWithEmail(_, { email, password, name }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          userCredential.user.updateProfile({
            displayName: name,
          });
          return userCredential.user;
        })
        .then((user) => {
          const database = firebase.database();
          database.ref("users/" + user.uid).set({
            balance: 0,
            accountNo:
              Math.floor(Math.random() * (99999999 - 11111111 + 1)) + 11111111,
            joinedDate: new Date().toString(),
            recentTransactions: [],
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {},
});
