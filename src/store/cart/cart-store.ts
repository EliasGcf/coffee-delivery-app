import AsyncStorage from '@react-native-async-storage/async-storage';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import { Api } from '~/services/api.types';

// AsyncStorage.clear();

type Item = {
  coffee: Api.Coffee;
  quantity: number;
};

type CartStore = {
  items: Item[];
  add: (coffee: Api.Coffee) => void;
};

export const useCart = create(
  persist<CartStore>(
    (set) => ({
      items: [],

      add: (coffee: Api.Coffee) => {
        set((state) => {
          const itemExists = state.items.find((fItem) => fItem.coffee.id === coffee.id);

          if (itemExists) {
            return {
              items: state.items.map((fItem) => {
                if (fItem.coffee.id === coffee.id) {
                  return { ...fItem, quantity: fItem.quantity + 1 };
                }

                return fItem;
              }),
            };
          }

          return { items: [...state.items, { coffee, quantity: 1 }] };
        });
      },
    }),
    {
      name: '@coffee/cart',
      getStorage: () => AsyncStorage,
    }
  )
);
