<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <h5>Category Page</h5>
        <p>
          {{ categories }}
        </p>
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
