<script setup>
import { RouterLink, useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <header>
    <p>{{ route.name }}</p>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/games">Games</RouterLink>
      <RouterLink to="/achievements">Achievements</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: limegreen;
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
  top: 0;
}

a {
  text-decoration: none;
  color: black;
  background-color: greenyellow;
  padding: 5px;
  border-radius: 5px;
  border: 2px solid black;
}
a:hover {
  background-color: lime;
}
</style>
