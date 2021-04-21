import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "dashboard",
    children: [
      {
        path: "/",
        name: "dashboard",
        redirect: "overview",
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
