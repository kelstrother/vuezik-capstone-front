<template>
    <router-view />
  <div class="content">
    <!-- <img src="./assets/background.svg" alt="vuezic logo" /> -->
    <!-- <Header /> -->
    <Navbar />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import { onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import firebase from "firebase";
// import Header from "./components/Header";
// import Home from "./views/Home"

export default {
  components: { Navbar },
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
.content {
  margin: 0 auto;
  // max-width: 2000px;
  padding: 0;
  height: 100vh;
}
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  // text-align: center;
}
</style>
