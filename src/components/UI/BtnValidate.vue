<template>
  <v-btn
    :disabled="!isValid"
  />
</template>

<script setup lang="ts">
import { useIsFormValid } from 'vee-validate'
const isValid = useIsFormValid()
</script>

<style scoped>

</style>