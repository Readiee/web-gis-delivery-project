<template>
  <div class="list-item d-flex align-center">
    <v-avatar v-if="props.img" :image="props.img" />
    <div class="list-item__end ml-2">
      <h3 class="mt-2 font-weight-bold">{{ props.title }}</h3>
      <p v-if="props.caption" style="width: 270px;">{{ props.caption }}</p>
    </div>
  </div>
</template>
    
<script setup lang="ts">
    
const props = defineProps({
	img: { type: String, default: '' },
	title: { type: String, required: true },
	caption: { type: String, default: '' }
})
</script>
    
  <style scoped>
  img {
    max-height: 270px;
  }
  </style>