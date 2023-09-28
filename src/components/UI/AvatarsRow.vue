<template>
  <div class="avatar-row">
    <v-avatar
      v-for="(avatar, index) in props.avatars"
      :key="index"
      :class="{ 'avatar-overlap': index > 0 }"
    >
      <v-img :src="avatar" alt="Avatar" />
    </v-avatar>
  </div>
</template>
  
<script setup lang="ts">
  
const props = defineProps({
	avatars: { type: Array as () => string[], required: true }
})
</script>
  
<style scoped>
.avatars-row {
  display: flex;
  align-items: center;
}

.avatar-overlap {
  margin-left: -24px;
}
</style>