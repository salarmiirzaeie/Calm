import {Box, Pressable} from '@gluestack-ui/themed';
import React from 'react';
import PlayIcon from '../icons/play-icon';
interface Props {
  onPress: () => void;
  color?: string;
  iconColor?: string;
}
const PlayButton: React.FC<Props> = ({onPress, color, iconColor}) => {
  return (
    <Pressable onPress={onPress} bg={color || 'white'} p={12} rounded={'$full'}>
      <PlayIcon color={iconColor || '#262626'} />
    </Pressable>
  );
};

export default PlayButton;
