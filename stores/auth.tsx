import { create } from 'zustand';

type User = {
  accessToken: string;
  refreshToken: string;
  roles: string[];
  tokenType: string;
  userId: string;
  nickname: string;
  profile: string;
  userNo: number;
  wallets: any[];
  changePassword: 'Y' | 'N';
};

type AuthStore = {
  user: User | null;
  setUser: (userInfo: User) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (userInfo: User) => set(() => ({ user: userInfo })),
}));
