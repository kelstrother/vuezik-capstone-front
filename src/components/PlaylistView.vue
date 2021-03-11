<template>
  <div class="pl-container" v-for="playlist in playlists" :key="playlist.id">
    <router-link :to="{ name: 'ListDetails', params: { id: playlist.id } }">
      <div class="single">
        <div class="thumbnail">
          <img class="pl-img" :src="playlist.songUrl" />
        </div>
      </div>
      <div class="info">
        <h3>{{ playlist.title }}</h3>
        <p>Created By: {{ playlist.userName }}</p>
        <p># of songs: {{ playlist.songs.length }}</p>
      </div>
      <div class="song-count"></div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["playlists"],
};
</script>

<style>
.pl-container {
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.single {
  cursor: pointer;
}
.info {
  background-color: rgba(41, 39, 39, 0.3);
  backdrop-filter: blur(2px);
  margin: 1.5em 0 4em 0;
  width: 60%;
  border-radius: 5px;
  padding: 2em;
  box-shadow: 3px 2px 15px rgba(41, 39, 39, 0.3);
}
.pl-img {
  width: 100%;
  transform: scale(0.97);
  box-shadow: 2px 2px 15px rgba(41, 39, 39, 0.3);
  transition: transform 0.25s ease;
}
.pl-img:hover {
  transform: scale(1);
}
h3 {
  font-size: 1.5rem;
  padding: 0.5em;
}
p {
  padding: 0.5em;
}
</style>
