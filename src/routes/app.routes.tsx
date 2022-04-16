/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-namespace */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BellSvg from '~/assets/svg/bell.svg';
import HeartSvg from '~/assets/svg/heart.svg';
import HomeSvg from '~/assets/svg/home.svg';

import { Cart } from '~/pages/cart';
import { Description } from '~/pages/description';
import { Favorites } from '~/pages/favorites';
import { Home } from '~/pages/home';
import { Notifications } from '~/pages/notifications';

import { CartIcon } from '~/routes/icons/cart-icon';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={{ backgroundColor: '#201520' }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#22151F',

          borderTopWidth: 0,
          elevation: 8,
          shadowColor: '#fff',
          shadowOpacity: 0.2,
          shadowRadius: 2,

          shadowOffset: { height: 1, width: 1 },
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#EFE3C8',
        tabBarInactiveTintColor: '#746763',

        headerStyle: {
          backgroundColor: '#201520',
          shadowColor: 'transparent',
        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 24,
          fontFamily: 'Rosarivo_400Regular',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <HomeSvg fill={color} />,
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: CartIcon,
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color }) => <HeartSvg fill={color} />,
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ color }) => <BellSvg fill={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export function Routes() {
  return (
    <Stack.Navigator initialRouteName="TabRoutes" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TabRoutes" component={TabRoutes} />
      <Stack.Screen name="Description" component={Description} />
    </Stack.Navigator>
  );
}
