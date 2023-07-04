import { proxy } from 'valtio';

interface AppStore {
  title: string;
}

const state = proxy<AppStore>({
  title: 'RBT',
});

export default state;