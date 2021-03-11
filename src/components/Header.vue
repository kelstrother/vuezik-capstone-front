<template>
  <header class="header">
    <img src="../assets/background.svg" alt="vuezic logo" />
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
img {
  margin-top: 2em;
  height: 40em;
  padding: 0;
}
</style>
