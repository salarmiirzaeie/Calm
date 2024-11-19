import {createStyle} from '@gluestack-style/react';

export const LinkText = createStyle({
  textDecorationLine: 'underline',
  color: '$primary500',
  _dark: {
    color: '$info300',
  },
});
