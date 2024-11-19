import {Box} from '@gluestack-ui/themed';
import React from 'react';
interface Props {
  children: React.ReactNode;
  focused: boolean;
}
const IconBox: React.FC<Props> = ({focused, children}) => {
  return (
    <Box rounded={'$2xl'} p={'$3'} bg={focused ? '#8E97FD' : 'transparent'}>
      {children}
    </Box>
  );
};

export default IconBox;
