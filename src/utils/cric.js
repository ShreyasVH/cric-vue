import { BASE_URL_CRICBUZZ, GET_YEARS } from '@/constants';
import { get } from '@/utils/api';

export const getYears = async () => {
  let years = [];

  try {
    const response = await get(BASE_URL_CRICBUZZ + GET_YEARS);
    years = response.data;
  } catch (e) {
    console.log(e);
  }

  return years;
};