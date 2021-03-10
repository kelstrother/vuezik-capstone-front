<template>
  <div class="pl-container" v-for="playlist in playlists" :key="playlist.id">
    <div class="single">
      <div class="thumbnail">
        <img :src="playlist.songUrl" />
      </div>
      <div class="info">
        <h3>{{ playlist.title }}</h3>
        <p>Created By: {{ playlist.userName }}</p>
      </div>
      <div class="song-count">
        <p>{{ playlist.songs.length }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["playlists"],
};
</script>

<style>
.pl-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.single {
   cursor: pointer;
}
</style>
