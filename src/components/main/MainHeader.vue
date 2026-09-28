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
  background-color: var(--primary);
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
  top: 0;
}

nav {
  display: flex;
  flex-direction: row;
  gap: 2.5px;
}

a {
  text-decoration: none;
  color: var(--black);
  background-color: var(--accent-light);
  padding: 5px;
  border-radius: 5px;
  border: 2px solid black;
}
a:hover {
  background-color: var(--accent-dark);
  color: var(--primary);
}
</style>
