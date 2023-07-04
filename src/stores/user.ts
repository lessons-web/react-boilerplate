import { proxy } from 'valtio';
import { User } from '@/utils/types';

type UserStore = {
  user: User | Record<string, unknown>;
  token: string | null;
  login: (user: User) => void;
  updateToken: (token: string) => void;
};

const state = proxy<UserStore>({
  user: {},
  token: null,
  login: (user: User) => {
    state.user = {
      ...state.user,
      ...user,
    };
  },
  updateToken: (token: string) => {
    state.token = token;
  }
});

export default state;