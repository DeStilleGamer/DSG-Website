<script setup>
import achievements from '@/assets/data/achievements.json'
</script>
<template>
  <section>
    <section></section>
    <section>
      <ul>
        <li v-for="achievement in achievements" :key="achievement.name">
          <h3>{{ achievement.name }}</h3>
          <article v-if="achievement.type == 1">
            <!--Playlist-->
            <a
              v-if="achievement.playlistId && achievement.coverVideoId"
              :href="`https://www.youtube.com/playlist?list=${achievement.playlistId}`"
              target="_blank"
              rel="noopener"
            >
              <img
                :src="`https://i.ytimg.com/vi/${achievement.coverVideoId}/hqdefault.jpg`"
                :alt="achievement.name"
                class="playlist-thumb"
              />
            </a>
          </article>
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
