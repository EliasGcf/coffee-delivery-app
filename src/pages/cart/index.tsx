import { EvilIcons } from '@expo/vector-icons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useMemo } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';

import { ButtonText } from '~/components/button-text';
import { Divider } from '~/components/divider';
import { Row } from '~/components/row';
import { Ticket } from '~/components/ticket';

import { CartCard } from '~/pages/cart/card';

import { useCart } from '~/store/cart/cart-store';

import { formatCurrency } from '~/utils/format-currency';

export function Cart() {
  const items = useCart((state) => state.items);
  const amount = useCart((state) => state.amount);
  const clearCart = useCart((state) => state.clear);
  const setShowDot = useCart((state) => state.setShowDot);

  const amountWithDelivery = useMemo(() => {
    return amount + 6;
  }, [amount]);

  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      setShowDot(false);
    }, [setShowDot])
  );

  function handlePayButton() {
    Alert.alert('Payment', `You will pay ${formatCurrency(amountWithDelivery)}`, [
      { text: 'Cancel', style: 'destructive' },
      {
        text: 'Pay',
        onPress: () => {
          clearCart();
          navigation.reset({ routes: [{ name: 'TabRoutes' }] });
        },
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContentStyle}
        >
          {items.length === 0 ? (
            <Text style={styles.emptyText}>Cart is empty...</Text>
          ) : (
            items.map((item, index) => (
              <CartCard
                key={item.coffee.id}
                item={item}
                style={index !== 0 ? { marginTop: 16 } : undefined}
              />
            ))
          )}

          <Divider style={{ marginVertical: 20 }} />

          <Ticket>
            <Text style={styles.ticketText}>Apply Coupon Code </Text>
            <EvilIcons name="chevron-right" size={30} color="#EFE3C8" />
          </Ticket>

          <Row style={{ justifyContent: 'space-between', marginTop: 20 }}>
            <Text style={styles.itemText}>Delivery Charges</Text>
            <Text style={styles.itemAmountText}>{amount === 0 ? '$0.00' : '$6.00'}</Text>
          </Row>

          <Row style={{ justifyContent: 'space-between', marginTop: 8 }}>
            <Text style={styles.itemText}>Taxes</Text>
            <Text style={styles.itemAmountText}>{formatCurrency(amount)}</Text>
          </Row>

          <Divider style={{ marginVertical: 20 }} />

          <Row style={{ justifyContent: 'space-between' }}>
            <Text style={styles.totalText}>Grand Total</Text>
            <Text style={styles.totalAmountText}>
              {formatCurrency(amount === 0 ? 0 : amountWithDelivery)}
            </Text>
          </Row>
        </ScrollView>

        <ButtonText
          text="PAY NOW"
          onPress={handlePayButton}
          disabled={items.length === 0}
          style={[styles.payButton]}
          textStyle={styles.payButtonText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  main: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 36,
  },

  scrollViewContentStyle: {
    paddingBottom: 16,
  },

  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#EFE3C8',
    fontFamily: 'Rosarivo_400Regular',
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

  payButtonDisabled: {},

  payButtonText: {
    fontSize: 16,
    fontFamily: 'OpenSans_600SemiBold',
  },
});
