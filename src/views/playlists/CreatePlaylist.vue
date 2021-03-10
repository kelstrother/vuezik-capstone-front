/* eslint-disable no-undef */ /* eslint-disable no-unused-vars */
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
      <button>Upload</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import useStorage from "@/composables/useStorage";
import useCollection from "@/composables/useCollection";
import getUser from "@/composables/getUser";
import { timestamp } from "@/firebase/config";

export default {
  setup() {
    // eslint-disable-next-line no-unused-vars
    const { filePath, url, uploadSong } = useStorage();
    // eslint-disable-next-line no-unused-vars
    const { error, addDoc } = useCollection("playlists");
    // eslint-disable-next-line no-unused-vars
    const { user } = getUser();
    const title = ref("");
    const file = ref(null);
    const fileError = ref(null);
    // const isPending =ref(false);

    const handleSubmit = async () => {
      if (file.value) {
        // eslint-disable-next-line no-undef
        await uploadSong(file.value);
        // console.log("song uploaded, url: ", url.value);
        await addDoc({
          title: title.value,
          userId: user.value.uid,
          userName: user.value.displayName,
          songUrl: url.value,
          filePath: filePath.value,
          songs: [],
          createdAt: timestamp()
        })
        // eslint-disable-next-line no-undef
        if (!error.value) {
          console.log("playlist added");
        }
      }
    };
    //  ALLOWED FILE TYPES
    const types = ["audio/mpeg", "audio/wav", "image/jpeg", "image/png"];
    // "audio/mpeg"

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

    return { title, handleSubmit, handleChange, fileError, timestamp };
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
