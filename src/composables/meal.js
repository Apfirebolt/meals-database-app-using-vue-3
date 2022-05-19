import httpClient from '../common/interceptor';
import { ref } from 'vue';

export default function useMeal() {
  const meals = ref([]);
  const total = ref();
  const meal = ref(null);
  const success = ref();
  const error = ref();

  const getMealListByLetter = async (letter = 'a') => {
    try {
      const { data } = await httpClient.get('/search.php?f=' + letter);
      success.value = true;
      error.value = undefined;
      meals.value = data.meals;
      total.value = data.rowsNumber;
    } catch (err) {
      success.value = false;
      error.value = err;
    }
  };

  const getMealListByName = async (name) => {
    try {
      const { data } = await httpClient.get('/search.php?s=' + name);
      success.value = true;
      error.value = undefined;
      meals.value = data.meals;
      total.value = data.rowsNumber;
    } catch (err) {
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


  return {
    getMealListByLetter,
    getMealListByName,
    getRandomMeal,
    meals,
    meal,
    total,
    success,
    error,
  };
}
