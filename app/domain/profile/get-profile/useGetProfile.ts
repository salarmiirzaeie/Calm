import {useLogoutRepository} from '@/domain/auth/logout/useLogoutRepository';
import useToast from '@/hooks/useToast';

export const useGetProfile = () => {
  const {logout} = useLogoutRepository({onSuccess: onSuccessLogout});
  const toast = useToast();
  function onSuccessLogout() {
    toast.show({
      type: 'success',
      msg: 'Logout successfully',
    });
  }
  return {logout};
};
