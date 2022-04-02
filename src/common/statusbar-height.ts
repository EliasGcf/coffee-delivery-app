import { Platform, StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const STATUSBAR_HEIGHT =
  Platform.OS === 'ios'
    ? getStatusBarHeight() + 20
    : Number(StatusBar.currentHeight) + 16;
