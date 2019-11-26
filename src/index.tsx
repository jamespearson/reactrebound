import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './index.css';

import { configureStore, history } from './store/configureStore';

import App from './containers/Root';
import * as serviceWorker from './serviceWorker';

const store = configureStore();


render(
    <AppContainer>
        <App store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
);


if ((module as any).hot) {
    (module as any).hot.accept('./containers/Root', () => {
        // eslint-disable-next-line global-require
        const NextRoot = require('./containers/Root').default;
        render(
            <AppContainer>
                <NextRoot store={store} history={history} />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
