<template>
  <div class="home">
    <!-- <p class="listener">{{ name }}</p> -->
    <Header />
    <!-- <router-link to="/about">About</router-link> -->
    <div class="console"></div>
    <br />
    <!-- <button class="btn-logout" @click="Logout">Logout</button> -->
  </div>
  <Navbar />
  <!-- <div class="nav">
    <Navbar />
  </div> -->
</template>

<script>
import Navbar from "../components/Navbar.vue";
import { ref, onBeforeMount } from "vue";
import firebase from "firebase";
import Header from '../components/Header'

export default {
  components: { Navbar, Header },
  setup() {
    const name = ref("");

    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      if (user) {
        name.value = user.email.split("@")[0];
      }
    });
    // const Logout = () => {
    //   firebase
    //     .auth()
    //     .signOut()
    //     .then(() => console.log("Signed Out"))
    //     .catch((err) => alert(err.message));
    // };
    return {
      // name,
      // Logout,
      // showLogin,
    };
  },
};
</script>

<style lang="scss" scoped>
p {
  text-align: left;
}
.home {
  background: rgb(28, 72, 111);
  background: linear-gradient(
    180deg,
    rgba(28, 72, 111, 1) 0%,
    rgba(5, 55, 111, 1) 21%,
    rgba(30, 34, 40, 1) 87%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #2c3e50;
  height: 90vh;
  color: #f4f4f4;

  a {
    color: #f4f4f4;
  }
  // .btn-logout {
  //   padding: 0.5em;
  //   margin-top: 4em;
  //   border: none;
  // }
}
</style>
