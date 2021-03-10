/* eslint-disable no-unused-vars */
<template>
  <div class="playlist-container">
    <form @submit.prevent="handleSubmit">
      <h3>Create New Playlist</h3>
      <input
        type="text"
        required
        placeholder="Playlist Title"
        class="playlist-title"
        v-model="title"
      />
      <label>Add a Song</label>
      <input type="file" class="browse" @change="handleChange" />
      <div class="error">{{ fileError }}</div>
      <div class="error"></div>
      <button v-if="!isPending">Upload</button>
      <button v-else disabled>Working...</button>
    </form>
  </div>
</template>

<script>
import useStorage from "@/composables/useStorage";
import { ref } from "vue";
import getUser from "../../composables/getUser";
import useCollection from "../../composables/useCollection";
export default {
  setup() {
    // eslint-disable-next-line no-unused-vars
    const { filePath, url, uploadSong } = useStorage();
    const { error, addDoc } = useCollection("playlists");
    const { user } = getUser();

    const title = ref("");
    const file = ref(null);
    const fileError = ref(null);
    // const isPending =ref(false)

    const handleSubmit = async () => {
      if (file.value) {
        // ispending.value = true
        await uploadSong(file.value);
        await addDoc({
          title: title.value,
          userId: user.value.uid,
          userName: user.value.displayName,
          audioUrl: url.value,
          filePath: filePath.value,
          songs: [],
        });
        // ispending.value = false
        if (!error.value) {
          console.log("playlist added");
        }
      }
    };
    //  ALLOWED FILE TYPES
    const types = ["audio/mpeg", "audio/wav"];

    const handleChange = (e) => {
      const selected = e.target.files[0];
      console.log(selected);

      if (selected && types.includes(selected.type)) {
        file.value = selected;
        fileError.value = null;
      } else {
        file.value = null;
        fileError.value = "File type is not supported";
      }
    };

    return { title, handleSubmit, handleChange, fileError };
  },
};
</script>

<style scoped>
.playlist-container {
  height: 100vh;
  overflow: auto;
}
form {
  margin-top: 3em;
}
.playlist-title {
  height: 2.4vh;
  /* font-weight: bold; */
  border-bottom: 1px solid var(--secondary);
}
</style>
