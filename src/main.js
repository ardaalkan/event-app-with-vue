import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/style.css";
import NavbarView from "../src/components/Home/NavbarView.vue";
import FooterView from "../src/components/Home/FooterView.vue";
import { appAxios } from "./utils/appAxios";
import store from "./store";

const app = createApp(App);
app.component("NavbarView", NavbarView);
app.component("FooterView", FooterView);
app.use(router);
app.use(store);
app.mount("#app");
app.config.globalProperties.$appAxios = appAxios;
