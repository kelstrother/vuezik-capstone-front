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
// import firebase from "firebase";
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

    // const Login = () => {
    //   firebase
    //     .auth()
    //     .signInWithEmailAndPassword(email.value, password.value)
    //     .then(data => console.log(data))
    //     .catch(err => alert(err.message));
    // };

    // return {
    //   Login,
    //   email,
    //   password
    // };
  },
};
</script>

<style lang="scss" scoped>
.login {
  background: rgb(28, 72, 111);
  background: linear-gradient(
    180deg,
    rgba(28, 72, 111, 1) 0%,
    rgba(5, 55, 111, 1) 21%,
    rgba(30, 34, 40, 1) 87%
  );
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #f4f4f4;
  background-color: #2c3e50;
  height: 100vh;

  h1 {
    margin-bottom: 1em;
  }
  form {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    input {
      margin-bottom: 1em;
      border: none;
      border-radius: 5px;
    }
    .email-input {
      background-color: rgba(14, 22, 49, 0.3);
      color: #fff;
      padding: 0.9em;
    }
    .password-input {
      background-color: rgba(14, 22, 49, 0.3);
      color: #fff;
      padding: 0.9em;
    }
    .btn-li {
      margin: 1em 0;
      background-color: transparent;
      width: 100px;
      font-size: 1.2rem;
      color: rgba(230, 175, 38, 1);
    }
    .btn-li:hover {
      cursor: pointer;
      // background: var(--primary);
      border: 1px solid rgba(230, 175, 38, 0.7);
      color: rgba(230, 175, 38, 1);
    }
  }
  p {
    font-size: 0.9rem;
  }
  a {
    color: #f4f4f4;
  }
}
</style>
