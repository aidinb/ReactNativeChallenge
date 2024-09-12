import React from 'react';
import MainStore from './mainStore.ts';

class RootStore {
  mainStore: MainStore;

  constructor() {
    this.mainStore = new MainStore();
  }
}

const storesContext = React.createContext<RootStore>(new RootStore());

// This will be the function available for the app to connect to the stores
export const useStores = (): RootStore => React.useContext(storesContext);
