<template>
  <header class="header-container">
    <Header class="h-comp"/>
  </header>
    <router-view />
  <div class="content">
    <Navbar />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import { onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import firebase from "firebase";
import Header from "./components/Header";


export default {
  components: { Navbar, Header },
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
.header-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.h-comp {
  margin-left: -7em;
}
.z-comp {
  margin: 2em 3em 0 0;
}
.content {
  margin: 0 auto;
  padding: 0;
  height: 100vh;
}
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
