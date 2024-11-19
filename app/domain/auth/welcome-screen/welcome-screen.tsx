import {authScreenProps} from '@/navigations/types';
import {
  Button,
  ButtonText,
  Image,
  Link,
  LinkText,
  SafeAreaView,
  Text,
  View,
} from '@gluestack-ui/themed';
import React, {FC} from 'react';

interface props {
  navigation: authScreenProps;
}
const WelcomeScreen: FC<props> = ({navigation}) => {
  return (
    <View bg="$white" flex={1}>
      <Image
        alt="frame"
        w={'$full'}
        h={503}
        source={require('@/assets/images/Vector1.png')}
      />
      <Image
        alt="frame"
        w={'$full'}
        mt={-50}
        h={70}
        source={require('@/assets/images/Vector2.png')}
      />

      <Image
        w={330}
        h={242}
        alignSelf="center"
        top={100}
        position="absolute"
        alt="frame"
        source={require('@/assets/images/welcome.png')}
      />
      <View
        py={'$10'}
        justifyContent="space-between"
        alignItems="center"
        flex={1}>
        <View>
          <Text bold size="3xl" textAlign="center">
            We are what we do
          </Text>
          <Text mt={'$2'} textAlign="center">
            Thousand of people are using silent moon {'\n'} for smalls
            meditation
          </Text>
        </View>

        <Button onPress={() => navigation.navigate('Otp')} w={'90%'} size="xl">
          <ButtonText>Get Started</ButtonText>
        </Button>
      </View>
    </View>
  );
};

export default WelcomeScreen;
