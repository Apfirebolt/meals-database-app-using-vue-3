<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <h5>Categories</h5>
        <DataTable :value="categories" responsiveLayout="scroll">
          <Column field="strCategory" header="Name"></Column>
          <Column header="Image">
            <template #body="slotProps">
              <img
                :src="slotProps.data.strCategoryThumb"
                :alt="slotProps.data.strCategory"
                height="100"
                width="150"
              />
            </template>
          </Column>
          <Column field="strCategoryDescription" header="Category Description"></Column>

          <template #footer>
            In total there are {{ categories ? categories.length : 0 }} categories.
          </template>
        </DataTable>
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
