import React from 'react';

import {
  Divider,
  DownloadIcon,
  EditIcon,
  Image,
  Pressable,
  ScrollView,
  SearchIcon,
  SettingsIcon,
  Text,
  View,
} from '@gluestack-ui/themed';
import LogoutIcon from '@/components/icons/logout-icon';
import {useGetProfile} from './useGetProfile';
import useToast from '@/hooks/useToast';

const ProfileScreen = () => {
  const {logout} = useGetProfile();
  const toast = useToast();
  return (
    <View bg="$white" flex={1}>
      <Image
        position="absolute"
        left={0}
        right={0}
        alt="backFrame"
        w={'$full'}
        top={-450}
        h={'$full'}
        source={require('@/assets/images/Vector1.png')}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View flex={1} px={12} mt={300}>
          <View>
            <Text
              color="$light300"
              fontFamily="BYekan"
              fontSize={24}
              textAlign="right">
              پروفایل
            </Text>
            <View
              px={2}
              alignItems="center"
              flexDirection="row"
              justifyContent="space-between">
              <EditIcon size="xl" color="$primary500" />
              <Text
                color="$light400"
                fontFamily="BYekan"
                fontSize={20}
                textAlign="right">
                مریم
              </Text>
            </View>
          </View>

          <Divider bg="$light200" my={15} />
          <View>
            <Text
              color="$light300"
              fontFamily="BYekan"
              fontSize={24}
              textAlign="right">
              جستجو
            </Text>
            <View
              px={2}
              alignItems="center"
              flexDirection="row"
              justifyContent="space-between">
              <SearchIcon size="xl" color="$primary500" />
              <Text
                color="$light400"
                fontFamily="BYekan"
                fontSize={20}
                textAlign="right">
                جستجو ی جلسه
              </Text>
            </View>
          </View>

          <Divider bg="$light200" my={15} />
          <View>
            <Text
              color="$light300"
              fontFamily="BYekan"
              fontSize={24}
              textAlign="right">
              تنظیمات
            </Text>
            <View
              px={2}
              alignItems="center"
              flexDirection="row"
              justifyContent="space-between">
              <SettingsIcon size="xl" color="$primary500" />
              <Text
                color="$light400"
                fontFamily="BYekan"
                fontSize={20}
                textAlign="right">
                تنظیمات یادآور
              </Text>
            </View>
          </View>

          <Divider bg="$light200" my={15} />
          <View>
            <Text
              color="$light300"
              fontFamily="BYekan"
              fontSize={24}
              textAlign="right">
              دانلودها
            </Text>
            <View
              px={2}
              alignItems="center"
              flexDirection="row"
              justifyContent="space-between">
              <DownloadIcon size="xl" color="$primary500" />
              <Text
                color="$light400"
                fontFamily="BYekan"
                fontSize={20}
                textAlign="right">
                جلسات دانلود شده
              </Text>
            </View>
          </View>

          <Divider bg="$light200" my={15} />
          <Pressable onPress={logout}>
            <View
              px={2}
              alignItems="center"
              flexDirection="row"
              justifyContent="space-between">
              <LogoutIcon color="#8E97FD" />
              <Text
                color="$light300"
                fontFamily="BYekan"
                fontSize={24}
                textAlign="right">
                خروج
              </Text>
            </View>
          </Pressable>

          <Divider bg="$light200" my={15} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
