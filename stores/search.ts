import {ref} from 'vue';
import type {Ref} from 'vue';
import {defineStore} from 'pinia';

export const useSearchStore = defineStore('search', () => {
  const searchText: Ref<string> = ref('');
  const searchVisibility: Ref<boolean> = ref(false);

  const clearSearchInput = () => {
    searchText.value = '';
  };

  const changeSearchVisibility = () => {
    searchVisibility.value = !searchVisibility.value;
  }

  const handleSearchInput = () => {
    if (searchText.value.length !== 0) {
      clearSearchInput();
    }
    else {
      changeSearchVisibility();
    }
  }

  return {searchText, searchVisibility, changeSearchVisibility, handleSearchInput};
})