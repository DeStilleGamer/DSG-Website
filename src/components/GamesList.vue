<script setup>
import games from '@/assets/data/games.json'
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
// import 'vue-lite-youtube-embed/style.css'
</script>

<template>
  <section>
    <ul>
      <li v-for="game in games" :key="game.name">
        <h3>{{ game.name }}</h3>
        <LiteYouTubeEmbed
          v-if="game.playlistId !== null && game.coverVideoId !== null"
          playlist
          :id="game.playlistId"
          :playlistCoverId="game.coverVideoId"
          :title="game.name"
        />
        <div>
          <p v-if="game.status == 1" class="s1">Not yet played</p>
          <p v-if="game.status == 2" class="s2">Currently streaming</p>
          <p v-if="game.status == 3" class="s3">Done streaming</p>
          <p v-if="game.status == 4" class="s4">On pauze</p>
          <p v-if="game.status == 5" class="s5">Discontinued</p>
          <p v-if="game.status == 6" class="s6">Planned to re-stream</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
ul {
  margin: 50px;
  display: flex;
  justify-self: center;
  flex-wrap: wrap;
  gap: 20px;
}
li {
  list-style: none;
  border: 2px solid green;
  border-radius: 5px;
  background-color: darkgreen;
  box-shadow: 0px 0px 20px 1px lightgreen;
}

h3 {
  padding: 5px;
}
div {
  padding: 5px;
}
p {
  padding: 5px;
  border-radius: 5px;
}

.s1 {
  /* Not yet played */
  background-color: rgb(206, 44, 44);
}
.s2 {
  /* Currently streaming */
  background-color: rgb(233, 233, 65);
}
.s3 {
  /* Done streaming */
  background-color: rgb(70, 248, 70);
}
.s4 {
  /* On pauze */
  background-color: rgb(100, 185, 238);
}
.s5 {
  /* Discontinued */
  background-color: rgb(255, 187, 61);
}
.s6 {
  /* Planned to re-stream */
  background-color: rgb(71, 71, 199);
}
</style>
