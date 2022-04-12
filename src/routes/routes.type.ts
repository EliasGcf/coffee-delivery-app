/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
import { RouteProp } from '@react-navigation/native';

import { Api } from '~/services/api.types';

type RootStackParamList = {
  Home: undefined;
  Description: { coffee: Api.Coffee };
};

export type DescriptionScreenRouteProp = RouteProp<RootStackParamList, 'Description'>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
