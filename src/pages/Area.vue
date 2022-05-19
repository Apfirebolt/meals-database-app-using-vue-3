<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <h5>Area Page</h5>
        <Chip v-for="area in areas" :key="area.strArea" class="mr-4 mb-4 px-3 py-2">
          {{ area.strArea }}
        </Chip>
      </div>
    </div>
  </div>
</template>

<script>
import useArea from "../composables/area";
import { onMounted } from 'vue';

export default {
  setup() {
    const { getAreasList, areas } = useArea();
    onMounted(() => {
      getAreasList();
    });

    return {
      areas
    }
  },
};
</script>

<style scoped></style>
