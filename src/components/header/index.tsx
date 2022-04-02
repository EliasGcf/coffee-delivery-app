import { StyleSheet, Text, View } from 'react-native';

import { Avatar } from '~/components/avatar';

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textFirst}>déjà</Text>
        <Text style={styles.textSecond}>Brew</Text>
      </View>

      <Avatar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  textFirst: { color: '#877C74', fontSize: 36, fontFamily: 'Rosarivo_400Regular' },

  textSecond: {
    fontSize: 48,
    color: '#EFE3C8',
    fontFamily: 'Rosarivo_400Regular',
    marginTop: -20,
    marginLeft: 5,
  },
});
