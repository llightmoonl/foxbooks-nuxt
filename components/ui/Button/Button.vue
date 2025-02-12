<template>
  <button
    class = "button"
    :class = "{
      'button__secondary': variant === 'secondary',
      'button__icon': size === 'icon',
    }"><slot>Отправить</slot></button>
</template>

<script setup lang="ts">
import type {Button} from './Button.d.ts';

defineProps<Button>();
</script>

<style scoped lang="scss">
.button {
  border: 2px solid currentColor;
  background-color: transparent;
  cursor: pointer;
  padding: 12px 16px;
  border-radius: 20%;
  &__icon {
    border: none;
    padding: 0;
  }
}
</style>