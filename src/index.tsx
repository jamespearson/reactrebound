import React from 'react';
import { render } from 'react-dom';

import './index.css';

import { configureStore, history } from './store/configureStore';

import App from './containers/Root';
import * as serviceWorker from './serviceWorker';

const store = configureStore();


render(

    <App store={store} history={history} />,

    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
