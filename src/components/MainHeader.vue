<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <div id="image">
      <p>[insert pfp]</p>
    </div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: lime;
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
