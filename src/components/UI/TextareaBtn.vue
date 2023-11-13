<template>
  <div class="textarea">
    <p>{{ text }}</p>
    <v-btn type variant="text" size="small">SELECT</v-btn>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
	text: { type: String, required: true }
})
</script>

<style scoped>
.textarea {
    display: flex;
    align-items: start;
}
</style>