import {View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WelcomeScreen from '@/domain/auth/welcome/welcome-screen';
import {tabsParamList} from '../types';
import ShopsScreen from '@/domain/sessions/get-sessions/sessions-screen/sessions-screen';
import HomeIcon from '@/components/icons/home-icon';
import {useTheme} from '@gluestack-style/react';
import {Box, Text} from '@gluestack-ui/themed';
import IconBox from './components/icon-box';
import MoonIcon from '@/components/icons/moon-icon';
import MusicIcon from '@/components/icons/music-icon';
import UserIcon from '@/components/icons/user-icon';
import ProfileStack from '../profile-navigation';
const Tab = createBottomTabNavigator<tabsParamList>();

const TabNavigation = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#8E97FD',
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 80,
          justifyContent: 'center',
        },
        tabBarInactiveTintColor: '#A0A3B1',
        tabBarIconStyle: {
          marginTop: 18,
        },
        tabBarShowLabel: false,
      }}
      initialRouteName="Home">
      <Tab.Screen
        name={'Profile'}
        options={{
          tabBarIcon: ({focused}) => (
            <IconBox focused={focused}>
              <UserIcon color={focused ? '#FFF' : '#A0A3B1'} />
            </IconBox>
          ),
          tabBarLabel: ({focused, color}) => {
            return (
              <Text mt={10} color="#A0A3B1" fontFamily="dastnevis">
                پروفایل
              </Text>
            );
          },
        }}
        component={ProfileStack}
      />
      <Tab.Screen
        name={'Music'}
        options={{
          tabBarIcon: ({focused}) => (
            <IconBox focused={focused}>
              <MusicIcon color={focused ? '#FFF' : '#A0A3B1'} />
            </IconBox>
          ),
          tabBarLabel: ({focused, color}) => {
            return (
              <Text mt={10} color="#A0A3B1" fontFamily="dastnevis">
                موزیک
              </Text>
            );
          },
        }}
        component={WelcomeScreen}
      />

      <Tab.Screen
        name={'Sleep'}
        options={{
          tabBarIcon: ({focused}) => (
            <IconBox focused={focused}>
              <MoonIcon color={focused ? '#FFF' : '#A0A3B1'} />
            </IconBox>
          ),
          tabBarLabel: ({focused, color}) => {
            return (
              <Text mt={10} color="#A0A3B1" fontFamily="dastnevis">
                خواب
              </Text>
            );
          },
        }}
        component={WelcomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <IconBox focused={focused}>
              <HomeIcon color={focused ? '#FFF' : '#A0A3B1'} />
            </IconBox>
          ),
          tabBarLabel: ({focused, color}) => {
            return (
              <Text mt={10} color="#A0A3B1" fontFamily="dastnevis">
                کردار
              </Text>
            );
          },
        }}
        name={'Home'}
        component={ShopsScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
