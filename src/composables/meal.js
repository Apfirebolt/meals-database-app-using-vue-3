import axios from 'axios';
import { ref } from 'vue';

export default function useMeal() {
  const meals = ref([]);
  const randomMeal = ref();
  const total = ref();
  const success = ref();
  const error = ref();

  const getRandomMeal = async () => {
      
  }

  const getMealList = async () => {
    try {
      const { data } = await axios.get('/search.php?s=Arrabiata');
      success.value = true;
      error.value = undefined;
      meals.value = data.results;
      total.value = data.rowsNumber;
    } catch (err) {
      success.value = false;
      error.value = err;
    }
  };

  return {
    getMealList,
    meals,
    total,
    success,
    error,
  };
}
