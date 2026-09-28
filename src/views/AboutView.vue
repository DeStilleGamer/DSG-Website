<script setup>
import { MainHeader, MainTitle, MainWIP } from '@/components/main'
</script>
<template>
  <MainHeader />
  <MainTitle title="About" />
  <MainWIP />
  <section class="aboutSection">
    <h2>Who am I?</h2>
    <p>I am a English speaking Dutch Youtuber and Twitch streamer</p>
  </section>
</template>
<style scoped>
.aboutSection {
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: var(--primary);
  border: 2px solid var(--secondary);
  color: var(--black);
}
</style>
