import { getCookie } from 'cookies-next';

import { reissueAccessToken } from '../apis/auth';
import { getUserByToken } from '../apis/user';
import { useAuthStore } from '../stores/auth';

export const useRefresh = () => {
  const { setUser } = useAuthStore();
  const accessToken = getCookie('accessToken');
  const refreshToken = getCookie('refreshToken');

  const updateUser = async () => {
    if (accessToken && refreshToken) {
      await getUserByToken()
        .then(({ data }) => {
          const userInfo = data.data;
          setUser(userInfo);
        })
        .catch((err) => {
          console.error(err);
          if (err.code === 'REFRESH_TOKEN_EXPIRED') reissueAccessToken({ refreshToken });
          else setUser(null);
        });
    }
  };

  return { updateUser };
};
