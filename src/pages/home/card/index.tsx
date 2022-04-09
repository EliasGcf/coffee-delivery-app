import { Feather, FontAwesome } from '@expo/vector-icons';
import { Image, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

type HomeCardProps = {
  title: string;
  amount: string;
  image_url: string;
  stars: number;
  style?: StyleProp<ViewStyle>;
};

export function HomeCard({ title, amount, image_url, stars, style }: HomeCardProps) {
  return (
    <View style={[styles.container, style]}>
      <View>
        <Image style={styles.image} source={{ uri: image_url }} resizeMode="cover" />
        <Text style={styles.coffeeName}>{title}</Text>

        <View style={styles.starBadgeContainer}>
          <FontAwesome name="star" size={10} color="#D3A601" />
          <Text style={styles.starText}>{stars}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.amountCenter}>
          <Text style={styles.amount}>{amount}</Text>
        </View>

        <View style={styles.amountPlusContainer}>
          <Feather name="plus" size={24} color="black" />
        </View>
      </View>
    </View>
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
