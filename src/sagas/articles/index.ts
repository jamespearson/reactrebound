import { call, put, take } from 'redux-saga/effects';

import { noop } from '@babel/types';

import { loadDB } from "../../lib/db"

import { eventChannel } from 'redux-saga';

import { createArticle, readArticle, destroyArticle, IArticle } from '../../actions/articles';


export const articleCreate = (article: IArticle) => async (dispatch: any) => {
    const db: any = await loadDB()
    console.log('articleCreate')
    const editedArticle = { ...article, submittedAt: db.firestore.Timestamp.now() }

    try {
        await db.firestore()
            .collection("articles")
            .doc()
            .set(editedArticle)

        dispatch(createArticle(editedArticle))

    } catch (error) {

    }

}

export const articlesChannel = async () => {
    const db: any = await loadDB()

    const ref = db.firestore().collection('articles')
        .orderBy('publishedAt', 'desc')
        .limit(50)

    return eventChannel((emit) => {
        ref.onSnapshot((snapshot: any) => {
            snapshot.docChanges().forEach((change: any) => {
                const data = {
                    ...change.doc.data(),
                    id: change.doc.id
                }
                if (change.type === 'removed') {
                    emit(destroyArticle(change.doc))
                } else {
                    emit(readArticle(data))
                }
            })

        })
        return noop
    })
}

export default function* rootSaga() {

    const channel = yield call(articlesChannel);

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