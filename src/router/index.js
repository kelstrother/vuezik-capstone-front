/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from "vue-router";
import "../firebase/config.js";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import CreatePlaylist from "../views/playlists/CreatePlaylist.vue";
import PlaylistView from "../components/PlaylistView.vue";
import ListDetails from "../components/ListDetails.vue";
import VuezicMachine from "../components/VuezicMachine.vue"

// route guard
// import { projectAuth } from '../firebase/config'

// const requireAuth = (to, from, next) => {
//   let user = projectAuth.currentUser
//   if (!user) {
//     next({ name: "Login" })
//   } else {
//     next()
//   }
// }

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
  },
  {
    path: "/playlists/:id",
    name: "ListDetails",
    component: ListDetails,
    props: true,
  }
  // {
  //   path: "/vuezicplayer",
  //   name: "VuezicMachine",
  //   component: VuezicMachine,
  // }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
