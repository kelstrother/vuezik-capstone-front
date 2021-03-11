<template>
  <div class="add-song">
    <form @submit.prevent="handleSubmit">
      <h2>Add a Song</h2>
      <input type="text" placeholder="Song Title" required v-model="title" />
      <input type="text" placeholder="Artist" required v-model="artist" />
      <button class="btn">Add</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import useDocument from "../composables/useDocument";

export default {
  props: ["playlist"],
  setup(props) {
    const title = ref("");
    const artist = ref("");
    const { updateDoc } = useDocument("playlists", props.playlist.id);

    const handleSubmit = async () => {
      const newSong = {
        title: title.value,
        artist: artist.value,
        id: Math.floor(Math.random() * 100000),
      };
      await updateDoc({
        songs: [...props.playlist.songs, newSong],
      });
      title.value = "";
      artist.value = "";
    };
    return { title, artist, handleSubmit };
  },
};
</script>

<style scoped>
.add-song {
  text-align: center;
  margin-top: 3.5rem;
}
form {
  max-width: 400px;
  text-align: left;
}
input {
  padding: .5em;
  border: none;
  border-radius: 5px;
  color: black;
}
.btn {
  border: 1px solid #ff9500;
  margin: 1em 0;
  background-color: transparent;
  width: 100px;
  font-size: 1.2rem;
}
.btn:hover {
  cursor: pointer;
  color: #ff9500;
}
</style>
