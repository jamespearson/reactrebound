import { string } from "prop-types"
import { IUser } from "../../reducers/articles"

export const CURRENT_USER_UPDATE = "currentUser::update"


export interface ICurrentUserAction {
    type: string
    user: IUser
}

export const updateCurrentUser = (user: IUser) => ({
    type: CURRENT_USER_UPDATE,
    user,
})