import httpClient from '../common/interceptor';
import { ref } from 'vue';

export default function useMeal() {
  const meals = ref([]);
  const total = ref();
  const meal = ref(null);
  const success = ref();
  const isLoading = ref(false);
  const error = ref();

  const getMealListByLetter = async (letter = 'a') => {
    try {
      isLoading.value = true;
      const { data } = await httpClient.get('/search.php?f=' + letter);
      success.value = true;
      error.value = undefined;
      isLoading.value = false;
      meals.value = data.meals;
      total.value = data.rowsNumber;
    } catch (err) {
      isLoading.value = false;
      success.value = false;
      error.value = err;
    }
  };

  const getMealListByName = async (name) => {
    try {
      isLoading.value = true;
      const { data } = await httpClient.get('/search.php?s=' + name);
      success.value = true;
      error.value = undefined;
      isLoading.value = false;
      meals.value = data.meals;
      total.value = data.rowsNumber;
    } catch (err) {
      isLoading.value = false;
      success.value = false;
      error.value = err;
    }
  };

  const getRandomMeal = async () => {
    try {
      const { data } = await httpClient.get('/random.php');
      success.value = true;
      error.value = undefined;
      meal.value = data.meals[0];
      total.value = data.rowsNumber;
    } catch (err) {
      success.value = false;
      error.value = err;
    }
  };
  
  const filterMealByCategory = async (category) => {
    try {
      isLoading.value = true;
      const { data } = await httpClient.get('/filter.php?c=' + category);
      success.value = true;
      error.value = undefined;
      isLoading.value = false;
      meals.value = data.meals;
      total.value = data.rowsNumber;
    } catch (err) {
      isLoading.value = false;
      success.value = false;
      error.value = err;
    }
  };

  const filterMealByLocation = async (location) => {
    try {
      isLoading.value = true;
      const { data } = await httpClient.get('/filter.php?a=' + location);
      success.value = true;
      error.value = undefined;
      isLoading.value = false;
      meals.value = data.meals;
      total.value = data.rowsNumber;
    } catch (err) {
      success.value = false;
      isLoading.value = false;
      error.value = err;
    }
  };


  return {
    getMealListByLetter,
    getMealListByName,
    filterMealByCategory,
    filterMealByLocation,
    getRandomMeal,
    meals,
    meal,
    total,
    isLoading,
    success,
    error,
  };
}
