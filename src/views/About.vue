<template>
  <div class="about">
    <h1>Vuezik</h1>
    <h2>Song List</h2>
    <div v-for="song in songs" :key="song.id" class="songmap">
      <h3>{{ song.title }}</h3>
    </div>
  </div>
</template>
<script>
// import { ref, onMounted } from "vue";
export default {
  data() {
    return {
      songs: []
    };
  },
  mounted() {
    fetch("http://localhost:3000/songs")
      .then((res) => res.json())
      .then((data) => (this.songs = data))
      .catch((err) => console.log(err.message));
  }
};
</script>
<style scoped>
.about {
  height: 100vh;
  color: #f4f4f4;
}
</style>
