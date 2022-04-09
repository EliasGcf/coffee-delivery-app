import { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

export function CategoryList() {
  const [sizes, setCategoriesBarSizes] = useState({ height: 0, width: 0 });

  return (
    <View
      style={[
        styles.container,
        {
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
      <Text style={styles.text}>Cappuccino</Text>
      <Text style={styles.text}>Latte</Text>
      <Text style={styles.text}>Americano</Text>
      <Text style={styles.text}>Espresso</Text>
      <Text style={styles.text}>Flat White</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 38,
    width: Dimensions.get('window').height,
    position: 'absolute',
    zIndex: 1,
    left: 0,
    paddingHorizontal: 34,
    backgroundColor: '#38232A',
    borderTopStartRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },

  text: {
    fontSize: 14,
    fontFamily: 'Rosarivo_400Regular',
    transform: [{ rotate: '180deg' }],
    color: '#938379',
    marginRight: 40,
  },
});