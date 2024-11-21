import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from '@gluestack-ui/themed';
import HomeBasicCard from './components/home-basic-card';
import DailyCard from './components/daily-card';
import Container from '@/components/container';
import HomeSecondCard from './components/home-second-card';
import RecommendList from './components/recommend-list';

const ShopsScreen = () => {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View p={16}>
          <View>
            <Text
              textAlign="right"
              fontFamily="$body"
              fontSize={24}
              color="$light700">
              صبحت بخیر مریم
            </Text>
            <Text
              textAlign="right"
              fontFamily="$body"
              fontSize={18}
              color="$light500">
              روز خوبی رو برات آرزو میکنم
            </Text>
          </View>

          <View mt={16} justifyContent="space-between" flexDirection="row">
            <View flex={0.48}>
              <HomeBasicCard />
            </View>
            <View flex={0.48}>
              <HomeSecondCard />
            </View>
          </View>
          <View mt={16}>
            <DailyCard />
          </View>
        </View>
        <View>
          <RecommendList title="جلسات پیشنهادی" />
        </View>
        <View>
          <RecommendList title="جلسات محبوب" />
        </View>
      </ScrollView>
    </Container>
  );
};

export default ShopsScreen;
