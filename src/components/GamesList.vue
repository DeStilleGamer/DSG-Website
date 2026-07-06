<script setup>
import games from '@/assets/data/games.json'
</script>

<template>
  <!-- <section>
    <h2>Filters</h2>
  </section> -->
  <section>
    <section></section>
    <section>
      <ul>
        <li v-for="game in games" :key="game.name">
          <h3>{{ game.name }}</h3>
          <a
            v-if="game.playlistId && game.coverVideoId"
            :href="`https://www.youtube.com/playlist?list=${game.playlistId}`"
            target="_blank"
            rel="noopener"
          >
            <img
              :src="`https://i.ytimg.com/vi/${game.coverVideoId}/hqdefault.jpg`"
              :alt="game.name"
              class="playlist-thumb"
            />
          </a>
          <div id="playlistTags">
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
  </section>
</template>

<style scoped>
ul {
  margin: 50px;
  display: flex;
  justify-self: center;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
li {
  list-style: none;
  border: 2px solid green;
  border-radius: 5px;
  background-color: darkgreen;
  box-shadow: 0px 0px 20px 1px lightgreen;
}

h2 {
  color: white;
}
h3 {
  color: white;
  padding: 5px;
  text-align: center;
}
#playlistTags {
  padding: 5px;
  max-width: fit-content;
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

.playlist-thumb {
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.2s;
  border: 2px solid lightgreen;
}

.playlist-thumb:hover {
  /* opacity: 1.15; */
  transform: scale(1.02);
}

li:hover {
  /* opacity: 0.85; */
  transform: scale(1.02);
}
</style>
