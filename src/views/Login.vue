<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit">
      <input
        class="email-input"
        type="text"
        placeholder="Email"
        v-model="email"
      />
      <input
        class="password-input"
        type="password"
        placeholder="Password"
        v-model="password"
      />
      <div class="error">{{ error }}</div>
      <button class="btn-li" v-if="!isPending">Login</button>
      <button class="btn-li" v-if="isPending" disabled>Loading..</button>
      <p>
        Need an account?
        <router-link to="/register"
          ><strong> Register Here</strong></router-link
        >
      </p>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import useLogin from "../composables/useLogin";

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    // eslint-disable-next-line no-unused-vars
    const { error, login, isPending } = useLogin();

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        console.log("user logged in");
      }
    };
    return { email, password, handleSubmit };
  },
};
</script>

<style lang="scss" scoped>
.login {
  text-align: center;
  margin-top: 5em;
  padding: 0;
  box-sizing: border-box;
  color: #f4f4f4;

  form {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    max-width: 400px;
    align-items: center;

    input {
      margin-bottom: 1em;
      border: none;
      border-radius: 5px;
    }
    .email-input {
      padding: 0.5em;
    }
    .password-input {
      padding: 0.5em;
    }
    .btn-li {
      border: 1px solid #ff9500;
      margin: 1em 0;
      background-color: transparent;
      width: 100px;
      font-size: 1.2rem;
    }
    .btn-li:hover {
      cursor: pointer;
      color: #ff9500;
    }
  }
  p {
    font-size: 0.9rem;
  }
  a {
    color: #f4f4f4;
  }
}

@media screen and (min-width: 700px) {
  .login {
    margin-top: 8em;
  }
}
@media screen and (min-width: 1440px) {
  .login {
    form {
      max-width: 600px;
    }
  }
}
</style>
