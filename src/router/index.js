import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("@/views/Home_Page.vue"),
  },
  {
    name: "Login",
    path: "/login",
    component: () => import("@/views/Login_Page.vue"),
  },
  {
    name: "Register",
    path: "/register",
    component: () => import("@/views/Register_Page.vue"),
  },
];

export default createRouter({
  routes,
  history: createWebHashHistory(),
});
