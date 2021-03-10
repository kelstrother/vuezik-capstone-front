<template>
  <nav v-if="user" class="nav">
    <p class="username">{{ user.displayName }}</p>
    <router-link to="/">Music</router-link>
    <router-link to="/playlists">Playlists</router-link>
    <router-link to="/playlists/create">Add Playlist</router-link>
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
  background-color: rgb(45, 45, 87);
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100vw;
}
.username {
  color: rgb(230, 175, 38);
  font-size: 1.1rem;
}
.btn-lo {
  background-color: rgba(214, 163, 34, 0.8);
  width: 100px;
  font-size: 1.2rem;
  color: #333;
}
.btn-lo:hover {
  cursor: pointer;
  background: var(--primary);
  border: 1px solid rgba(230, 175, 38, 0.7);
  color: rgba(230, 175, 38, 1);
}
</style>
