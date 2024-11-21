import {Button, ButtonText, Image, Text} from '@gluestack-ui/themed';
import {View} from '@gluestack-ui/themed';
import React from 'react';

const HomeBasicCard = () => {
  return (
    <View rounded={12} justifyContent="space-between" h={200} bg="$primary500">
      <View alignItems="flex-end">
        <Image
          minWidth={'50%'}
          borderTopRightRadius={12}
          alt="vector"
          source={require('../../../../../assets/images/apple-vect.png')}
        />
      </View>
      <View px={12}>
        <Text textAlign="right" fontSize={18} color="$light100">
          جلسات پایه
        </Text>
        <Text textAlign="right" color="$light100">
          جلسه
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

export default HomeBasicCard;
