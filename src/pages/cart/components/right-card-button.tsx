import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import TrashSvg from '~/assets/svg/trash.svg';

type RightCardButtonProps = {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export function RightCardButton({ style, onPress }: RightCardButtonProps) {
  return (
    <RectButton style={[styles.container, style]} onPress={onPress}>
      <TrashSvg />
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C94C4C',
    borderRadius: 15,
    width: 55,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
  },
});
