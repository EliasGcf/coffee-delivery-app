import { useNavigation } from '@react-navigation/native';
import { useMemo, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { STATUSBAR_HEIGHT } from '~/common/statusbar-height';

import { CategoryList } from '~/components/category-list';
import { Header } from '~/components/header';
import { Input } from '~/components/input';

import { HomeCard } from '~/pages/home/card';

import { api, useApi } from '~/services/api';
import { Api } from '~/services/api.types';

function EmptyList({ isLoading }: { isLoading: boolean }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      {isLoading ? (
        <ActivityIndicator
          size={Platform.OS === 'android' ? 'large' : 'small'}
          color="#EFE3C8"
        />
      ) : (
        <Text
          style={{ fontSize: 18, fontFamily: 'Rosarivo_400Regular', color: '#EFE3C8' }}
        >
          Found no coffees...
        </Text>
      )}
    </View>
  );
}

export function Home() {
  const [coffees, setCoffees] = useState<Api.Coffee[]>([]);
  const [categories, setCategories] = useState<Api.Category[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [mainContainerHeight, setMainContainerHeight] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<Api.Category | null>(null);

  const navigation = useNavigation();

  const { getCoffees } = useApi();

  const filteredCoffees = useMemo<Api.Coffee[]>(() => {
    return coffees.filter((coffee) =>
      coffee.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [coffees, searchValue]);

  useEffect(() => {
    async function loadData() {
      const categoriesResponse = await api.get('categories');

      const firstCategory = categoriesResponse.data[0];

      setCategories(categoriesResponse.data);
      setSelectedCategory(firstCategory);
    }

    loadData();
  }, []);

  useEffect(() => {
    if (!selectedCategory) return;

    setIsLoading(true);
    setCoffees([]);
    setSearchValue('');

    getCoffees({ categoryId: selectedCategory.id })
      .then((response) => setCoffees(response.data))
      .finally(() => setIsLoading(false));
  }, [getCoffees, selectedCategory]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
        <Input autoCorrect={false} value={searchValue} onChangeText={setSearchValue} />
      </View>

      <View
        style={styles.main}
        onLayout={(event) => setMainContainerHeight(event.nativeEvent.layout.height)}
      >
        <CategoryList
          categories={categories}
          height={mainContainerHeight}
          onChange={(data) => setSelectedCategory(data)}
          selectedCategory={selectedCategory}
        />

        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredCoffees}
          numColumns={2}
          keyExtractor={(item) => item.id}
          contentContainerStyle={[
            coffeeListStyle.contentContainer,
            filteredCoffees.length === 0 ? { flex: 1 } : undefined,
          ]}
          ListEmptyComponent={<EmptyList isLoading={isLoading} />}
          columnWrapperStyle={{ marginBottom: 16 }}
          renderItem={({ item, index }) => (
            <HomeCard
              coffee={item}
              onPress={() => navigation.navigate('Description', { coffee: item })}
              style={{
                marginRight:
                  index % 2 === 0 && index !== filteredCoffees.length - 1 ? 16 : 0,
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
    marginLeft: 38,
  },
});
