import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type CategoryListProps = {
  height: number;
};

const categoryData = [
  { id: 1, name: 'Cappuccino' },
  { id: 2, name: 'Latte' },
  { id: 3, name: 'Americano' },
  { id: 4, name: 'Espresso' },
  { id: 5, name: 'Flat White' },
];

export function CategoryList({ height }: CategoryListProps) {
  const [sizes, setCategoriesBarSizes] = useState({ height: 0, width: 0 });

  const [selectedCategoryId, setSelectedCategoryId] = useState(1);

  return (
    <View
      style={[
        styles.container,
        {
          width: height,
          transform: [
            { rotate: '90deg' },
            { translateY: sizes.width / 2 - sizes.height / 2 },
            { translateX: sizes.width / 2 - sizes.height / 2 },
          ],
        },
      ]}
      onLayout={(event) => {
        setCategoriesBarSizes({
          width: event.nativeEvent.layout.width,
          height: event.nativeEvent.layout.height,
        });
      }}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContentContainer}
      >
        {categoryData.map((category) => (
          <TouchableOpacity
            key={category.id}
            activeOpacity={0.7}
            style={styles.button}
            onPress={() => setSelectedCategoryId(category.id)}
          >
            <Text
              style={[
                styles.text,
                selectedCategoryId === category.id ? styles.selectedText : undefined,
              ]}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 38,
    position: 'absolute',
    zIndex: 1,
    left: 0,
    backgroundColor: '#38232A',
    borderTopStartRadius: 10,
    flexDirection: 'row',
  },

  scrollViewContentContainer: {
    paddingHorizontal: 34,
  },

  button: {
    marginRight: 40,
    justifyContent: 'center',
  },

  text: {
    fontSize: 14,
    fontFamily: 'Rosarivo_400Regular',
    transform: [{ rotate: '180deg' }],
    color: '#938379',
  },

  selectedText: {
    color: '#EFE3C8',
    transform: [{ rotate: '180deg' }, { scale: 1.15 }],
  },
});
