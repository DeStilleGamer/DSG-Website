<script setup>
import { MainTitle, MainWIP } from '@/components/main'
</script>
<template>
  <MainTitle title="About" />
  <MainWIP />
  <section class="aboutSection">
    <h2>Who am I?</h2>
    <p>I am a English speaking Dutch Youtuber and Twitch streamer.</p>
    <p></p>
  </section>

  <section class="aboutSection">
    <h2>What do i stream?</h2>
    <p>
      I stream a veriety of games included but not limited to Minecraft and Eternal Towers of Hell.
    </p>
  </section>
  <section class="aboutSection">
    <h2>Socials</h2>
    <ul id="socials">
      <li><a href="https://www.youtube.com/@DeStilleGamer" target="_blank">YouTube</a></li>
      <li><a href="https://www.youtube.com/@DeStilleGamerVODS" target="_blank">VODS</a></li>
      <li><a href="https://www.twitch.tv/de_stille_gamer" target="_blank">Twitch</a></li>
      <li><a href="https://discord.gg/D5fSuxn5ec" target="_blank">Discord</a></li>
      <!-- <li><a href="https://x.com/DeStilleGamer" target="_blank">Twitter</a></li> -->
      <!-- <li><a href="https://www.tiktok.com/@de_stille_gamer" target="_blank">Tiktok</a></li> -->
      <!-- <li><a href="https://www.instagram.com/de_stille_gamer" target="_blank">Instagram</a></li> -->
    </ul>
  </section>
</template>
<style scoped>
.aboutSection {
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: var(--primary);
  border: 2px solid var(--secondary);
  color: var(--white);
}
#socials {
  list-style-position: inside;
  list-style-type: disc;
}
</style>
