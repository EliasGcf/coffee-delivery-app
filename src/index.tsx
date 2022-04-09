import {
  OpenSans_400Regular,
  OpenSans_700Bold,
  OpenSans_600SemiBold,
} from '@expo-google-fonts/open-sans';
import { Rosarivo_400Regular } from '@expo-google-fonts/rosarivo';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import { Home } from '~/pages/home';

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
    <>
      <StatusBar style="light" />
      <Home />
    </>
  );
}
