import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Routes from '../routes';
import { History } from 'history';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

type Props = {
  store: any;
  history: History<any>;
};

export default (props: Props) => {

  const { store, history } = props;
  let persistor = persistStore(store)

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>

          <Routes />

        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );

}
