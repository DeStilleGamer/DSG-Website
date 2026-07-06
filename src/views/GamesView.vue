<script setup>
import { MainHeader, MainFooter, MainTitle } from '@/components/main'
import GamesList from '@/components/GamesList.vue'
</script>

<template>
  <MainHeader />
  <main>
    <MainTitle
      title="GAMES"
      extraNote="A list of games I wish to stream / have streamd or I am currently streaming"
    />
    <p>This page is currently a WIP and will be expanded on.</p>
    <p>The data on this page currently is true but will be expanded on.</p>
    <GamesList />
  </main>
  <MainFooter />
</template>

<style scoped>
p {
  color: white;
}
</style>
