import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import { sync } from "vuex-router-sync";
import store from "@/store/store";

Vue.config.productionTip = false;

sync(store, router);

// router.beforeEach((to, from, next) => {
//     if (!store.state.isUserLoggedin && (to.path === '/dashboard' || to.path === "/registerplan")) {
//         next('/login');
//     }
//     else {
//         next();
//     }
// });

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
