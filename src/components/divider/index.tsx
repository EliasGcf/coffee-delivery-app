import React from 'react';
import { StyleProp, ViewStyle, Dimensions } from 'react-native';
import Svg, { G, Rect } from 'react-native-svg';

type DividerProps = {
  style?: StyleProp<ViewStyle>;
};

export function Divider({ style }: DividerProps) {
  const { width } = Dimensions.get('screen');
  const spacing = 14;

  const dashes = new Array(Math.floor(width / spacing) + 1).fill(null);

  return (
    <Svg height="1" width="100%" style={style}>
      <G>
        {dashes.map((_, index) => (
          <Rect
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            width="7 "
            height="1"
            fill="#FFFFFF"
            opacity={0.2}
            translateX={spacing * index}
          />
        ))}
      </G>
    </Svg>
  );
}
