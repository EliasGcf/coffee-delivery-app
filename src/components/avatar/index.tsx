import { Image, StyleSheet, View } from 'react-native';

import AvatarImg from '~/assets/avatar.png';

export function Avatar() {
  return (
    <View style={style.container}>
      <Image style={style.avatar} source={AvatarImg} />
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#DCAA70',

    alignItems: 'center',
    justifyContent: 'center',
  },

  avatar: {
    height: 44,
    width: 44,
    borderRadius: 22,
  },
});
