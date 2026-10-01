<script setup>
import rawGamesData from '@/assets/data/games.json';
import { ref, computed, watch } from 'vue';
const gameStatusList = ref([
  { status: 1, name: 'Not yet played' },
  { status: 2, name: 'Currently streaming' },
  { status: 3, name: 'Done streaming' },
  { status: 4, name: 'On pauze' },
  { status: 5, name: 'Discontinued' },
  { status: 6, name: 'Planned to re-stream' },
]);

const gamesData = ref(rawGamesData);
const currentPage = ref(1);
const gameCount = ref(8);
const searchText = ref('');

const maxGames = computed(() => {
  return gamesData.value.length;
});

const maxPageCount = computed(() => {
  return Math.ceil(gamesData.value.length / gameCount.value);
});

watch(maxPageCount, (newMax) => {
  if (currentPage.value > newMax) {
    currentPage.value = newMax;
  }
});

const startCount = computed(() => {
  return (currentPage.value - 1) * gameCount.value;
});

// filter on the games
const games = computed(() => {
  const gamesList = ref(gamesData.value);

  // filter on the search
  if (searchText.value != '') {
    gamesList.value = gamesList.value.filter((g) =>
      g.name.toLowerCase().includes(searchText.value.toLowerCase()),
    );
  }

  // page
  gamesList.value = gamesList.value.slice(startCount.value, startCount.value + gameCount.value);
  return gamesList.value;
});

// amount of games that are visible
const visibleGames = computed(() => {
  return games.value.length;
});

// game status tag
const getGameStatus = (status) => {
  return gameStatusList.value.find((s) => s.status === status);
};
</script>

<template>
  <section>
    <section class="gameFilters">
      <h2>Filters</h2>
      <!-- <pre>{{ { currentPage, gameCount, startCount, visibleGames } }}</pre> debug text -->
      <div>
        <label
          >Game count:
          <input type="range" step="1" min="1" v-model.number="gameCount" :max="maxGames" />
          {{ visibleGames }}
        </label>
        <br />
        <label
          >Page:
          <input type="range" step="1" min="1" v-model.number="currentPage" :max="maxPageCount" />
          {{ currentPage }}/{{ maxPageCount }}
        </label>
        <br />
        <label>
          Search:
          <input type="text" v-model="searchText" />
        </label>
      </div>
    </section>
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
              class="thumbnail"
            />
          </a>
          <div id="playlistTags">
            <p v-if="getGameStatus(game.status)" :class="'s' + game.status">
              {{ getGameStatus(game.status).name }}
            </p>
          </div>
        </li>
      </ul>
    </section>
  </section>
</template>

<style scoped>
.gameFilters {
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: var(--primary);
  border: 2px solid var(--secondary);
  color: var(--white);
}
input {
  margin: 0 10px;
}
ul {
  margin: 20px;
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
  padding: 5px;
  text-align: center;
}
#playlistTags {
  padding: 5px;
  max-width: fit-content;
  margin: 0 0 5px 5px;
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
