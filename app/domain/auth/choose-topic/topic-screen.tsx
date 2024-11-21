import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {Button, ButtonText} from '@gluestack-ui/themed';
import {authScreenProps} from '@/navigations/types';
import {useAuthRepository} from '../useAuthRepository';
interface props {
  navigation: authScreenProps;
}
const ChooseTopicScreen: FC<props> = ({navigation}) => {
  const {setUser} = useAuthRepository();
  return (
    <View>
      <Text>ChooseTopicScreen</Text>
      <Button mt={50} onPress={() => setUser('123')} w={'90%'} size="xl">
        <ButtonText>Submit</ButtonText>
      </Button>
    </View>
  );
};

export default ChooseTopicScreen;
