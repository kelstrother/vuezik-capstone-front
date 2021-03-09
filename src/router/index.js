/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from "vue-router";
import "../firebase/config.js";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import CreatePlaylist from "../views/playlists/CreatePlaylist.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/playlists/create",
    name: "CreatePlaylist",
    component: CreatePlaylist,
  },
  {
    path: "/about",
    name: "About",
    component: Home,
  },
  // {
  //   path: "/songlist",
  //   name: "SongList",
  //   component: SongList
  // },
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
