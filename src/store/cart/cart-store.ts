import AsyncStorage from '@react-native-async-storage/async-storage';
import create, { GetState, SetState, StoreApi } from 'zustand';
import { persist } from 'zustand/middleware';

import { Api } from '~/services/api.types';

import { formatCurrency } from '~/utils/format-currency';

// AsyncStorage.clear();

export type CartItem = {
  coffee: Api.Coffee;
  formattedPrice: string;
  quantity: number;
};

type CartStore = {
  showDot: boolean;
  items: CartItem[];
  amount: number;
  clear: () => void;
  add: (coffee: Api.Coffee) => void;
  remove: (coffee: Api.Coffee) => void;
  setShowDot: (showDot: boolean) => void;
};

const middleware =
  (config: any) =>
  (set: SetState<CartStore>, get: GetState<CartStore>, api: StoreApi<CartStore>) =>
    config(
      (args: CartStore) => {
        const amount = get().items.reduce((acc, item) => {
          return acc + item.quantity * item.coffee.price;
        }, 0);

        set({ amount });
        set(args);
      },
      () => {
        const amount = get().items.reduce((acc, item) => {
          return acc + item.quantity * item.coffee.price;
        }, 0);

        set({ amount });

        return get();
      },
      api
    );

export const useCart = create<CartStore>(
  middleware(
    persist<CartStore>(
      (set) => ({
        showDot: false,

        items: [],

        amount: 0,

        clear: () => {
          set({ items: [] });
        },

        add: (coffee: Api.Coffee) => {
          set((state) => {
            const item = state.items.find((fItem) => fItem.coffee.id === coffee.id);

            if (item) {
              return {
                items: state.items.map((fItem) => {
                  if (fItem.coffee.id === coffee.id) {
                    return { ...fItem, quantity: fItem.quantity + 1 };
                  }

                  return fItem;
                }),
              };
            }

            return {
              items: [
                ...state.items,
                { coffee, quantity: 1, formattedPrice: formatCurrency(coffee.price) },
              ],
            };
          });
        },

        remove: (coffee: Api.Coffee) => {
          set((state) => {
            const item = state.items.find((fItem) => fItem.coffee.id === coffee.id);

            if (item?.quantity === 1) {
              return {
                items: state.items.filter((fItem) => fItem.coffee.id !== coffee.id),
              };
            }

            return {
              items: state.items.map((fItem) => {
                if (fItem.coffee.id === coffee.id) {
                  return { ...fItem, quantity: fItem.quantity - 1 };
                }

                return fItem;
              }),
            };
          });
        },

        setShowDot: (showDot: boolean) => {
          set({ showDot });
        },
      }),
      {
        name: '@coffee/cart',
        getStorage: () => AsyncStorage,
      }
    )
  )
);
