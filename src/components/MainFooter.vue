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
  background-color: limegreen;
  padding: 5px;
}

button {
  background-color: greenyellow;
  padding: 5px;
  border-radius: 5px;
  border: 2x solid black;
}
button:hover {
  background-color: lime;
}
</style>
