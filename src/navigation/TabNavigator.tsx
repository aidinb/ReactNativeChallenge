import React from 'react';
import {BottomTabBarProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from '../screens/Main';
import Items from '../screens/Items';
import CustomTabBar from '../components/CustomTabBar.tsx';

export type BottomTabNavigatorParamList = {
    Main: {};
    Users: {};
};

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const TabBar = (props: BottomTabBarProps) => {
    return <CustomTabBar {...props} />;
};

export const TabNavigator: React.FC = () => {
    return (
        <Tab.Navigator tabBar={TabBar}>
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
