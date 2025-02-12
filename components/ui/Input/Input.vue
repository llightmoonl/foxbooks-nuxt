<template>
  <input
    :placeholder
    v-model = "value"
    class="input"
    type="text"
  />
</template>

<script setup lang="ts">
defineProps<{
  placeholder?: string;
}>();

const value = defineModel('value');
</script>

<style scoped lang="scss">
.input {
  background-color: transparent;
  border-width: 2px;
  border-style: solid;
  border-radius: 1rem;
  padding: 14px;
  outline: none;
}
</style>