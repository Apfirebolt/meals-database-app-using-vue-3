<template>
  <div class="grid">
    <loader v-if="isLoading" />
    <div v-else class="col-12">
      <div class="card">
        <h5>Meals</h5>

        <div class="flex justify-content-between">
          <span class="p-input-icon-left my-2 p-input-icon-right">
            <i class="pi pi-search" />
            <InputText type="text" placeholder="Name" v-model="searchText" />
          </span>
          <div class="flex align-items-center justify-content-end">
            <Button
              label="Search By Name"
              class="p-button-secondary"
              @click="getMealListByNameHelper(searchText)"
            />
          </div>
        </div>

        <hr />

        <div class="flex justify-content-between">
          <span class="p-input-icon-left my-2 p-input-icon-right">
            <i class="pi pi-search" />
            <InputText type="text" placeholder="Letter" v-model="firstLetter" />
          </span>
          <div class="flex align-items-center justify-content-end">
            <Button
              label="Search Meal by Letter"
              class="p-button-secondary"
              @click="getMealListByLetterHelper(firstLetter)"
            />
          </div>
          <div class="flex align-items-center justify-content-center">
            <Button
              label="Filter By Area"
              class="p-button-secondary mx-2 bg-orange-500"
              @click="isFilterByAreaModalOpened = true"
            />
            <Button
              label="Filter By Category"
              class="p-button-secondary mx-2 bg-teal-500"
              @click="isFilterByCategoryModalOpened = true"
            />
          </div>
        </div>
        <DataTable
          v-if="!isFilteringEnabled"
          :value="meals"
          responsiveLayout="scroll"
        >
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

        <DataTable v-else :value="meals" responsiveLayout="scroll">
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

          <template #footer>
            In total there are {{ meals ? meals.length : 0 }} meals.
          </template>
        </DataTable>
      </div>
    </div>
    <Dialog v-model:visible="isFilterByAreaModalOpened">
      <filter-by-area-modal
        @filterMealByLocation="filterMealByLocationHelper"
      />
    </Dialog>
    <Dialog v-model:visible="isFilterByCategoryModalOpened">
      <filter-by-category-modal
        @filterMealByCategory="filterMealByCategoryHelper"
      />
    </Dialog>
  </div>
</template>

<script>
import Loader from "../components/Loader.vue";
import FilterByAreaModal from "../components/FilterAreaModal.vue";
import FilterByCategoryModal from "../components/FIlterCategoryModal.vue";
import useMeal from "../composables/meal";
import { onMounted, ref } from "vue";

export default {
  components: {
    Loader,
    FilterByAreaModal,
    FilterByCategoryModal,
  },
  setup() {
    const {
      getMealListByLetter,
      getMealListByName,
      filterMealByCategory,
      filterMealByLocation,
      meals,
      isLoading,
    } = useMeal();
    const searchText = ref("");
    const firstLetter = ref("");
    const isFilteringEnabled = ref(false);
    const isFilterByAreaModalOpened = ref(false);
    const isFilterByCategoryModalOpened = ref(false);

    const getMealListByLetterHelper = (letter) => {
      isFilteringEnabled.value = false;
      getMealListByLetter(letter);
    };

    const getMealListByNameHelper = (name) => {
      isFilteringEnabled.value = false;
      getMealListByName(name);
    };

    const filterMealByCategoryHelper = (category) => {
      filterMealByCategory(category);
      isFilteringEnabled.value = true;
      isFilterByCategoryModalOpened.value = false;
    };

    const filterMealByLocationHelper = (location) => {
      filterMealByLocation(location);
      isFilteringEnabled.value = true;
      isFilterByAreaModalOpened.value = false;
    };
    onMounted(() => {
      getMealListByLetter();
    });

    return {
      meals,
      isLoading,
      searchText,
      firstLetter,
      isFilteringEnabled,
      getMealListByNameHelper,
      getMealListByLetterHelper,
      getMealListByLetter,
      isFilterByAreaModalOpened,
      isFilterByCategoryModalOpened,
      filterMealByCategoryHelper,
      filterMealByLocationHelper,
    };
  },
};
</script>

