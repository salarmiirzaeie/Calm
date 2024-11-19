import {Image, View} from '@gluestack-ui/themed';
import React, {FC} from 'react';
interface props {
  children: React.ReactNode;
}
const OtpContainer: FC<props> = ({children}) => {
  return (
    <View p={10} bg="$white" flex={1}>
      <Image
        position="absolute"
        left={0}
        right={0}
        alt="backFrame"
        w={'$full'}
        h={503}
        source={require('@/assets/images/backShape.png')}
      />
      {children}
    </View>
  );
};

export default OtpContainer;
