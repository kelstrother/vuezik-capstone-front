<template>
  <nav v-if="user" class="nav">
    <p class="username">{{ user.displayName }} |</p>
    <router-link to="/">Playlists |</router-link>
    <!-- <router-link to="/vuezicplayer">Vuezic Player |</router-link> -->
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
      handleClick
    };
  },
};
</script>

<style scoped>
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
  font-size: 0.8rem;
}
.username {
  display: none;
  color: rgb(230, 175, 38);
}
.btn-lo {
  border: 1px solid #ff9500;
  margin: 1em 0;
  background-color: transparent;
  width: 60px;
  font-size: 0.8rem;
  font-weight: 200;
}
.btn-lo:hover {
  cursor: pointer;
  color: #ff9500;
}
@media screen and (min-width: 700px) {
  a {
    font-size: 1.1rem;
  }
  .username {
    display: flex;
    font-size: 1.1rem;
  }
  .btn-lo {
    width: 100px;
  }
}
@media screen and (min-width: 700px) {
  .nav {
    justify-content: space-around;
  }
}
@media screen and (min-width: 1440px) {
  .username {
    font-size: 1.3rem;
  }
  a {
    font-size: 1.3rem;
  }
  .btn-lo {
    width: 150px;
    font-size: 1.2rem;

  }
}
</style>
