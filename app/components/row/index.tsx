import {View} from '@gluestack-ui/themed';
import React, {FC} from 'react';
interface Props {
  children: React.ReactNode;
}
const Row: FC<Props> = ({children, ...props}) => {
  return (
    <View
      flex={1}
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row">
      {children}
    </View>
  );
};

export default Row;
