import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from '../reducers';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';


export const sagaMiddleware = createSagaMiddleware();

console.log('node :', 'production');

const persistConfig = {
  key: 'root',
  storage,
}


const history = createBrowserHistory();
const rootReducer = createRootReducer(history);
const persistedReducer = persistReducer(persistConfig, rootReducer)

const router = routerMiddleware(history);
const enhancer = applyMiddleware(thunk, sagaMiddleware, router);

function configureStore(initialState?: any) {
  return createStore(persistedReducer, initialState, enhancer);
}

//sagaMiddleware.run(rootSaga);

export default { configureStore, history };
