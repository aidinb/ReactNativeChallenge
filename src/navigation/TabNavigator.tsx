import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../screens/Main';
import Items from '../screens/Items';

// Define the type for your BottomTabNavigator
export type BottomTabNavigatorParamList = {
    Main: undefined; // No parameters are expected for MainTab
    Users: undefined; // No parameters are expected for ItemsTab
};

// Create a Tab Navigator with the type defined
const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

export const TabNavigator: React.FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Main" // Ensure the name matches the type key
                component={Main}
            />
            <Tab.Screen
                name="Users" // Ensure the name matches the type key
                component={Items}
            />
        </Tab.Navigator>
    );
};
