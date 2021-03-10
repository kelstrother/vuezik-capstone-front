<template>
  <nav v-if="user" class="nav">
    <p class="username">{{ user.displayName }}</p>
    <p class="email">{{ user.email }}</p>
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

<style scoped>
.nav {
  background: rgba(8, 8, 8, 0.5);
  min-height: 200px;
  /* height: auto; */
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
.btn-lo {
   background-color: rgba(5, 55, 111, 1);
}
.btn-lo:hover {
   cursor: pointer;
   color: var(--accent);
}
.btn-lo,
p {
  margin-bottom: 1em;
}
</style>
