/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import Login from "../views/Login.vue";
// import Register from "../views/Register.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/songlist",
    name: "SongList",
    component: () => import("../views/SongList.vue"),
  },
  // {
  //   path: '/profile',
  //   name: 'Profile',
  //   component: () => import('../views/Profile.vue')
  // },
  // {
  //   path: '/upload',
  //   name: 'Upload',
  //   component: () => import('../views/Upload.vue')
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
