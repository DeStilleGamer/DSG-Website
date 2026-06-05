<script setup>
import { MainHeader, MainFooter } from '@/components'
</script>

<template>
  <MainHeader />
  <main>
    <section id="Name">
      <h1>De Stille Gamer</h1>
    </section>
  </main>
  <MainFooter />
</template>

<style scoped>
#Name {
  background-image: url('@/assets/Youtube_Banner.png');
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 50px 0;
  font-size: 40px;
}
</style>
