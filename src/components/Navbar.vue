<template>
  <nav v-if="user" class="nav">
    <p class="username">{{ user.displayName }} |</p>
    <router-link to="/">Playlists |</router-link>
    <router-link to="/vuezicplayer">Vuezic Player |</router-link>
    <router-link to="/playlists/create">Add Playlist |</router-link>
    <button class="btn-lo" @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";
import { ref } from "vue";

export default {
  name: "Navbar",
  setup() {
    const name = ref("");
    const { logout, error } = useLogout();
    const { user } = getUser();

    const handleClick = async () => {
      await logout();
      if (!error.value) {
        console.log("user logged out");
      }
    };

    return {
      name,
      user,
      handleClick,
    };
  },
};
</script>

<style>
.nav {
  backdrop-filter: blur(2px);
  background: rgba(3, 0, 0, 0.3);
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100vw;
}
a {
  font-size: 1.2rem;
}
.username {
  color: rgb(230, 175, 38);
  font-size: 1.1rem;
}
.btn-lo {
  border: 1px solid #ff9500;
  margin: 1em 0;
  background-color: transparent;
  width: 100px;
  font-size: 1.2rem;
}
.btn-lo:hover {
  cursor: pointer;
  color: #ff9500;
}
</style>
