<template>
  <nav v-if="user" class="nav-container">
    <p class="username">{{ user.displayName }}</p>
    <p class="email">{{ user.email }}</p>
    <button class="btn" @click="handleClick">Logout</button>
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

<style scoped>
.nav-container {
  background: transparent;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.btn,
p {
  margin-bottom: 1em;
}
</style>
