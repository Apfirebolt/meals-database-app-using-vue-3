<template>
  <div v-if="ingredients.length" class="grid">
    <div class="col-12">
      <div class="card">
        <DataTable
          :value="ingredients"
          :paginator="true"
          :rows="10"
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          :rowsPerPageOptions="[10, 20]"
          responsiveLayout="scroll"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
        >
          <Column field="idIngredient" header="ID"></Column>
          <Column field="strIngredient" header="Name"></Column>
          <Column field="strDescription" header="Description"></Column>
          <template #paginatorstart>
            <Button type="button" icon="pi pi-refresh" class="p-button-text" />
          </template>
          <template #paginatorend>
            <Button type="button" icon="pi pi-cloud" class="p-button-text" />
          </template>
        </DataTable>
      </div>
    </div>
  </div>
  <loader v-else />
</template>

<script>
import Loader from "../components/Loader.vue";
import useIngredient from "../composables/ingredient";
import { onMounted } from "vue";

export default {
  components: {
    Loader,
  },
  setup() {
    const { getIngredientList, ingredients } = useIngredient();

    onMounted(() => {
      getIngredientList();
    });

    return {
      ingredients,
    };
  },
};
</script>

<style scoped></style>
