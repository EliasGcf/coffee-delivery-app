import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { STATUSBAR_HEIGHT } from '~/common/statusbar-height';

import { ButtonText } from '~/components/button-text';
import { GoBackButton } from '~/components/go-back-button';
import { Row } from '~/components/row';

import { DescriptionScreenRouteProp } from '~/routes/routes.type';

import { useCart } from '~/store/cart/cart-store';

export function Description() {
  const [selectedMilk, setSelectedMilk] = useState('');
  const [showFullDescription, setShowFullDescription] = useState(false);

  const { params } = useRoute<DescriptionScreenRouteProp>();
  const navigation = useNavigation();
  const addItemToCart = useCart((state) => state.add);

  const handlePayButton = useCallback(() => {
    addItemToCart(params.coffee);
    navigation.navigate('TabRoutes', { screen: 'Cart' });
  }, [addItemToCart, navigation, params.coffee]);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <View style={styles.imageWrapper}>
          <View>
            <Image
              source={{ uri: params.coffee.image_url }}
              style={styles.image}
              resizeMode="cover"
            />

            <GoBackButton style={styles.goBackButton} />
          </View>
        </View>

        <View style={styles.main}>
          <Row style={{ justifyContent: 'space-between' }}>
            <Text style={styles.nameText}>{params.coffee.name}</Text>
            <AntDesign name="heart" size={24} color="#C94C4C" />
          </Row>

          <Row style={{ marginTop: 8 }}>
            <Text style={styles.shortDescriptionText}>
              {params.coffee.simple_description}
            </Text>
            <FontAwesome name="star" size={12} color="#D3A601" />
            <Text style={styles.starText}>{params.coffee.stars}</Text>
          </Row>

          <Text
            style={styles.descriptionText}
            numberOfLines={showFullDescription ? undefined : 3}
          >
            {params.coffee.description}
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
            {params.coffee.milk_options.map((milk, index) => (
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
            <Text style={styles.amountText}>{params.coffee.formatted_price}</Text>
          </View>

          <ButtonText
            text="BUY NOW"
            style={{ flex: 1, height: 45 }}
            textStyle={styles.buyButtonText}
            onPress={handlePayButton}
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

  goBackButton: {
    position: 'absolute',
    left: 10,
    top: 24,
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
