import { EvilIcons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import CoffeeImg from '~/assets/coffee-description.png';

import { STATUSBAR_HEIGHT } from '~/common/statusbar-height';

import { CartCard } from '~/pages/cart/card';

import { ButtonText } from '~/components/button-text';
import { Divider } from '~/components/divider';
import { Ticket } from '~/components/ticket';
import { Row } from '~/components/utils/row';

export function Cart() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>

      <View style={styles.main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CartCard
            title="Cappuccino"
            subTitle="Dalgona Macha"
            amount="₹299"
            image={CoffeeImg}
            quantity={1}
          />

          <CartCard
            title="Cappuccino"
            subTitle="Dalgona Macha"
            amount="₹299"
            image={CoffeeImg}
            quantity={2}
            style={{ marginTop: 16 }}
          />

          <Divider style={{ marginVertical: 20 }} />

          <Ticket>
            <Text style={styles.ticketText}>Apply Coupon Code </Text>
            <EvilIcons name="chevron-right" size={30} color="#EFE3C8" />
          </Ticket>

          <Row style={{ justifyContent: 'space-between', marginTop: 20 }}>
            <Text style={styles.itemText}>Delivery Charges</Text>
            <Text style={styles.itemAmountText}>₹49</Text>
          </Row>

          <Row style={{ justifyContent: 'space-between', marginTop: 8 }}>
            <Text style={styles.itemText}>Taxes</Text>
            <Text style={styles.itemAmountText}>₹64.87</Text>
          </Row>

          <Divider style={{ marginVertical: 20 }} />

          <Row style={{ justifyContent: 'space-between' }}>
            <Text style={styles.totalText}>Grand Total</Text>
            <Text style={styles.totalAmountText}>₹1009.87</Text>
          </Row>
        </ScrollView>

        <ButtonText
          text="PAY NOW"
          style={styles.payButton}
          textStyle={styles.payButtonText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#201520',
    paddingTop: STATUSBAR_HEIGHT,
  },

  main: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 36,
  },

  title: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Rosarivo_400Regular',
  },

  ticketText: {
    fontSize: 14,
    color: '#EFE3C8',
    fontFamily: 'Rosarivo_400Regular',
  },

  itemText: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Rosarivo_400Regular',
  },

  itemAmountText: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'OpenSans_600SemiBold',
  },

  totalText: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Rosarivo_400Regular',
  },

  totalAmountText: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'OpenSans_600SemiBold',
  },

  payButton: {
    marginTop: 'auto',
    height: 45,
  },

  payButtonText: {
    fontSize: 16,
    fontFamily: 'OpenSans_600SemiBold',
  },
});
