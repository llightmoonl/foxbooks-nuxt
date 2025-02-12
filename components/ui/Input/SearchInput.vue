<template>
  <div class="search">
    <label
      class="search__icon"
      for="search"
    >
      <Search/>
    </label>
    <Input
      name="search"
      id="search"
      :placeholder
      v-model:value="value"
      class="search__input"
    />
  </div>
</template>

<script setup lang="ts">
import Input from './Input.vue';
import {Search} from 'lucide-vue-next';

defineProps<{
  placeholder?: string;
}>();

const value = defineModel('search-input');
</script>

<style scoped lang="scss">
.search {
  position: relative;

  &__icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  &__input {
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid $black-text;
    padding-left: 40px;
  }
}

</style>