import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        name: "Home",
        path: "",
        component: () => import ("@/views/Home.vue")
    },
    {
        name: "Login",
        path: "/login",
        component: () => import ("@/views/Login.vue")
    },
    {
        name: "Register",
        path: "/register",
        component: () => import ("@/views/Register.vue")
    },
]

export default createRouter({
    routes, 
    history : createWebHashHistory()
})

