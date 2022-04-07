import { StyleProp, View, ViewStyle } from 'react-native';

type RowProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function Row({ children, style }: RowProps) {
  return <View style={[{ flexDirection: 'row' }, style]}>{children}</View>;
}
