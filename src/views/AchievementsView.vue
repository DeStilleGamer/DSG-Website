<script setup>
import { MainHeader, MainTitle, MainWIP } from '@/components/main'
import AchievementsList from '@/components/AchievementsList.vue'
</script>
<template>
  <MainHeader />
  <MainTitle title="Achievements" extra-note="All of my achievements" />
  <MainWIP extra="The data on this page is currently true but wil be expanded upon." />
  <AchievementsList />
</template>
<style scoped></style>
