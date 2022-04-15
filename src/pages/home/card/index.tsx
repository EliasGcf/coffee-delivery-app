import { Feather, FontAwesome } from '@expo/vector-icons';
import { Image, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { BorderlessButton, TouchableOpacity } from 'react-native-gesture-handler';

import { Api } from '~/services/api.types';

import { useCart } from '~/store/cart/cart-store';

type HomeCardProps = {
  coffee: Api.Coffee;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export function HomeCard({ coffee, style, onPress }: HomeCardProps) {
  const addItemToCart = useCart((state) => state.add);

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[styles.container, style]}
    >
      <View>
        <Image
          style={styles.image}
          source={{ uri: coffee.image_url }}
          resizeMode="cover"
        />
        <Text style={styles.coffeeName}>{coffee.name}</Text>

        <View style={styles.starBadgeContainer}>
          <FontAwesome name="star" size={10} color="#D3A601" />
          <Text style={styles.starText}>{coffee.stars}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.amountCenter}>
          <Text style={styles.amount}>{coffee.formatted_price}</Text>
        </View>

        <BorderlessButton
          onPress={() => addItemToCart(coffee)}
          style={styles.amountPlusContainer}
        >
          <Feather name="plus" size={24} color="black" />
        </BorderlessButton>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 135,
    padding: 12,

    borderRadius: 12.61,

    backgroundColor: '#362C36',

    justifyContent: 'space-between',
  },

  image: {
    width: 111,
    height: 111,

    backgroundColor: '#463D46',

    borderRadius: 15,
    borderTopLeftRadius: 18,
  },

  coffeeName: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Rosarivo_400Regular',

    marginTop: 8,
  },

  starBadgeContainer: {
    height: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#353131',
    paddingHorizontal: 8,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  starText: {
    color: '#fff',
    fontFamily: 'Rosarivo_400Regular',
    fontSize: 10,
    marginLeft: 4,
    lineHeight: 10,
  },

  footer: {
    flexDirection: 'row',
    height: 39,
    borderRadius: 12,
    marginTop: 13,

    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: '#463D46',
  },

  amountCenter: {
    flex: 1,
    alignItems: 'center',
  },

  amount: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'OpenSans_600SemiBold',
  },

  amountPlusContainer: {
    backgroundColor: '#EFE3C8',
    height: 39,
    width: 39,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
