import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap/dist/js/bootstrap.js'
import { createApp } from "vue";
import App from "./App.vue";
import VueCookies from "vue-cookies"
import router from "./router";
import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.mount("#app");
app.use(VueCookies);
