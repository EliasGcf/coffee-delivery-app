import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { STATUSBAR_HEIGHT } from '~/common/statusbar-height';

import { ButtonText } from '~/components/button-text';
import { Row } from '~/components/row';

import { Api } from '~/services/api.types';

const coffee: Api.Coffee = {
  id: '1',
  name: 'Espresso',
  simple_description: 'Also known as a short black',
  description:
    'Also known as a short black, an espresso is a single shot of coffee. No extra hot water is added, resulting in an intense and flavoursome drink.\n\nAn espresso shot, which forms the basis of many of the other drinks to follow, is produced by forcing hot water through finely ground coffee beans.',
  price: '$2.00',
  stars: 4.4,
  image_url:
    'https://res.cloudinary.com/eliasgcf/image/upload/v1649461044/coffee%20delivery%20app/jeremy-yap-jn-HaGWe4yw-unsplash_hqc04t.jpg',
  categoryId: '4',
  milk_options: [
    'No Milk',
    'Oat Milk',
    'Soy Milk',
    'Almond Milk',
    'Coconut Milk',
    'Cream',
  ],
};

export function Description() {
  const [selectedMilk, setSelectedMilk] = useState('');
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: coffee.image_url }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <View style={styles.main}>
          <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={styles.nameText}>{coffee.name}</Text>
            <AntDesign name="heart" size={24} color="#C94C4C" />
          </Row>

          <Row style={{ marginTop: 8, alignItems: 'center' }}>
            <Text style={styles.shortDescriptionText}>{coffee.simple_description}</Text>
            <FontAwesome name="star" size={12} color="#D3A601" />
            <Text style={styles.starText}>{coffee.stars}</Text>
          </Row>

          <Text
            style={styles.descriptionText}
            numberOfLines={showFullDescription ? undefined : 3}
          >
            {coffee.description}
          </Text>

          <Text
            onPress={() => setShowFullDescription((prevState) => !prevState)}
            style={styles.readMoreText}
          >
            {showFullDescription ? 'Read Less' : 'Read More'}
          </Text>
        </View>

        <Text style={styles.milkChoiceText}>Choice of Milk</Text>
        <View style={{ marginTop: 8 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
          >
            {coffee.milk_options.map((milk, index) => (
              <ButtonText
                onPress={() => setSelectedMilk(milk)}
                key={index}
                text={milk}
                outline={selectedMilk !== milk}
                style={{ marginRight: 8 }}
              />
            ))}
          </ScrollView>
        </View>

        <Row style={styles.checkoutContainer}>
          <View style={{ marginRight: 35 }}>
            <Text style={styles.priceLabel}>Price</Text>
            <Text style={styles.amountText}>{coffee.price}</Text>
          </View>

          <ButtonText
            text="BUY NOW"
            style={{ flex: 1, height: 45 }}
            textStyle={styles.buyButtonText}
          />
        </Row>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#201520',
    paddingTop: STATUSBAR_HEIGHT,
  },

  scrollViewContainer: { paddingBottom: 24, flexGrow: 1 },

  main: {
    flex: 1,
    marginTop: 16,

    paddingHorizontal: 16,
  },

  imageWrapper: {
    paddingHorizontal: 16,
  },

  image: {
    height: 411,
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

  readMoreText: {
    fontSize: 14,
    marginTop: 8,
    color: '#fff',
    fontFamily: 'OpenSans_700Bold',
    textDecorationLine: 'underline',
    marginBottom: 30,
  },

  milkChoiceText: {
    fontSize: 14,
    color: '#fff',
    marginTop: 'auto',
    fontFamily: 'Rosarivo_400Regular',
    marginLeft: 16,
  },

  checkoutContainer: {
    marginTop: 45,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
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
