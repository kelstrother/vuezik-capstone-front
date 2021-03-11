<template>
  <main>
    <section class="player">
      <h2 class="song-title">{{ current.title }}</h2>
      <h4>{{ current.artist }}</h4>
      <div class="control">
        <button class="prev" @click="prev">Prev</button>
        <button class="play" v-if="!isPlaying" @click="play">Play</button>
        <button class="pause" v-else @click="pause">Pause</button>
        <button class="next" @click="next">Next</button>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      current: {},
      index: 0,
      songs: [
        {
          title: "Hey Billy",
          artist: "The Egg",
          src: require("../assets/Hey_Billy.mp3"),
        },
        {
          title: "Completion",
          artist: "Rock Walla",
          src: require("../assets/Completion.mp3"),
        },
        {
          title: "Wave Spell",
          artist: "STS9",
          src: require("../assets/Wave_Spell.mp3"),
        },
      ],
      player: new Audio(),
    };
  },
  methods: {
    play(song) {
      if (typeof song.src != "undefined") {
        this.current = song;
        this.player.src = this.current.src;
      }
      this.player.play();
      this.player.addEventListener(
        "ended",
        function() {
          this.index++;
          if (this.index > this.songs.length - 1) {
            this.index = 0;
          }
          this.current = this.songs[this.index];
          this.play(this.current);
        }.bind(this)
      );
      this.isPlaying = true;
    },
    pause() {
      this.player.pause();
      this.isPlaying = false;
    },
    next() {
      this.index++;
      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
    prev() {
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.length - 1;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
  },
  created() {
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
    // this.player.play();
  },
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  height: 10vh;
}
.player {
  border: 5px solid #ff9500;
  border-radius: 10px;
  box-shadow: 10px 3px 15px rgba(41, 39, 39, 0.7);
  background: #0e80c2;
  display: flex;
  width: 40rem;
  height: 15rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -20em;
  padding: 0;
}
.song-title {
   margin-top: 1em;
   border: 3px groove rgba(206, 171, 19, 1);
   box-shadow: 2px 2px 10px rgba(41, 39, 39, 0.3);
   width: 60%;
   height: 80px;
   text-align: center;
   justify-content: center;
  color: rgba(206, 171, 19, 1);
  font-size: 2rem;
}
h4 {
  color: rgba(206, 171, 19, 1);
  margin-top: 1.5em;
}
button {
  border: none;
  background: none;
  outline: none;
  appearance: none;
  margin: 3em 3em 0 3em;
}
.prev {
   color: black;
   font-size: 1.3rem;
}
.play {
   color: black;
   font-size: 1.3rem;
}
.next {
   color: black;
   font-size: 1.3rem;
}
</style>
