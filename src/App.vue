<template>
  <div>
    <router-view />
    <!-- <div id="nav">
      <router-link to="/"></router-link>
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/about">About</router-link> |
    </div> -->
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
          router.replace("/login");
        } else if (route.path == "/login" || route.path == "/register") {
          router.replace("/");
        }
      });
    });
  },
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
// #nav {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   height: 7vh;
// }
// #nav a {
//   font-size: 1.3vh;
//   color: #fff;
//   text-decoration: none;
//   padding: 1em;
// }
// #nav a.router-link-exact-active {
//   color: gold;
// }
</style>
