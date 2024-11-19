import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

export type rootStackParamList = {
  AuthStack: undefined;

  Dashboard: undefined;
};
export type authStackParamList = {
  Welcome: undefined;
  Otp: undefined;
};
export type homeTabStackParamList = {
  Welcome: undefined;
};
export type authScreenProps = StackNavigationProp<authStackParamList>;
