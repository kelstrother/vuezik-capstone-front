/* eslint-disable no-unused-vars */
<template>
  <div class="register">
    <form @submit.prevent="handleSubmit">
      <input
        class="email-input"
        type="text"
        required
        placeholder="Username"
        v-model="displayName"
      />
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
      <input class="btn" type="submit" value="Register" />
      <p>
        Already have an account?
        <router-link to="/login"><strong> Login Here</strong></router-link>
      </p>
    </form>
  </div>
</template>

<script>
// import firebase from "firebase";
import { ref } from "vue";
import useRegister from "../composables/useRegister";

export default {
  setup() {
    // eslint-disable-next-line no-unused-vars
    const { error, register } = useRegister();

    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await register(email.value, password.value, displayName.value);
      console.log("user registered")
    };
    // const Register = () => {
    //   firebase
    //     .auth()
    //     .createUserWithEmailAndPassword(displayName.value, email.value, password.value)
    //     .then((user) => {
    //       console.log(user.displayName);
    //       // alert("Welcome, ", user.userName, "!");
    //     })
    //     .catch((err) => alert(err.message));
    // };
    return {
      // Register,
      displayName,
      email,
      password,
      handleSubmit,
      error
    };
  },
};
</script>

<style lang="scss" scoped>
.register {
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
      padding: 0.5em;
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
      width: 25%;
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
