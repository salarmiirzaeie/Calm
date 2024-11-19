import {Image, Input, InputField, Text, View} from '@gluestack-ui/themed';
import React from 'react';
import OtpContainer from './components/otp-container';

const OtpScreen = () => {
  return (
    <OtpContainer>
      <View flex={1}>
        <Text>Enter your phone number</Text>
      </View>
      <Input>
        <InputField />
      </Input>
    </OtpContainer>
  );
};

export default OtpScreen;
