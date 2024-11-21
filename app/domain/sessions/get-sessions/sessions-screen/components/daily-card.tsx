import PlayButton from '@/components/buttons/play-button';
import PlayIcon from '@/components/icons/play-icon';
import Row from '@/components/row';
import {Box, Image, Text, View} from '@gluestack-ui/themed';
import React from 'react';

const DailyCard = () => {
  return (
    <View h={95} w={'$full'} bg="$trueGray800" rounded={12}>
      <Image
        alt="vector"
        borderTopLeftRadius={12}
        borderBottomLeftRadius={12}
        h={'$full'}
        position="absolute"
        source={require('../../../../../assets/images/Vector-el.png')}
      />
      <Image
        alt="vector"
        borderTopRightRadius={12}
        borderBottomRightRadius={12}
        right={0}
        w={'60%'}
        position="absolute"
        source={require('../../../../../assets/images/Vector-li.png')}
      />
      <View flex={1} px={18}>
        <Row>
          <PlayButton onPress={() => {}} />
          <Text color="$light100" fontSize={18}>
            جلسات روزانه
          </Text>
        </Row>
      </View>
    </View>
  );
};

export default DailyCard;
