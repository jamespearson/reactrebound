import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { History } from 'history';

import articlesReducer, { IArticleState } from "./articles"
import currentUserReducer, { ICurrentUserState } from './currentUser';

export interface IState {
  articles: IArticleState
  currentUser: ICurrentUserState
}

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    articles: articlesReducer,
    currentUser: currentUserReducer
  });
}
