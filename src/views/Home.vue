<template>
  <div class="home">
    <div v-if="error" class="error">
      Could not find the playlists.
    </div>
    <div v-if="documents">
    <PlaylistView :playlists="documents" />
    </div>
  </div>
</template>

<script>
import PlaylistView from "../components/PlaylistView"
import getCollection from "../composables/getCollection";


export default {
  name: "Home",
  components: { PlaylistView },
  setup() {
    const { error, documents } = getCollection("playlists");

    return { error, documents };
  },
};
</script>

<style lang="scss" scoped>
p {
  text-align: left;
}
.home {
  // background: rgb(28, 72, 111);
  // background: linear-gradient(
  //   180deg,
  //   rgba(28, 72, 111, 1) 0%,
  //   rgba(5, 55, 111, 1) 21%,
  //   rgba(30, 34, 40, 1) 87%
  // );
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #2c3e50;
  height: 90vh;
  color: #f4f4f4;

  a {
    color: #f4f4f4;
  }
}
// .btn-logout {
//   padding: 0.5em;
//   margin-top: 4em;
//   border: none;
// }
</style>
