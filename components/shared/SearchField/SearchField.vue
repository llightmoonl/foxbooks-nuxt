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
  top: 0;
  left: 0;
  right: 0;

  &__input {
    width: 100%;
  }

  &__form {
    position: relative;
    background-color: #fff;
    width: 100%;
    height: 100%;
    max-height: 40rem;
    padding-block: 16px;
  }

  &__close {
    position: absolute;
    right: 0.5%;
    top: 23%
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  svg {
    stroke: $search-color;
  }
}
</style>