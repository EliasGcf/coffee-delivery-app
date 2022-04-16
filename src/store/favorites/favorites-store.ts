import AsyncStorage from '@react-native-async-storage/async-storage';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import { Api } from '~/services/api.types';

// AsyncStorage.clear();

type FavoritesStore = {
  items: Api.Coffee[];
  add: (coffee: Api.Coffee) => void;
  remove: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

export const useFavorites = create<FavoritesStore>(
  persist<FavoritesStore>(
    (set, get) => ({
      items: [],

      add: (coffee) => {
        const item = get().items.find((fitem) => fitem.id === coffee.id);

        if (item) return;

        set((state) => ({ items: [...state.items, coffee] }));
      },

      remove: (id) => {
        set((state) => ({ items: state.items.filter((item) => item.id !== id) }));
      },

      isFavorite: (id) => {
        return !!get().items.find((item) => item.id === id);
      },
    }),
    {
      name: '@coffee/favorites',
      getStorage: () => AsyncStorage,
    }
  )
);
