import {Button, ButtonText, Image, Text} from '@gluestack-ui/themed';
import {View} from '@gluestack-ui/themed';
import React from 'react';

const HomeSecondCard = () => {
  return (
    <View
      rounded={12}
      justifyContent="space-between"
      h={200}
      bg="$secondary500">
      <View alignItems="flex-end">
        <Image
          minWidth={'50%'}
          borderTopRightRadius={12}
          alt="vector"
          source={require('../../../../../assets/images/calm-vect.png')}
        />
      </View>
      <View px={12}>
        <Text textAlign="right" fontSize={18} color="$gray800">
          ریلکس کن
        </Text>
        <Text textAlign="right" color="$gray800">
          موزیک
        </Text>
      </View>
      <View
        alignItems="center"
        p={12}
        flexDirection="row"
        justifyContent="space-between">
        <Button size="sm" bg="$light100" variant="solid" onPress={() => {}}>
          <ButtonText color="$gray800">شروع</ButtonText>
        </Button>
        <Text color="$light100">3-10 دقیقه</Text>
      </View>
    </View>
  );
};

export default HomeSecondCard;
