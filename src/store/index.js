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
    recentTransctions: [
      
    ],
    recentLoans: [],
  },
  getters: {
    isAuthenticated: (state) => {
      return state.isAuthenticated;
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
    addUserDetails(state, { payload }) {
      state.uid = payload.uid;
      state.name = payload.name;
      state.isAuthenticated = true;
    },
  },
  actions: {
    signIn({ commit }) {
      console.log(config);
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
        .then((userCredential) =>
          userCredential.user.updateProfile({
            displayName: name,
          })
        )
        .then(() => {
          commit({ type: "changeAuthState" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {},
});
