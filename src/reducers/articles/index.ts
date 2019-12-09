import { ARTICLE_DESTROY, ARTICLE_READ, IArticleAction } from "../../actions/articles"
import { Timestamp } from "@firebase/firestore-types";

export interface IUser {
    displayName: string
    photoURL: string,
    uid: string
}

export interface IArticle {
    id: string
    description: string
    publishedAt: Timestamp
    submittedAt: Timestamp
    title: string,
    url: string
    user: IUser
}

interface IActionHandler {
    [key: string]: (state: IArticleState, action: IArticleAction | any) => IArticleState
}

const ACTION_HANDLERS: IActionHandler = {
    [ARTICLE_DESTROY]: (state: IArticleState, action) => ({ ...state, loading: true }),

    [ARTICLE_READ]: ({ data, ...state }: IArticleState, { article }) => {
        const articles = { ...data }
        articles[article.id] = article

        // const publishedDate = new Date(article.publishedAt.seconds * 1000)

        return {
            ...state,
            data: articles
        }

    }
};

// ------------------------------------
// Reducer
// ------------------------------------

export interface IArticlesData {
    [id: string]: IArticle
}
export interface IArticleState {
    data: IArticlesData
}

export const initialState: IArticleState = {
    data: {}
};

export default (state = initialState, action: any) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
};