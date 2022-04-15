import React from 'react';
import { StyleSheet, View } from 'react-native';

import CartSvg from '~/assets/svg/cart.svg';

import { useCart } from '~/store/cart/cart-store';

type CartIconProps = {
  // focused: boolean;
  color: string;
  // size: number;
};

export function CartIcon({ color }: CartIconProps) {
  const showDot = useCart((state) => state.showDot);

  return (
    <View>
      <CartSvg fill={color} />
      {showDot && <View style={styles.dot} />}
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    height: 8,
    width: 8,
    backgroundColor: '#C94C4C',
    position: 'absolute',
    borderRadius: 4,
    right: 0,
    top: 0,
  },
});
