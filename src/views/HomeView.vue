<script setup>
import { MainHeader, MainTitle, MainWIP } from '@/components/main'
</script>

<template>
  <MainHeader />
  <main>
    <MainTitle title="De Stille Gamer" />
  </main>
  <MainWIP />
</template>

<style scoped>
#Name {
  background-image: url('@/assets/images/Youtube_Banner.png');
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 50px 0;
  font-size: 40px;
}
</style>
