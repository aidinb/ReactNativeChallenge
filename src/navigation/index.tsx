import React from 'react';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './NavigationService';
import { SCREENS } from './screens';
import { TabNavigator } from './TabNavigator';

const Stack = createStackNavigator<ParamListBase>();

export function Routes() {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName="Root">
                <Stack.Screen
                    name="Root"
                    component={TabNavigator}
                    options={{ headerShown: false }}
                />
                {Object.entries(SCREENS).map(([name, { component, options }]) => (
                    <Stack.Screen
                        key={name}
                        name={name}
                        component={component}
                        options={options}
                    />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
