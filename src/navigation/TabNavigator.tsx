import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../screens/Main.tsx';
import Items from '../screens/Items.tsx';

export type BottomTabNavigatorParamList = {
  MainTab: any;
    ItemsTab: any;
};

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

export const TabNavigator = () => {
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
