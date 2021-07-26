<template>
  <header class="header">
    <img class="logo" src="../assets/vuezic-logo.png" alt="vuezic logo" />
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  width: 100vw;
  display: flex;
  place-items: center;
  justify-content: center;
  align-items: center;
}
.logo {
  width: 85vw;
  max-width: 400px;
  height: auto;
  padding-top: 2em;
  display: flex;
}
/* @media screen and (min-width: 700px) {
  .logo {
}
} */
</style>
