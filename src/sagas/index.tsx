import { all, fork } from 'redux-saga/effects';

import articlesSaga from "./articles"
import authenticationSaga from "./authentication"
/**
 * rootSaga
 */
export default function* root() {

    yield all([
        fork(articlesSaga),
        fork(authenticationSaga),
        // fork(calendarsRefresh)
    ]);

}