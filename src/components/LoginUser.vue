/* eslint-disable no-unused-vars */
<template>
  <h1>User Login</h1>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <button class="btn">Register</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useLogin from "../composables/useLogin";

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    // eslint-disable-next-line no-unused-vars
    const { error, login } = useLogin();

    const handleSubmit = () => {
      console.log(email.value, password.value);
    };
    return { email, password, handleSubmit };
  },
};
</script>

<style></style>
