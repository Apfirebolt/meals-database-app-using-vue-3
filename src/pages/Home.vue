<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <h5>Home Page</h5>
        <p>
          This would list all ingredients
        </p>
        {{ ingredients }}
      </div>
    </div>
  </div>
</template>

<script>
import useIngredient from "../composables/ingredient";
import { onMounted } from 'vue';

export default {
  setup() {
    const { getIngredientList, ingredients } = useIngredient();
    console.log("Inside ingredient..");

    onMounted(() => {
      getIngredientList();
    });

    return {
        ingredients
    }
  },
};
</script>

<style scoped></style>
