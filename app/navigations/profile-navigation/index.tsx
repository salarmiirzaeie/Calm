import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {profileStackParamList} from '../types';
import ProfileScreen from '@/domain/profile/get-profile/profile-screen';

const Stack = createNativeStackNavigator<profileStackParamList>();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'ProfileSettings'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'ProfileSettings'} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
