<script setup>
defineProps({
  extra: {
    type: String,
    required: false,
    default: '',
  },
})
</script>
<template>
  <div>
    <p>This page is currently a WIP and will be expanded on</p>
    <p v-if="extra">{{ extra }}</p>
  </div>
</template>
<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
p {
  color: var(--primary);
}
</style>
