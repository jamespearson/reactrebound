import { call, put, takeLatest, all, take } from 'redux-saga/effects';

import { loadDB } from "../../lib/db"

import { eventChannel } from 'redux-saga';

import { updateCurrentUser } from '../../actions/users';
import { noop } from '@babel/types';

export const authenticationChannel = async () => {
    const db: any = await loadDB()

    return eventChannel((emit) => {
        db.auth().onAuthStateChanged(({ uid, displayName, photoURL, ...user }: { uid: string, displayName: string, photoURL: string }) => {

            emit(updateCurrentUser({ uid, displayName, photoURL }))
        })
        return noop
    })
}

export default function* rootSaga() {

    const channel = yield call(authenticationChannel);

    try {
        while (true) {
            // take(END) will cause the saga to terminate by jumping to the finally block
            let action = yield take(channel)
            yield put(action)

        }
    } finally {
        console.log('channel terminated')
    }
}