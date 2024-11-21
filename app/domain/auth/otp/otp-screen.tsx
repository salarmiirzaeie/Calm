import {
  Button,
  ButtonText,
  Image,
  Input,
  InputField,
  KeyboardAvoidingView,
  Text,
  View,
} from '@gluestack-ui/themed';
import React, {FC} from 'react';
import {authScreenProps} from '@/navigations/types';
import Container from '@/components/container';
import {Platform} from 'react-native';
interface props {
  navigation: authScreenProps;
}
const OtpScreen: FC<props> = ({navigation}) => {
  return (
    <Container>
      <KeyboardAvoidingView
        keyboardVerticalOffset={80}
        behavior={'height'}
        flex={1}>
        <View justifyContent="space-between" flex={1} px={12} py={22}>
          <View>
            <Text textAlign="center" size="3xl">
              خوش اومدی!
            </Text>
            <Text textAlign="center" size="xl">
              برای ورود یا ثبت نام شماره موبایلت رو وارد کن
            </Text>
            <Input h={48} mt={12} bg="$white" borderRadius={10}>
              <InputField
                autoFocus
                textAlign="center"
                bg="$white"
                placeholder="شماره موبایل"
              />
            </Input>

            <Text mt={12} color="$light600" textAlign="center" size="lg">
              با ورود به جان آسا{'\n'} شرایط و قوانین رو پذیرفته اید
            </Text>
          </View>
          <Button
            mt={12}
            onPress={() => navigation.navigate('VerifyOtp')}
            size="xl">
            <ButtonText>تایید</ButtonText>
          </Button>
        </View>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default OtpScreen;
