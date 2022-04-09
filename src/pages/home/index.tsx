import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { STATUSBAR_HEIGHT } from '~/common/statusbar-height';

import { CategoryList } from '~/components/category-list';
import { Header } from '~/components/header';
import { Input } from '~/components/input';

import { HomeCard } from '~/pages/home/card';

import { api } from '~/services/api';
import { Api } from '~/services/api.types';

export function Home() {
  const [coffees, setCoffees] = useState<Api.Coffee[]>([]);

  useEffect(() => {
    api.get('coffees').then((response) => setCoffees(response.data));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
        <Input />
      </View>

      <View style={styles.main}>
        <CategoryList />

        <FlatList
          showsVerticalScrollIndicator={false}
          data={coffees}
          numColumns={2}
          keyExtractor={(item) => item.id}
          contentContainerStyle={coffeeListStyle.contentContainer}
          renderItem={({ item, index }) => (
            <HomeCard
              title={item.name}
              amount={item.price}
              image_url={item.image_url}
              style={{
                marginBottom: 16,
                marginRight: index % 2 === 0 ? 16 : 0,
              }}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#201520',
  },

  headerContainer: {
    marginTop: STATUSBAR_HEIGHT,
    paddingHorizontal: 16,
    width: '100%',
  },

  main: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
});

const coffeeListStyle = StyleSheet.create({
  contentContainer: {
    paddingBottom: 16,
    paddingLeft: 38,
  },
});
