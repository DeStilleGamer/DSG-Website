<script setup>
import { MainHeader, MainFooter, MainTitle } from '@/components/main'
import AchievementsList from '@/components/AchievementsList.vue'
</script>
<template>
  <MainHeader />
  <MainTitle title="Achievements" extra-note="All of my achievements" />
  <p>This page is currently a WIP and will be expanded on.</p>
  <p>The data on this page is currently true but wil be expanded upon.</p>
  <AchievementsList />
  <MainFooter />
</template>
<style scoped>
p {
  color: white;
}
</style>
