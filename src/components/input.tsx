import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, TextInput, View } from 'react-native';

export function Input() {
  return (
    <View style={style.container}>
      <FontAwesome name="search" size={24} color="#877C74" />
      <TextInput
        style={style.textInput}
        placeholder="Browse your favorite coffee..."
        placeholderTextColor="#877C74"
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#171017',
    borderRadius: 10,
    paddingHorizontal: 20,
  },

  textInput: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Rosarivo_400Regular',
    marginLeft: 20,
    color: '#877C74',
  },
});
