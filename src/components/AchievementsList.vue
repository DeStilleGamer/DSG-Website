<script setup>
import rawAchievementsData from '@/assets/data/achievements.json';
import { ref, computed, watch } from 'vue';

const achievementsData = ref(rawAchievementsData);
const currentPage = ref(1);
const achievementCount = ref(8);
const searchText = ref('');

const maxAchievements = computed(() => {
  return achievementsData.value.length;
});

const maxPageCount = computed(() => {
  return Math.ceil(achievementsData.value.length / achievementCount.value);
});

watch(maxPageCount, (newMax) => {
  if (currentPage.value > newMax) {
    currentPage.value = newMax;
  }
});

const startCount = computed(() => {
  return (currentPage.value - 1) * achievementCount.value;
});

// filter on the achievements
const achievements = computed(() => {
  const achievementsList = ref(achievementsData.value);

  // filter on the search
  if (searchText.value != '') {
    achievementsList.value = achievementsList.value.filter((g) =>
      g.name.toLowerCase().includes(searchText.value.toLowerCase()),
    );
  }

  // page
  achievementsList.value = achievementsList.value.slice(
    startCount.value,
    startCount.value + achievementCount.value,
  );
  return achievementsList.value;
});

// amount of achievements that are visible
const visibleAchievements = computed(() => {
  return achievements.value.length;
});
</script>
<template>
  <section>
    <section class="achievementFilters">
      <h2>Filters</h2>
      <!-- <pre>{{ { currentPage, achievementCount, startCount, visibleAchievements } }}</pre> debug text -->
      <div>
        <label
          >Achievement count:
          <input
            type="range"
            step="1"
            min="1"
            v-model.number="achievementCount"
            :max="maxAchievements"
          />
          {{ visibleAchievements }}
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
.achievementFilters {
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
