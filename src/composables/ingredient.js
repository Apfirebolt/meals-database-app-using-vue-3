import httpClient from '../common/interceptor';
import { ref } from 'vue';

export default function useIngredient() {
  const ingredients = ref([]);
  const total = ref();
  const success = ref();
  const loading = ref(false);
  const error = ref();

  const getIngredientList = async () => {
    try {
      loading.value = true;  
      const { data } = await httpClient.get('/list.php?i=list');
      success.value = true;
      loading.value = false; 
      error.value = undefined;
      ingredients.value = data.meals;
    } catch (err) {
      success.value = false;
      loading.value = false; 
      error.value = err;
    }
  };

  return {
    getIngredientList,
    ingredients,
    total,
    success,
    error,
  };
}
