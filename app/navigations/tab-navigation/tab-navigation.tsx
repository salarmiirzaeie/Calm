import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {homeTabStackParamList} from '../types';
import WelcomeScreen from '@/domain/welcome/welcome-screen';
const Tab = createBottomTabNavigator<homeTabStackParamList>();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'Welcome'} component={WelcomeScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
