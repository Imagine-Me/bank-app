import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/tailwind.css";

router.beforeEach((to, __, next) => {
  if (
    !store.getters.isAuthenticated &&
    to.name !== "login" &&
    to.name !== "signup"
  ) {
    next({ name: "login" });
  } else next();
});

createApp(App).use(store).use(router).mount("#app");
