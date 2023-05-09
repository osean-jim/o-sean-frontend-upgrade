import axios from 'axios';
import { getCookie, setCookie } from 'cookies-next';

const isDevelopment = process.env.NODE_ENV === 'development';

export const API = axios.create({
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: isDevelopment ? `/proxy-osean/` : 'https://devapi.o-sean.io/',
});

// 요청 인터셉터 설정
API.interceptors.request.use(
  (config) => {
    const accessToken = getCookie('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터 설정
API.interceptors.response.use(
  (reponse) => reponse,
  async (error) => {
    const originalRequest = error.config;
    const refreshToken = getCookie('refreshToken');
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const result = await API.post(`/auth/refreshtoken`, { refreshToken });
        if (result.status === 200) {
          setCookie('accessToken', result.data.data.accessToken, {});
          setCookie('refreshToken', result.data.data.refreshToken, {});
          API.defaults.headers.Authorization = `Bearer ${result.data.data.accessToken}`;
          return API(originalRequest);
        }
      } catch (err) {
        console.log('Failed to refresh token', err);
      }
    }
    return Promise.reject(error);
  }
);

export const API_PALA = axios.create({
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: isDevelopment ? `/proxy-pala/` : process.env.API_PALA_URL,
});
