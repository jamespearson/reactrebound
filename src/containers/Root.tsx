import * as React from 'react';
import { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Routes from '../Routes';
import { History } from 'history';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'


type Props = {
  store: any;
  history: History<any>;
};

export default class Root extends Component<Props> {
  render() {

    const { store, history } = this.props;
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
}
