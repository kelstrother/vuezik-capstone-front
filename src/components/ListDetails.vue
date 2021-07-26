<template>
  <div class="error" v-if="error">{{ error }}</div>
  <div class="details-container" v-if="playlist">
    <!-- LIST INFO -->
    <div class="list-info">
      <h2 class="list-title">{{ playlist.title }}</h2>
      <p class="username">Created by: {{ playlist.userName }}</p>
    </div>
    <div class="list-img">
      <img :src="playlist.songUrl" />
    </div>
    <!-- SONGS BELOW -->
    <div class="song-list">
      <div class="empty" v-if="!playlist.songs.length">
        <h2>This playlist is sad and lonely...</h2>
        <h3>Add some songs!</h3>
      </div>
      <div class="single-song" v-for="song in playlist.songs" :key="song.id">
        <div class="song-details">
          <h4>{{ song.title }}</h4>
          <p>{{ song.artist }}</p>
        </div>
        <button>Remove</button>
      </div>
    </div>
    <div class="add-song-form">
      <AddSong :playlist="playlist" />
    </div>
  </div>
</template>

<script>
import AddSong from "../components/AddSong";
import getDocument from "@/composables/getDocument";

export default {
  props: ["id"],
  components: { AddSong },
  setup(props) {
    const { error, document: playlist } = getDocument("playlists", props.id);

    return { error, playlist };
  },
};
</script>

<style>
.error {
  font-size: 2rem;
}
.details-container {
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  margin-top: -22em;
}
.list-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  margin-left: 3em;
  padding-right: 6em;
}
.list-title, .username {
  text-align: left;
}
.empty {
  grid-column: 2/3;
  grid-row: 2/3;
  text-align: center;
}
.single-song {
  grid-column: 1/2;
  grid-row: 2/3;
}
.song-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
img {
  height: 80%;
  width: 70%;
  border-radius: 15px;
}
.song-list {
  display: flex;
  flex-direction: row;
}
.add-song-form {
  grid-column: 1/2;
  grid-row: 2/3;
}
p {
  text-align: left;
}
</style>
