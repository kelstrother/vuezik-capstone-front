import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyC9cXtIbxD1BmJO_xdf0c_ZP-06sBCkUBw",
  authDomain: "user-login-e9b66.firebaseapp.com",
  projectId: "user-login-e9b66",
  storageBucket: "user-login-e9b66.appspot.com",
  messagingSenderId: "198164958358",
  appId: "1:198164958358:web:bbc46910d5f968bae846b7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(router)
  .mount("#app");
