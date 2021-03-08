<template>
  <div>
    <div id="nav">
      <router-link to="/songlist">Songs</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/about">About</router-link> |
    </div>
  <router-view />
  </div>
</template>

<script>
import { onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import firebase from "firebase";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          router.replace('/login')
        } else if (route.path == "/login" || route.path == "/register") {
          router.replace('/')
        }
      });
    });
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  background: rgb(28, 72, 111);
  background: linear-gradient(
    0deg,
    rgba(28, 72, 111, 1) 8%,
    rgba(5, 55, 111, 1) 31%,
    rgba(30, 34, 40, 1) 97%
  );
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#nav a {
  color: #fff;
  text-decoration: none;
  padding: 1em;
}
#nav a.router-link-exact-active {
  color: gold;
}
</style>
