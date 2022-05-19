<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <h5>Meals Page</h5>

        <div class="flex justify-content-between">
          <span class="p-input-icon-left my-2 p-input-icon-right">
              <i class="pi pi-search" />
              <InputText
                type="text"
                placeholder="Name"
                v-model="searchText"
              />
            </span>
          <div class="flex align-items-center justify-content-end">
            <Button label="Search By Name" class="p-button-secondary" @click="getMealListByName(searchText)" />
          </div>
        </div>

        <hr />

        <div class="flex justify-content-between">
          <span class="p-input-icon-left my-2 p-input-icon-right">
              <i class="pi pi-search" />
              <InputText
                type="text"
                placeholder="Letter"
                v-model="firstLetter"
              />
            </span>
          <div class="flex align-items-center justify-content-end">
            <Button label="Search Meal by Letter" class="p-button-secondary" @click="getMealListByLetter(firstLetter)" />
          </div>
        </div>

        <DataTable :value="meals" responsiveLayout="scroll">
          <Column field="strArea" header="Area"></Column>
          <Column field="strMeal" header="Name"></Column>
          <Column header="Image">
            <template #body="slotProps">
              <img
                :src="slotProps.data.strMealThumb"
                :alt="slotProps.data.strMeal"
                height="100"
                width="150"
              />
            </template>
          </Column>
          <Column field="strCategory" header="Category"></Column>
          <Column header="Source">
            <template #body="slotProps">
              <a :href="slotProps.data.strSource">Click Here</a>
            </template>
          </Column>

          <template #footer>
            In total there are {{ meals ? meals.length : 0 }} meals.
          </template>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script>
import useMeal from "../composables/meal";
import { onMounted, ref } from "vue";

export default {
  setup() {
    const { getMealListByLetter, getMealListByName, meals } = useMeal();
    const searchText = ref("");
    const firstLetter = ref("");
    onMounted(() => {
      getMealListByLetter();
    });

    return {
      meals,
      searchText,
      firstLetter,
      getMealListByName,
      getMealListByLetter
    };
  },
};
</script>

<style scoped></style>
