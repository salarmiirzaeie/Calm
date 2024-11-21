import {Image, SafeAreaView} from '@gluestack-ui/themed';
import {View} from '@gluestack-ui/themed';
import React from 'react';

interface Props {
  children: React.ReactNode;
  title?: string;
  description?: string;
}
const Container: React.FC<Props> = ({children}) => {
  return (
    <SafeAreaView flex={1} bg="$white">
      <View flex={1}>
        <Image
          alt="vector"
          source={require('../../assets/images/Ellipse-46.png')}
          position="absolute"
          h={209}
          w={209}
        />
        <Image
          size="xl"
          alt="vector"
          source={require('../../assets/images/Vector.png')}
          position="absolute"
          h={481}
          w={272}
          right={0}
        />
        <Image
          size="xl"
          alt="vector"
          source={require('../../assets/images/Vector-66.png')}
          position="absolute"
          h={481}
          w={305}
          left={-100}
          bottom={-100}
        />

        {children}
      </View>
    </SafeAreaView>
  );
};

export default Container;
