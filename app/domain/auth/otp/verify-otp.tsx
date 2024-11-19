import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {authScreenProps} from '@/navigations/types';
import {Button, ButtonText} from '@gluestack-ui/themed';

interface props {
  navigation: authScreenProps;
}
const VerifyOtp: FC<props> = ({navigation}) => {
  return (
    <View>
      <Button onPress={() => navigation.navigate('Hello')} w={'90%'} size="xl">
        <ButtonText>Submit</ButtonText>
      </Button>
    </View>
  );
};

export default VerifyOtp;
