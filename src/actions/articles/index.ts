import { loadDB } from "../../lib/db"
import { Timestamp } from "@firebase/firestore-types"
import { IUser } from "../../reducers/articles"

export const ARTICLE_CREATE = "articles::create"
export const ARTICLE_READ = "articles::read"
export const ARTICLE_DESTROY = "articles::destroy"

export interface IArticle {
    description: string,
    id?: string
    publishedAt?: Timestamp,
    submittedAt?: Timestamp,
    title: string,
    url: string
    user?: IUser
}

export interface IArticleAction {
    type: string,
    article: any
}

export const createArticle = (article: IArticle) => ({
    type: ARTICLE_CREATE,
    article,
})

export const readArticle = (article: IArticle) => ({
    type: ARTICLE_READ,
    article,
})

export const destroyArticle = (id: string) => ({
    type: ARTICLE_DESTROY,
    id: id
})
