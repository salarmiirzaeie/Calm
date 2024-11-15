import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {rootStackParamList} from '../types';
import AuthStack from '../auth-navigation/auth-stack';
const Stack = createNativeStackNavigator<rootStackParamList>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'AuthStack'} component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
