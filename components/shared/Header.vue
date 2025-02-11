<template>
  <header class="header">
    <Container>
      <div class="header__content">
        <nav class="header__menu">
          <ul class="header__list">
            <li
              v-for="(item, key) in menu"
              class="header__list-item"
              :key
            >
              <NuxtLink
                :to="item.url"
                class="header__link"
              >
                {{item.name}}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <Logo class="header__logo" />
      </div>
    </Container>
  </header>
</template>

<script setup lang="ts">
import {Container} from "~/components/shared";
import Logo from "~/components/ui/Logo.vue";

const menu = [
  {
    id: 1,
    name: 'Акции',
    url: '/promotion'
  },
  {
    id: 2,
    name: 'Манга',
    url: '/manga'
  },
  {
    id: 3,
    name: 'Атрибутика',
    url: '/attributes'
  }
]
</script>

<style scoped lang="scss">
.header {
  padding-block: 32px;
  background-color: $primary-bg-light;
  color: $secondary-text-light;
  font-size: 16px;

  &__content {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
    font-weight: 300;
  }

  &__link {
    color: currentColor;
    text-decoration: none;
  }
}
</style>