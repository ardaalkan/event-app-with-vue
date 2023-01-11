import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store";

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
  {
    name: "Products",
    path: "/:products",
    component: () => import("@/views/Products_Page.vue"),
  },
  {
    name: "Detail",
    path: "/:products/:id",
    component: () => import("@/views/Products_Detail_Page.vue"),
  },
  {
    name: "Cart",
    path: "/cart",
    component: () => import("@/views/Cart_Page.vue"),
  },
  {
    name: "Favorite",
    path: "/favorite",
    component: () => import("@/views/Favorites_Page.vue"),
  },
  {
    name: "About",
    path: "/about",
    component: () => import("@/views/About_Page.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
  const authRequiredRoutes = ["Home"];
  const authNotRequiredRoutes = ["Login", "Register"];
  const _isAuthenticated = store.getters._isAuthenticated;

  if (authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated) next(false);

  if (authRequiredRoutes.indexOf(to.name) > -1) {
    if (_isAuthenticated) next();
    else next({ name: "Login" });
  } else {
    next();
  }
  // console.log("to", to);
  // console.log("from", from);
});

export default router;
