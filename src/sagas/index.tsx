import { all } from 'redux-saga/effects';

/**
 * rootSaga
 */
export default function* root() {

    yield all([
        // fork(calDav),
        // fork(authRefresh),
        // fork(calendarsRefresh)
    ]);

}