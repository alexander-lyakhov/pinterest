import Vue from "vue";
import App from "@/app.vue";
import router from "@/router";
import store from "@/store";

import '@/styles/reset.css';
import '@/styles/global.scss';

Vue.config.productionTip = false;

window.vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
