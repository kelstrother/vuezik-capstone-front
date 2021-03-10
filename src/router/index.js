/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from "vue-router";
import "../firebase/config.js";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import CreatePlaylist from "../views/playlists/CreatePlaylist.vue";
import PlaylistView from "../components/PlaylistView.vue";
import Main from "../views/Main.vue";
// import About from "../views/About.vue"

// route guard
import { projectAuth } from '../firebase/config'

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (!user) {
    next({ name: "Login" })
  } else {
    next()
  }
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: requireAuth
  },
  {
    path: "/main",
    name: "Main",
    component: Main
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/playlists/",
    name: "PlaylistView",
    component: PlaylistView
  },
  {
    path: "/playlists/create",
    name: "CreatePlaylist",
    component: CreatePlaylist,
    beforeEnter: requireAuth
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: About
  // }
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
  routes
});

export default router;
