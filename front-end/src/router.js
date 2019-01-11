import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import About from "./views/About.vue";
import Connect from "./views/Connect.vue";
import Plan from "./views/Plan.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            component: Dashboard
        },
        {
            path: "/about",
            component: About
        },
        {
            path: "/connect",
            component: Connect
        },
        {
            path: "/plan/:id",
            component: Plan
        },
    ]
});
