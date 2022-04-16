import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { BorderlessButton, TouchableOpacity } from 'react-native-gesture-handler';

import { Api } from '~/services/api.types';

import { useFavorites } from '~/store/favorites/favorites-store';

type CartCardProps = {
  coffee: Api.Coffee;
  style?: StyleProp<ViewStyle>;
};

export function FavoriteCard({ coffee, style }: CartCardProps) {
  const navigation = useNavigation();
  const removeFromFavorites = useFavorites((state) => state.remove);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.card, style]}
      onPress={() => navigation.navigate('Description', { coffee })}
    >
      <Image source={{ uri: coffee.image_url }} style={styles.image} resizeMode="cover" />

      <View style={styles.textWrapper}>
        <Text style={styles.itemText}>{coffee.name}</Text>
        <Text style={styles.subItemText}>{coffee.simple_description}</Text>
        <Text style={styles.amountText}>{coffee.formatted_price}</Text>
      </View>

      <BorderlessButton onPress={() => removeFromFavorites(coffee.id)}>
        <AntDesign name="heart" size={24} color="#C94C4C" />
      </BorderlessButton>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    borderRadius: 15,
    backgroundColor: '#362C36',
    flexDirection: 'row',
    alignItems: 'center',
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

  quantityText: {
    marginHorizontal: 10,
    fontFamily: 'Rosarivo_400Regular',
    color: '#fff',
    fontSize: 20,
  },
});
