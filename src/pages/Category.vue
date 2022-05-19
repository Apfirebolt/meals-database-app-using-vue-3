<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <h5>Category Page</h5>
        <Chip v-for="category in categories" :key="category.strCategory" class="mr-4 mb-4 px-3 py-2">
          {{ category.strCategory }}
        </Chip>
      </div>
    </div>
  </div>
</template>

<script>
import useCategory from "../composables/category";
import { onMounted } from "vue";

export default {
  setup() {
    const { getCategoriesList, categories } = useCategory();

    onMounted(() => {
      getCategoriesList();
    });

    return {
      categories,
    };
  },
};
</script>

<style scoped></style>
