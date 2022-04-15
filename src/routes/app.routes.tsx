/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-namespace */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BellSvg from '~/assets/svg/bell.svg';
import HeartSvg from '~/assets/svg/heart.svg';
import HomeSvg from '~/assets/svg/home.svg';

import { Cart } from '~/pages/cart';
import { Description } from '~/pages/description';
import { Home } from '~/pages/home';

import { CartIcon } from '~/routes/icons/cart-icon';

function EmptyPage() {
  return null;
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#22151F', borderTopWidth: 0 },
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#EFE3C8',
        tabBarInactiveTintColor: '#746763',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarIcon: ({ color }) => <HomeSvg fill={color} /> }}
      />

      <Tab.Screen name="Cart" component={Cart} options={{ tabBarIcon: CartIcon }} />

      <Tab.Screen
        name="Favorites"
        component={EmptyPage}
        options={{ tabBarIcon: ({ color }) => <HeartSvg fill={color} /> }}
      />

      <Tab.Screen
        name="Notifications"
        component={EmptyPage}
        options={{ tabBarIcon: ({ color }) => <BellSvg fill={color} /> }}
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
