import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {authStackParamList, rootStackParamList} from '@/navigations/types';
import WelcomeScreen from '@/domain/auth/welcome-screen/welcome-screen';
import OtpScreen from '@/domain/auth/otp-screen/otp-screen';
const Stack = createNativeStackNavigator<authStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Welcome'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Welcome'} component={WelcomeScreen} />
      <Stack.Screen name={'Otp'} component={OtpScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
