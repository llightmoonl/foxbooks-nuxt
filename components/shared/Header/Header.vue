<template>
  <header class="header">
    <Container>
      <div class="header__content">
        <nav class="header__menu">
          <ul class="header__list">
            <li
              v-for="(item, key) in navigationMenu"
              class="header__list-item"
              :key
            >
              <NuxtLink :to="item.link" class="header__link">{{ item.name }}</NuxtLink>
            </li>
          </ul>
        </nav>
        <Logo class="header__logo"/>

        <Teleport to = "#teleports">
          <SearchField v-if = "search.searchVisibility" class="header__search-input"/>
        </Teleport>

        <div class="header__buttons-group">
          <Button @click = "search.changeSearchVisibility" class="header__button" size="icon">
            <Search/>
          </Button>
          <Button class="header__button" size="icon">
            <CircleUser/>
          </Button>
          <Button class="header__button" size="icon">
            <Heart/>
          </Button>
          <Button class="header__button" size="icon">
            <ShoppingCart/>
          </Button>
        </div>
      </div>
    </Container>
  </header>
</template>

<script setup lang="ts">
import {useSearchStore} from '~/stores/search';
import {Heart, ShoppingCart, CircleUser, Search} from 'lucide-vue-next';

import type {NavigationHeader} from './header.d.ts';

import {Logo, Button} from "~/components/ui";
import {Container, SearchField} from "~/components/shared";

const search = useSearchStore();

const navigationMenu: Array<NavigationHeader> = [
  {
    id: 1,
    name: 'Акции',
    link: '/promotions'
  },
  {
    id: 2,
    name: 'Манга',
    link: '/manga'
  },
  {
    id: 3,
    name: 'Атрибутика',
    link: '/attributes'
  }
]
</script>

<style scoped lang="scss">
.header {
  padding-block: 24px;
  background-color: $primary-bg-light;
  color: $secondary-text-light;
  font-size: 16px;

  &__content {
    position: relative;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    height: 100%;
  }

  &__logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-55%);
  }

  &__list {
    display: flex;
    gap: 32px;
    list-style-type: none;
    font-weight: 400;
    letter-spacing: 1.5px;
  }

  &__link {
    color: currentColor;
    text-decoration: none;

    &:hover {
      color: $primary-text-light;
    }
  }

  &__buttons-group {
    justify-self: end;
    display: flex;
    gap: 24px;
  }

  &__button {
    color: $secondary-text-light;
    border-color: $secondary-text-light;

    &:hover {
      color: $primary-text-light;
    }
  }

  &__search-input {
    border-color: $secondary-text-light;
    color: $black-text;
    background-color: $secondary-text-light;
    caret-color: $primary-bg-light;
  }
}
</style>