<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="Login">
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
      <input class="btn" type="submit" value="Login" />
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
import firebase from "firebase";

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const Login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then(data => console.log(data))
        .catch(err => alert(err.message));
    };

    return {
      Login,
      email,
      password
    };
  }
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
    .btn {
      padding: 0.5em;
      margin-top: 1em;
      border: none;
      width: 13%;
      border-radius: 5px;
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
