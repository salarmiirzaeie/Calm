import {Text, View} from '@gluestack-ui/themed';
import React, {FC, useCallback} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import RecommendCard from './recommend-card';

interface Props {
  title: string;
}
export interface Session {
  title: string;
  id: number;
  duration: string;
  type: string;
  image: any;
}
const RecommendList: FC<Props> = ({title}) => {
  const sessions: Session[] = [
    {
      title: 'جلسه 1',
      id: 1,
      duration: '3-10 دقیقه',
      type: 'مدیتیشن',
      image: require('@/assets/images/elen-group.png'),
    },
    {
      title: 'جلسه 1',
      id: 2,
      duration: '3-10 دقیقه',
      type: 'مدیتیشن',
      image: require('@/assets/images/elen-group.png'),
    },
    {
      title: 'جلسه 1',
      id: 3,
      duration: '3-10 دقیقه',
      type: 'مدیتیشن',
      image: require('@/assets/images/elen-group.png'),
    },
  ];
  const renderItem: ListRenderItem<Session> = useCallback(({item}) => {
    return <RecommendCard {...item} />;
  }, []);
  return (
    <View>
      <Text textAlign="right" mx={16} mb={16} fontSize={22}>
        {title}
      </Text>
      <FlatList
        inverted={true}
        contentContainerStyle={{paddingHorizontal: 6}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={sessions}
        renderItem={renderItem}
      />
    </View>
  );
};

export default RecommendList;
