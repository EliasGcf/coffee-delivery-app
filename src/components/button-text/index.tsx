import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';

type ButtonTextProps = {
  text: string;
  outline?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export function ButtonText({ outline = false, text, style, textStyle }: ButtonTextProps) {
  return (
    <View style={[styles.container, outline ? styles.containerOutline : {}, style]}>
      <Text style={[styles.text, outline ? styles.textOutline : {}, textStyle]}>
        {text}
      </Text>
    </View>
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
  },

  textOutline: {
    color: '#EFE3C8',
  },
});
