<template>
  <div class="search-field">
    <Container>
      <form class="search-field__form">
        <SearchInput
          v-model:search-input="search.searchText"
          placeholder="Найти товары"
          class="search-field__input"
        />
        <Button
          @click.prevent="search.handleSearchInput"
          size="icon"
          class="search-field__close"
        >
          <X/>
        </Button>
      </form>
    </Container>
  </div>
</template>

<script setup lang="ts">
import {X} from 'lucide-vue-next';

import {SearchInput, Button} from "~/components/ui";
import {Container} from "~/components/shared";

import {useSearchStore} from "~/stores/search";

const search = useSearchStore();
</script>

<style scoped lang="scss">
.search-field {
  position: absolute;
  inset: 0;
  background-color: #fff;
  width: 100%;
  padding: 8px;

  &__input {
    width: 100%;
  }

  &__form {
    position: relative;
  }

  &__close {
    position: absolute;
    right: 0.5%;
    top: 23%
  }

  &::after {

    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>