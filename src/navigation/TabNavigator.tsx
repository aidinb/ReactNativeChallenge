import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../screens/Main';
import Items from '../screens/Items';
import CustomTabBar from '../components/CustomTabBar.tsx';

export type BottomTabNavigatorParamList = {
    Main: {};
    Users: {};
};

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

export const TabNavigator: React.FC = () => {
    return (
        <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
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
