import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

type ButtonTextProps = {
  text: string;
  outline?: boolean;
  onPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export function ButtonText({
  outline = false,
  text,
  onPress,
  disabled = false,
  style,
  textStyle,
}: ButtonTextProps) {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.6}
      onPress={onPress}
      style={[
        styles.container,
        outline ? styles.containerOutline : {},
        style,
        disabled ? styles.containerOutline : undefined,
      ]}
    >
      <Text
        style={[
          styles.text,
          outline ? styles.textOutline : {},
          textStyle,
          disabled ? styles.textOutline : undefined,
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFE3C8',
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,

    borderWidth: 1,
    borderColor: '#EFE3C8',
  },

  containerOutline: {
    backgroundColor: 'transparent',
  },

  text: {
    fontSize: 14,
    fontFamily: 'Rosarivo_400Regular',
    color: '#201520',
  },

  textOutline: {
    color: '#EFE3C8',
  },
});
