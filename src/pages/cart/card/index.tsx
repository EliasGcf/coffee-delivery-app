import { Feather } from '@expo/vector-icons';
import { Image, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

import { IconButton } from '~/components/icon-button';
import { Row } from '~/components/row';

import { CartItem, useCart } from '~/store/cart/cart-store';

type CartCardProps = {
  item: CartItem;
  style?: StyleProp<ViewStyle>;
};

export function CartCard({ item, style }: CartCardProps) {
  const removeCoffeeFromCart = useCart((state) => state.remove);
  const addCoffeeToCart = useCart((state) => state.add);

  return (
    <Row style={[styles.card, style]}>
      <Image
        source={{ uri: item.coffee.image_url }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.textWrapper}>
        <Text style={styles.itemText}>{item.coffee.name}</Text>
        <Text style={styles.subItemText}>{item.coffee.simple_description}</Text>
        <Text style={styles.amountText}>{item.coffee.formatted_price}</Text>
      </View>

      <Row style={styles.quantityWrapper}>
        <IconButton onPress={() => removeCoffeeFromCart(item.coffee)}>
          <Feather name="minus" size={22} color="#1C161E" />
        </IconButton>

        <Text style={styles.quantityText}>{item.quantity}</Text>

        <IconButton onPress={() => addCoffeeToCart(item.coffee)}>
          <Feather name="plus" size={22} color="#1C161E" />
        </IconButton>
      </Row>
    </Row>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    borderRadius: 15,
    backgroundColor: '#362C36',
  },

  image: {
    height: 72,
    width: 72,
    borderRadius: 15,
  },

  textWrapper: {
    justifyContent: 'space-between',
    marginLeft: 12,
    flex: 1,
    paddingRight: 8,
  },

  itemText: {
    fontSize: 14,
    fontFamily: 'Rosarivo_400Regular',
    color: '#fff',
  },

  subItemText: {
    fontSize: 12,
    fontFamily: 'Rosarivo_400Regular',
    color: '#fff',
  },

  amountText: {
    fontSize: 16,
    fontFamily: 'OpenSans_600SemiBold',
    color: '#fff',
  },

  quantityWrapper: {
    backgroundColor: '#463D46',
  },

  quantityText: {
    marginHorizontal: 10,
    fontFamily: 'Rosarivo_400Regular',
    color: '#fff',
    fontSize: 20,
  },
});
