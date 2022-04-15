import axios from 'axios';

import { Api } from '~/services/api.types';

import { formatCurrency } from '~/utils/format-currency';

export const api = axios.create({
  baseURL: process.env.API_URL,
});

async function getCoffees({
  categoryId,
}: {
  categoryId?: string;
}): Promise<{ data: Api.Coffee[] }> {
  try {
    const response = await api.get<Api.RawCoffee[]>('coffees', {
      params: { categoryId },
    });

    const data = response.data.map((coffee) => {
      return { ...coffee, formatted_price: formatCurrency(coffee.price) };
    });

    return { data };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return { data: [] };
  }
}

export function useApi() {
  return {
    getCoffees,
  };
}
