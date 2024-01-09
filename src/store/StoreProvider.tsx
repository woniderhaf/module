import React, { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

interface StoreProviderProps extends PropsWithChildren {
}

export const StoreProvider: FC<StoreProviderProps> = props => {
  const { children } = props;

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
