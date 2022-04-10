import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Api } from '~/services/api.types';

type CategoryListProps = {
  height: number;
  categories: Api.Category[];
  selectedCategory?: Api.Category | null;
  onChange: (category: Api.Category) => void;
};

export function CategoryList({
  height,
  categories,
  selectedCategory,
  onChange,
}: CategoryListProps) {
  const [sizes, setCategoriesBarSizes] = useState({ height: 0, width: 0 });

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
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            activeOpacity={0.7}
            style={styles.button}
            onPress={() => onChange(category)}
          >
            <Text
              style={[
                styles.text,
                selectedCategory?.id === category.id ? styles.selectedText : undefined,
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
