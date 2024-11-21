import {useAuthRepository} from '../useAuthRepository';

interface Props {
  onSuccess: () => void;
}
export const useLogoutRepository = ({onSuccess}: Props) => {
  const {setUser} = useAuthRepository();

  const logout = () => {
    setUser(null).then(onSuccess);
  };

  return {logout};
};
