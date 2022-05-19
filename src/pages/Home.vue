<template>
  <div class="grid">
    <div v-if="meal" class="col-12">
      <div class="card">
        <h5>Welcome to the homepage of Meals Mania</h5>
        <p>
          You'd see a random meal recommeded for you to taste today.
        </p>
        <Card>
          <template #header>
            <img alt="user header" :src="meal.strMealThumb" />
          </template>
          <template #title>
            Your random meal for today is "{{ meal.strMeal }}"
            <p class="text-green-200">
              Meal Category - {{ meal.strCategory }}
            </p>
            <p class="text-blue-400">
              Meal Classification - {{ meal.strArea }}
            </p>
          </template>
          <template #content>
            {{ meal.strInstructions }}
            <p class="my-2">
              <a :href="meal.strYoutube">Youtube Link</a>
            </p>
          </template>
          <template #footer>
            <Button icon="pi pi-check" label="Get Another Meal" @click="getRandomMeal" />
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import useMeal from "../composables/meal";
import { onMounted } from "vue";

export default {
  setup() {
    const { getRandomMeal, meal } = useMeal();

    onMounted(() => {
      getRandomMeal();
    });

    return {
      meal,
      getRandomMeal
    };
  },
};
</script>

<style scoped></style>
