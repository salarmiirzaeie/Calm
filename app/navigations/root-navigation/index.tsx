import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {rootStackParamList} from '../types';
import AuthStack from '../auth-navigation';
import TabNavigation from '../tab-navigation';
import {useAuthRepository} from '@/domain/auth/useAuthRepository';
const Stack = createNativeStackNavigator<rootStackParamList>();

const RootNavigation = () => {
  const {authorized} = useAuthRepository();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!authorized ? (
          <Stack.Screen name={'AuthStack'} component={AuthStack} />
        ) : (
          <Stack.Screen name={'Dashboard'} component={TabNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
