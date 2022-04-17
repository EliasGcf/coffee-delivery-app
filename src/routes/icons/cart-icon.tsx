import { AnimatePresence, MotiView } from 'moti';
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
      <AnimatePresence>
        {showDot && (
          <MotiView
            from={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            style={styles.dot}
          />
        )}
      </AnimatePresence>
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
