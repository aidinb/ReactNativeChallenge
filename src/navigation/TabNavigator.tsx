import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../screens/Main';
import Items from '../screens/Items';

export type BottomTabNavigatorParamList = {
    Main: undefined; // No parameters are expected for MainTab
    Users: undefined; // No parameters are expected for ItemsTab
};

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

export const TabNavigator: React.FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Main"
                component={Main}
            />
            <Tab.Screen
                name="Users"
                component={Items}
            />
        </Tab.Navigator>
    );
};
