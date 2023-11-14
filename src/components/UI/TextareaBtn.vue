import { ref } from 'vue';
<template>
  <div class=" textarea-btn pointer">
    <p>{{ text }}</p>
    <button>SELECT</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
	text: { type: String, required: true }
})
</script>

<style scoped>

button {
  align-self: flex-start;
  margin-left: auto;
  color: #EB5757;
  font-size: 12px;
  text-decoration: underline;
  font-weight: 600;
}

.textarea-btn {
  display: flex;
  position: relative;
  text-align: start;
  width: 400px;
  padding: 10px;
  outline: 0px !important;
  border-radius: 5px;
  resize: none;
  border: 1px solid #e3e3e3;

  &:hover {
    transition: 0.2s ease;
    box-shadow: 0px 0px 2px 2px rgba(182, 182, 182, 0.2);
  }

  &:not(:hover){
    transition: 0.2s ease;
    box-shadow: none;
  }
}
</style>