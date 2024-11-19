import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {Button, ButtonText} from '@gluestack-ui/themed';
import {authScreenProps} from '@/navigations/types';
interface props {
  navigation: authScreenProps;
}
const HelloScreen: FC<props> = ({navigation}) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('ChooseTopic')}
        w={'90%'}
        size="xl">
        <ButtonText>Submit</ButtonText>
      </Button>
    </View>
  );
};

export default HelloScreen;
