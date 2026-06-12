<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  extraNote: {
    type: String,
    required: false,
    default: '',
  },
})
</script>

<template>
  <section id="title">
    <h1>{{ title }}</h1>
    <p v-if="extraNote">{{ extraNote }}</p>
  </section>
</template>

<style scoped>
#title {
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),
    url('@/assets/images/Youtube_Banner.png');
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 50px 0;
  font-size: 40px;
  color: lightgreen;
  text-shadow: 0px 0px 10px green;
}
</style>
