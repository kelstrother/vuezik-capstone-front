/* eslint-disable no-undef */ /* eslint-disable no-unused-vars */
<template>
  <div class="playlist-container">
    <form @submit.prevent="handleSubmit">
      <h3>Create New Playlist</h3>
      <label>Name your Playlist</label>
      <input
        type="text"
        required
        placeholder="Playlist Title"
        class="playlist-title"
        v-model="title"
      />
      <label>Upload an Image or Song</label>
      <input type="file" class="browse" @change="handleChange" />
      <div class="error">{{ fileError }}</div>
      <div class="error"></div>
      <button v-if="!isPending">Upload</button>
      <button v-else disabled>Working...</button>
    </form>
  </div>
  <Navbar />
</template>

<script>
import { ref } from "vue";
import useStorage from "@/composables/useStorage";
import useCollection from "@/composables/useCollection";
import getUser from "@/composables/getUser";
import { timestamp } from "@/firebase/config";
import { useRouter, useRoute } from "vue-router";


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
    const isPending = ref(false);
    const router = useRouter;

    const handleSubmit = async () => {
      if (file.value) {
        isPending.value = true;
        // eslint-disable-next-line no-undef
        await uploadSong(file.value);
        // console.log("song uploaded, url: ", url.value);
        const res = await addDoc({
          title: title.value,
          userId: user.value.uid,
          userName: user.value.displayName,
          songUrl: url.value,
          filePath: filePath.value,
          songs: [],
          createdAt: timestamp(),
        });
        isPending.value = false;
        // eslint-disable-next-line no-undef
        if (!error.value) {
          router.push({ name: "ListDetails", params: { id: res.id } });
        }
      }
    };

    const types = ["audio/mpeg", "audio/wav", "image/jpeg", "image/png"];

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

    return {
      title,
      handleSubmit,
      handleChange,
      fileError,
      isPending,
    };
  },
};
</script>

<style scoped>
.playlist-container {
  margin-top: -20em;
}
input {
  box-shadow: 2px 2px 15px rgba(41, 39, 39, 0.5);
}
.playlist-title {
  height: 4.4vh;
  border-radius: 5px;
  border: none;
}
button {
  box-shadow: 2px 2px 15px rgba(41, 39, 39, 0.5);
  border: 1px solid #ff9500;
  margin: 1em 0;
  background-color: transparent;
  width: 100px;
  font-size: 1.2rem;
}
button:hover {
  cursor: pointer;
  color: #ff9500;
}
</style>
