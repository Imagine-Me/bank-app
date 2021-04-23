import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/",
        name: "dashboard",
        component: () => import("../views/Dashboard"),
        children: [
          {
            path: "overview",
            name: "overview",
            component: () => import("../views/Overview"),
          },
          {
            path: "deposit",
            name: "deposit",
            component: () => import("../views/Deposit"),
          },
          {
            path: "withdraw",
            name: "withdraw",
            component: () => import("../views/Withdraw"),
          },
        ],
      },
      {
        path: "user",
        name: "user",
        component: () => import("../views/User"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
