import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './home';
import Target from './target';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Target" component={Target} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}