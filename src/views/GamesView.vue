<script setup>
import { MainTitle, MainWIP } from '@/components/main'
import GamesList from '@/components/GamesList.vue'
</script>

<template>
  <main>
    <MainTitle
      title="GAMES"
      extraNote="A list of games I wish to stream / have streamd or I am currently streaming"
    />
    <MainWIP extra="The data on this page is currently uncomplete and will be expanded on." />
    <GamesList />
  </main>
</template>

<style scoped></style>
