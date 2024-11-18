import {useAppSelector} from '@/hooks/useAppSelector';
import {setToken} from '@/store/auth/actions';
import {useDispatch} from 'react-redux';

export const useAuthRepository = () => {
  const dispatch = useDispatch();
  const user = useAppSelector(state => state.auth.authorized);

  const setUser = (token: string) => {
    dispatch(setToken(token));
  };

  return {user, setUser};
};
