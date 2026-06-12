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
    <GamesList />
  </main>
  <MainFooter />
</template>

<style scoped></style>
