import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/home/Index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("@/views/blog/Index.vue")
  },
  {
    path: "/photograph",
    name: "photograph",
    component: () => import("@/views/photograph/Index.vue")
  },
  {
    path: "/vita",
    name: "vita",
    component: () => import("@/views/vita/Index.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
export default router;
