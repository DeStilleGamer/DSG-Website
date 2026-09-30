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
                class="thumbnail"
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
  border: 2px solid var(--accent-dark);
  border-radius: 15px;
  background-color: var(--accent-light);
  box-shadow: 0px 0px 20px 1px var(--accent-light);
}

h2 {
  color: var(--white);
}
h3 {
  color: var(--white);
  padding: 5px 0 0 0;
  text-align: center;
}

.thumbnail {
  margin: 15px;
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.2s;
  border: 2px solid var(--secondary);
}

.thumbnail:hover {
  /* opacity: 1.15; */
  transform: scale(1.02);
}

li:hover {
  /* opacity: 0.85; */
  transform: scale(1.02);
}
</style>
