import { StyleProp, View, ViewStyle } from 'react-native';

type RowProps = {
  center?: boolean;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function Row({ children, center = true, style }: RowProps) {
  return (
    <View
      style={[
        { flexDirection: 'row' },
        center ? { alignItems: 'center' } : undefined,
        style,
      ]}
    >
      {children}
    </View>
  );
}
