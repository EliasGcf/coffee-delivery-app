/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';

import { Api } from '~/services/api.types';

type TabParamList = {
  Home: undefined;
  Cart: undefined;
  Favorites: undefined;
  Notifications: undefined;
};

type RootStackParamList = {
  TabRoutes: NavigatorScreenParams<TabParamList>;
  Description: { coffee: Api.Coffee };
};

export type DescriptionScreenRouteProp = RouteProp<RootStackParamList, 'Description'>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
