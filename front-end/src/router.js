import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import About from "./views/About.vue";
import Plan from "./views/Plan.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
import RegisterPlan from "./views/RegisterPlan.vue"

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/dashboard",
            component: Dashboard
        },
        {
            path: "/about",
            component: About
        },
        {
            path: "/plan/:id",
            component: Plan
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/signup",
            component: Signup
        },
        {
            path: "/registerplan",
            component: RegisterPlan
        }
    ]
});
