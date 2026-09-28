<script setup>
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <footer>
    <button @click="scrollToTop">To top</button>
  </footer>
</template>

<style scoped>
footer {
  position: sticky;
  bottom: 0;
  display: flex;
  background-color: var(--primary);
  padding: 5px;
}

button {
  background-color: var(--accent-light);
  padding: 5px;
  border-radius: 5px;
  border: 2px solid var(--black);
}
button:hover {
  background-color: var(--accent-dark);
  color: var(--primary);
}
</style>
