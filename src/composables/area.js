import httpClient from '../common/interceptor';
import { ref } from 'vue';

export default function useArea() {
  const areas = ref([]);
  const total = ref();
  const success = ref();
  const error = ref();

  const getAreasList = async () => {
    try {
      const { data } = await httpClient.get('/list.php?a=list');
      success.value = true;
      error.value = undefined;
      areas.value = data.meals;
      total.value = data.rowsNumber;
    } catch (err) {
      success.value = false;
      error.value = err;
    }
  };

  return {
    getAreasList,
    areas,
    total,
    success,
    error,
  };
}
