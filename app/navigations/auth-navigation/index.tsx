import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {authStackParamList, rootStackParamList} from '@/navigations/types';
import WelcomeScreen from '@/domain/auth/welcome/welcome-screen';
import OtpScreen from '@/domain/auth/otp/otp-screen';
import ChooseTopicScreen from '@/domain/auth/choose-topic/topic-screen';
import VerifyOtp from '@/domain/auth/otp/verify-otp';
import HelloScreen from '@/domain/auth/welcome/hello-screen';

const Stack = createNativeStackNavigator<authStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Welcome'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Welcome'} component={WelcomeScreen} />
      <Stack.Screen name={'Otp'} component={OtpScreen} />
      <Stack.Screen name={'Hello'} component={HelloScreen} />
      <Stack.Screen name={'VerifyOtp'} component={VerifyOtp} />
      <Stack.Screen name={'ChooseTopic'} component={ChooseTopicScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
