<template>
  <div class="media-card d-flex flex-column align-center text-center">
    <img :src="props.img">
    <h3 class="mt-2 font-weight-black">{{ props.title }}</h3>
    <p class="mt-2" style="width: 270px;">{{ props.caption }}</p>
  </div>
</template>
  
<script setup lang="ts">
  
const props = defineProps({
	img: { type: String, required: true },
	title: { type: String, required: true },
	caption: { type: String, required: true }
})
</script>
  
<style scoped>
img {
  max-height: 270px;
}
</style>