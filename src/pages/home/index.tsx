import { FlatList, StyleSheet, View } from 'react-native';

import { STATUSBAR_HEIGHT } from '~/common/statusbar-height';

import { HomeCard } from '~/pages/home/card';

import { CategoryList } from '~/components/category-list';
import { Header } from '~/components/header';
import { Input } from '~/components/input';

const coffeeData = [
  { id: '1', title: 'Cinnamon & Cocoa', amount: '₹99' },
  { id: '2', title: 'Drizzled with Caramel', amount: '₹199' },
  { id: '3', title: 'Bursting Blueberry', amount: '₹249' },
  { id: '4', title: 'Dalgona Whipped Macha', amount: '₹299' },
  { id: '5', title: 'Drizzled with Caramel', amount: '₹199' },
  { id: '6', title: 'Bursting Blueberry', amount: '₹249' },
  { id: '7', title: 'Cinnamon & Cocoa', amount: '₹99' },
];

export function Home() {
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
          data={coffeeData}
          numColumns={2}
          keyExtractor={(item) => item.id}
          contentContainerStyle={coffeeListStyle.contentContainer}
          renderItem={({ item, index }) => (
            <HomeCard
              title={item.title}
              amount={item.amount}
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
