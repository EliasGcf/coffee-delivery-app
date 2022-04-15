import 'intl';
import 'intl/locale-data/jsonp/en';

import {
  OpenSans_400Regular,
  OpenSans_700Bold,
  OpenSans_600SemiBold,
} from '@expo-google-fonts/open-sans';
import { Rosarivo_400Regular } from '@expo-google-fonts/rosarivo';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Routes } from '~/routes/app.routes';

export function App() {
  const [isFontsLoaded] = useFonts({
    Rosarivo_400Regular,

    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  });

  if (!isFontsLoaded) {
    return <AppLoading />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#201520' }}>
      <NavigationContainer>
        <StatusBar style="light" />
        <Routes />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
