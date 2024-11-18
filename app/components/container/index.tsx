import {View} from '@gluestack-ui/themed';
import React from 'react';

interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
}
const index: React.FC<Props> = ({children}) => {
  return (
    <View flex={1} px={'$2'}>
      {children}
    </View>
  );
};

export default index;
