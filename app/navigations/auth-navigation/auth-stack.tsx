import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {authStackParamList, rootStackParamList} from '@/navigations/types';
import WelcomeScreen from '@/domain/welcome/welcome-screen';
const Stack = createNativeStackNavigator<authStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Welcome'} component={WelcomeScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
