<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <h5>Area Page</h5>
        <p>
          {{ areas }}
        </p>

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
    console.log("Inside ingredient..");

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
