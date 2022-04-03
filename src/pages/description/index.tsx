import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import CoffeeImg from '~/assets/coffee-description.png';

import { STATUSBAR_HEIGHT } from '~/common/statusbar-height';

import { ButtonText } from '~/components/button-text';
import { Row } from '~/components/utils/row';

export function Description() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 16 }}
      >
        <Image source={CoffeeImg} style={styles.image} resizeMode="cover" />

        <View style={styles.main}>
          <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={styles.nameText}>Cappuccino</Text>
            <AntDesign name="heart" size={24} color="#C94C4C" />
          </Row>

          <Row style={{ marginTop: 8, alignItems: 'center' }}>
            <Text style={styles.shortDescriptionText}>Drizzled with Caramel</Text>
            <FontAwesome name="star" size={12} color="#D3A601" />
            <Text style={styles.starText}>4.5</Text>
          </Row>

          <Text style={styles.descriptionText}>
            A single espresso shot poured into hot foamy milk, with the surface topped
            with mildly sweetened cocoa powder and drizzled with scrumptious caramel syrup
            ...{' '}
            <Text
              style={{ fontFamily: 'OpenSans_700Bold', textDecorationLine: 'underline' }}
            >
              Read More
            </Text>
          </Text>

          <Text style={styles.milkChoiceText}>Choice of Milk</Text>

          <View style={{ marginTop: 8 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <ButtonText text="Oat Milk" style={{ marginRight: 8 }} />
              <ButtonText text="Soy Milk" outline style={{ marginRight: 8 }} />
              <ButtonText text="Almond Milk" outline style={{ marginRight: 8 }} />
            </ScrollView>
          </View>

          <Row style={styles.footer}>
            <View style={{ marginRight: 35 }}>
              <Text style={styles.priceLabel}>Price</Text>
              <Text style={styles.amountText}>₹249</Text>
            </View>

            <ButtonText
              text="BUY NOW"
              style={{ flex: 1, height: 45 }}
              textStyle={styles.buyButtonText}
            />
          </Row>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#201520',
    paddingTop: STATUSBAR_HEIGHT,
  },

  main: {
    flex: 1,
    marginTop: 16,
  },

  image: {
    width: '100%',
    borderRadius: 40,
  },

  nameText: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Rosarivo_400Regular',
  },

  shortDescriptionText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Rosarivo_400Regular',
    marginRight: 20,
  },

  starText: {
    fontSize: 12,
    color: '#fff',
    lineHeight: 12,
    fontFamily: 'Rosarivo_400Regular',
    marginLeft: 5,
  },

  descriptionText: {
    fontSize: 14,
    marginTop: 8,
    color: '#fff',
    fontFamily: 'OpenSans_400Regular',
  },

  milkChoiceText: {
    fontSize: 14,
    color: '#fff',
    marginTop: 30,
    fontFamily: 'Rosarivo_400Regular',
  },

  footer: {
    marginTop: 45,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  priceLabel: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'OpenSans_400Regular',
  },

  amountText: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'OpenSans_600SemiBold',
  },

  buyButtonText: {
    fontSize: 16,
    color: '#4A2B29',
    fontFamily: 'OpenSans_600SemiBold',
  },
});
