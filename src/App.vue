<script setup>
import { RouterView } from 'vue-router'
import { MainFooter, MainHeader } from './components/main'
</script>

<template>
  <div id="app">
    <MainHeader />
    <RouterView />
    <MainFooter id="footer" />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}
:root {
  --primary: #0bbf4f;
  --secondary: #04471c;
  --accent-light: #058c42;
  --accent-dark: #0d2818;
  --black: #020202;
}

body {
  background-color: var(--black);
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#footer {
  margin-top: auto;
}
</style>
