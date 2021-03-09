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
      <button>Create</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const title = ref("");
    const file = ref("");
    const fileError = ref(null);

    const handleSubmit = () => {
      if (file.value) console.log(title.value, file.value);
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
