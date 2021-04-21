import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "overview",
    children: [
      {
        path: "overview",
        name: "overview",
        component: () =>import("../views/Overview"),
      },
      {
        path: "user",
        name: "user",
        component: () =>import("../views/User"),
      },
    ],
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
