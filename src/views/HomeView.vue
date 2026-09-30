<script setup>
import { MainTitle, MainWIP } from '@/components/main'
</script>

<template>
  <main>
    <MainTitle title="De Stille Gamer" />
  </main>
  <MainWIP />
  <section class="HomeSection">
    <h2>Welcome to my website</h2>
    <p>
      Here u can find all sorts of things ranging from
      <RouterLink to="/about">about me</RouterLink> to my biggest
      <RouterLink to="/achievements">achievements</RouterLink>.
    </p>
  </section>
  <section class="HomeSection">
    <h2>Stream schedule</h2>
    <p>
      U can view my schedule over on
      <a href="https://www.twitch.tv/de_stille_gamer/schedule" target="_blank">Twitch</a>.
    </p>
    <p>
      U can stay updated on any changes over on my
      <a href="https://discord.gg/D5fSuxn5ec" target="_blank">Discord</a>
    </p>
  </section>
</template>

<style scoped>
.HomeSection {
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: var(--primary);
  border: 2px solid var(--secondary);
  color: var(--white);
}
</style>
