import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap/dist/js/bootstrap.js'
import { createApp } from "vue";
import App from "./App.vue";
import VueCookies from "vue-cookies"
import router from "./router";
import "./assets/main.css";
import * as mdb from 'mdb-ui-kit'; // lib
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// icon import
import { faUserSecret, faBell, faCartShopping, faChevronRight, faChevronLeft, faGaugeHigh, faChartArea, faList, faUsers, faChartBar, faBars, faSearch, faFillDrip, faLayerGroup, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faBell, faCartShopping, faChevronRight, faChevronLeft, faGaugeHigh, faChartArea, faList, faUsers, faChartBar, faBars, faSearch, faFillDrip, faLayerGroup, faCaretDown, faCaretUp)
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.mount("#app");
app.use(VueCookies);
