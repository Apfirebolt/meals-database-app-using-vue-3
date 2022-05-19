<template>
  <div v-if="areas.length">
    <Dropdown
      v-model="selectedArea"
      :options="areas"
      optionLabel="strArea"
      placeholder="Select a Global Location/Area"
    />
    <Button label="Filter" icon="pi pi-times" class="p-button-text" @click="onSubmit" />
  </div>
</template>

<script>
import useArea from "../composables/area";
import { onMounted, ref } from "vue";

export default {
  emits: ['filterMealByLocation'],
  setup(props, { emit }) {
    const { getAreasList, areas } = useArea();
    const selectedArea = ref("");

    const onSubmit = (() => { 
      emit('filterMealByLocation', selectedArea.value.strArea);
    });

    onMounted(() => {
      getAreasList();
    });

    return {
      areas,
      selectedArea,
      onSubmit
    };
  },
};
</script>

<style scoped></style>
