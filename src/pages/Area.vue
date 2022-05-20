<template>
  <div v-if="areas.length" class="grid">
    <div class="col-12">
      <div class="card">
        <h5>Global Area/Location</h5>
        <Chip v-for="area in areas" :key="area.strArea" class="mr-4 mb-4 px-3 py-2">
          {{ area.strArea }}
        </Chip>
      </div>
    </div>
  </div>
  <loader v-else />
</template>

<script>
import Loader from "../components/Loader.vue";
import useArea from "../composables/area";
import { onMounted } from 'vue';

export default {
  components: {
    Loader
  },
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
