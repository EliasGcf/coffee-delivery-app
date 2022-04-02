import { StyleSheet, View } from 'react-native';

import { STATUSBAR_HEIGHT } from '~/common/statusbar-height';

import { Header } from '~/components/header';
import { Input } from '~/components/input';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 16, marginTop: STATUSBAR_HEIGHT }}>
        <Header />
        <Input />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#201520',
  },
});
