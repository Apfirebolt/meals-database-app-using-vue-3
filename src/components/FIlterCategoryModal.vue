<template>
  <div v-if="categories.length">
    <Dropdown
      v-model="selectedCategory"
      :options="categories"
      optionLabel="strCategory"
      placeholder="Select a Category"
    />
    <Button label="Filter" icon="pi pi-times" class="p-button-text" @click="onSubmit"/>
  </div>
</template>

<script>
import useCategory from "../composables/category";
import { onMounted, ref } from "vue";

export default {
  emits: ['filterMealByCategory'],  
  setup(props, { emit }) {
    const { getCategoriesList, categories } = useCategory();
    const selectedCategory = ref("");

    const onSubmit = (() => {
      emit('filterMealByCategory', selectedCategory.value.strCategory);
    });

    onMounted(() => {
      getCategoriesList();
    });

    return {
      categories,
      selectedCategory,
      onSubmit
    };
  },
};
</script>

<style scoped></style>
