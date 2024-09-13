import React from 'react';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './NavigationService';
import {SCREENS} from './screens.tsx';
import {TabNavigator} from './TabNavigator.tsx';

const Stack = createStackNavigator<ParamListBase>();
export function Routes() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Main" component={TabNavigator}
                        options={{headerShown: false}} />

        {Object.entries(SCREENS).length > 0 && Object.entries(SCREENS).map(([name, screen]) => (
          <Stack.Screen
            key={name}
            name={name}
            component={screen.component}
            options={screen.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
