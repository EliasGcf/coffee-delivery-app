import { Feather } from '@expo/vector-icons';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

import { IconButton } from '~/components/icon-button';
import { Row } from '~/components/utils/row';

type CartCardProps = {
  title: string;
  subTitle: string;
  amount: string;
  quantity: number;
  image: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
};

export function CartCard({
  title,
  subTitle,
  amount,
  quantity,
  image,
  style,
}: CartCardProps) {
  return (
    <Row style={[styles.card, style]}>
      <Image source={image} style={styles.image} resizeMode="cover" />

      <View style={styles.textWrapper}>
        <Text style={styles.itemText}>{title}</Text>
        <Text style={styles.subItemText}>{subTitle}</Text>
        <Text style={styles.amountText}>{amount}</Text>
      </View>

      <Row style={styles.quantityWrapper}>
        <IconButton>
          <Feather name="minus" size={22} color="#1C161E" />
        </IconButton>

        <Text style={styles.quantityText}>{quantity}</Text>

        <IconButton>
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
    alignItems: 'center',
    marginLeft: 'auto',
    height: 30,
    alignSelf: 'center',
  },

  quantityText: {
    marginHorizontal: 10,
    fontFamily: 'Rosarivo_400Regular',
    color: '#fff',
    fontSize: 20,
  },
});
