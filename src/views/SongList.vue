<template>
  <div class="songlist-container">
    <h1>Songs</h1>
    <div v-for="song in songs" :key="song.id" class="song-map">
      <h3 class="title">{{ song.title }}</h3>
      <p class="artist">Artist: <span class="spanArt">{{ song.artist }}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      songs: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/songs")
      .then((res) => res.json())
      .then((data) => (this.songs = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>

.songlist-container {
  margin-top: 3em;
}
.songlist-container h1 {
  color: goldenrod;
}
.song-map {
  color: rgb(209, 209, 209);
}
.title {
  margin: .7em 0;
  font-size: 1.7rem;
}
.artist {
  color: rgb(165, 163, 163);
}
.spanArt {
  font-weight: bold;
  margin-left: .4em;
  font-size: 1.2rem;
}
</style>
