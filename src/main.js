import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/style.css";
import NavbarView from "../src/components/Home/NavbarView.vue";
import FooterView from "../src/components/Home/FooterView.vue";
import { appAxios } from "./utils/appAxios";
import store from "./store";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import Toaster from "@meforma/vue-toaster";

const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
});
app.component("NavbarView", NavbarView);
app.component("FooterView", FooterView);
app.use(router);
app.use(store);
app.use(vuetify);
app.use(Toaster);
app.mount("#app");
// createApp(App).use(vuetify).mount('#app')
app.config.globalProperties.$appAxios = appAxios;
