import {
  Button,
  ButtonText,
  Image,
  Input,
  InputField,
  Text,
  View,
} from '@gluestack-ui/themed';
import React, {FC} from 'react';
import OtpContainer from './components/otp-container';
import {authScreenProps} from '@/navigations/types';
interface props {
  navigation: authScreenProps;
}
const OtpScreen: FC<props> = ({navigation}) => {
  return (
    <OtpContainer>
      <View flex={1}>
        <Text>Enter your phone number</Text>
      </View>
      <Button
        onPress={() => navigation.navigate('VerifyOtp')}
        w={'90%'}
        size="xl">
        <ButtonText>Submit</ButtonText>
      </Button>
    </OtpContainer>
  );
};

export default OtpScreen;
