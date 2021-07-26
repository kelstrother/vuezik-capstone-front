/* eslint-disable no-unused-vars */
<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="handleSubmit">
      <input
        class="reg-input"
        type="text"
        required
        placeholder="Username"
        v-model="displayName"
      />
      <input
        class="reg-input"
        type="text"
        placeholder="Email"
        v-model="email"
      />
      <input
        class="reg-input"
        type="password"
        placeholder="Password"
        v-model="password"
      />
      <div class="error">{{ error }}</div>
      <button v-if="!isPending">Register</button>
      <button v-if="isPending" disabled>Loading</button>
      <p>
        Already have an account?
        <router-link to="/login"><strong>Login Here</strong></router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import useRegister from "../composables/useRegister";

export default {
  setup() {
    // eslint-disable-next-line no-unused-vars
    const { error, register, isPending } = useRegister();
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await register(email.value, password.value, displayName.value);
      if (!error.value) {
        console.log("user registered");
      }
    };
    return {
      displayName,
      email,
      password,
      handleSubmit,
      error,
      isPending,
    };
  },
};
</script>

<style lang="scss" scoped>
.register {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5em;
  padding: 0;
  box-sizing: border-box;
  color: #f4f4f4;

  form {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    input {
      margin-bottom: 1em;
      padding: 0.5em;
      border: none;
      border-radius: 5px;
    }
    .reg-input {
      color: black;
    }
    .password-input {
      color: black;
    }
    button {
      border: 1px solid #ff9500;
      margin: 1em 0;
      background-color: transparent;
      width: 100px;
      font-size: 1.2rem;
    }
    button:hover {
      cursor: pointer;
      color: #ff9500;
    }
  }
  p {
    padding: 1rem;
    display: inline-block;
    font-size: 0.9rem;
  }
  a {
    color: #f4f4f4;
  }
  a:hover {
    color: rgba(230, 175, 38, 1);
  }
}
</style>
