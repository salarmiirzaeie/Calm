import {Image, Text, View} from '@gluestack-ui/themed';
import React, {FC} from 'react';
import {Session} from './recommend-list';
import Row from '@/components/row';

const RecommendCard: FC<Session> = ({image, title, id, duration, type}) => {
  return (
    <View mx={8} h={170} w={160} rounded={12}>
      <Image rounded={12} h={'65%'} w={'$full'} alt="vector" source={image} />

      <View flex={1} my={2}>
        <Text textAlign="right">{title}</Text>
        <Row>
          <Text color="$light400">{type}</Text>

          <Text color="$light400">{duration}</Text>
        </Row>
      </View>
    </View>
  );
};

export default RecommendCard;
