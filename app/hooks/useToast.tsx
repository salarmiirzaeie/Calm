import {View, Text} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
  CloseIcon,
  HStack,
  Pressable,
  Toast,
  ToastDescription,
  ToastTitle,
  VStack,
  useToast as useToastNative,
} from '@gluestack-ui/themed';

const useToast = () => {
  const toast = useToastNative();
  const show = ({
    type,
    msg,
  }: {
    type: 'error' | 'warning' | 'success' | 'info' | 'attention';
    msg: string;
  }) => {
    toast.show({
      placement: 'bottom',

      render: () => {
        return (
          <Toast
            action={type}
            rounded={'$lg'}
            borderWidth={'$1'}
            my={'$10'}
            mx={'$4'}
            variant="solid">
            <HStack justifyContent="space-between" space="xs" w={'100%'}>
              <ToastDescription>{msg}</ToastDescription>
              <Pressable onPress={() => toast.closeAll()}>
                <CloseIcon />
              </Pressable>
            </HStack>
          </Toast>
        );
      },
    });
  };
  return {
    show,
  };
};

export default useToast;
