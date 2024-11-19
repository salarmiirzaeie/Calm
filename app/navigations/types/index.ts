import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

export type rootStackParamList = {
  AuthStack: undefined;

  Dashboard: undefined;
};
export type authStackParamList = {
  Welcome: undefined;
  Otp: undefined;
  Hello: undefined;
  VerifyOtp: undefined;
  ChooseTopic: undefined;
};
export type tabsParamList = {
  Home: undefined;
  Profile: undefined;
  Music: undefined;
  Sleep: undefined;
};

export type authScreenProps = StackNavigationProp<authStackParamList>;
