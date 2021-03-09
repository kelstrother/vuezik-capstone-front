<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="Username" v-model="displayName" />
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <button class="btn">Register</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useRegister from '../composables/useRegister'

export default {
  setup() {
    const { error, register } = useRegister()

    // refs
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await register(email.value, password.value, displayName.value)
    };

    return { displayName, email, password, handleSubmit };
  },
};
</script>

<style></style>
