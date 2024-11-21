import React, {FC} from 'react';
import {authScreenProps} from '@/navigations/types';
import {
  Button,
  ButtonText,
  KeyboardAvoidingView,
  Text,
  View,
} from '@gluestack-ui/themed';
import Container from '@/components/container';
import OtpInput from '@/components/inputs/otp-input';

interface props {
  navigation: authScreenProps;
}
const VerifyOtp: FC<props> = ({navigation}) => {
  return (
    <Container>
      <KeyboardAvoidingView
        keyboardVerticalOffset={80}
        behavior={'height'}
        flex={1}>
        <View justifyContent="space-between" flex={1} px={12} py={22}>
          <View alignItems="center">
            <Text mb={12} textAlign="center">
              کد تایید
            </Text>
            <Text mb={8} textAlign="center">
              کد تایید برای شما پیامک شد، لطفا اینجا واردش کن
            </Text>
            <Text mb={22} textAlign="center">
              ویرایش 09381811680
            </Text>
            <OtpInput
              onOtpFinish={() => {}}
              onOtpStart={() => {}}
              error={false}
            />
            <Text my={8} textAlign="center">
              پیامکی دریافت نکردید؟
            </Text>
            <Text mb={8} textAlign="center">
              دریافت کد جدید
            </Text>
          </View>
          <Button
            mt={12}
            onPress={() => navigation.navigate('Hello')}
            size="xl">
            <ButtonText>ورود به جان آسا</ButtonText>
          </Button>
        </View>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default VerifyOtp;
