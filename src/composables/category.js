import httpClient from '../common/interceptor';
import { ref } from 'vue';

export default function useCategory() {
  const categories = ref([]);
  const total = ref();
  const success = ref();
  const error = ref();

  const getCategoriesList = async () => {
    try {
      const { data } = await httpClient.get('/categories.php');
      success.value = true;
      error.value = undefined;
      categories.value = data.categories;
      total.value = data.rowsNumber;
    } catch (err) {
      success.value = false;
      error.value = err;
    }
  };

  return {
    getCategoriesList,
    categories,
    total,
    success,
    error,
  };
}
