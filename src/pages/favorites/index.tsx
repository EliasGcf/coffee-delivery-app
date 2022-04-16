import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { EmptyList } from '~/pages/favorites/components/empty-list';
import { FavoriteCard } from '~/pages/favorites/components/favorite-card';

import { useFavorites } from '~/store/favorites/favorites-store';

export function Favorites() {
  const items = useFavorites((state) => state.items);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={items}
        keyExtractor={(coffee) => coffee.id}
        contentContainerStyle={items.length === 0 ? { flex: 1 } : undefined}
        ListEmptyComponent={EmptyList}
        renderItem={({ item }) => (
          <FavoriteCard coffee={item} style={{ marginBottom: 16 }} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
