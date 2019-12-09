import { CURRENT_USER_UPDATE, ICurrentUserAction } from "../../actions/users"

export interface IUser {
    displayName: string
    photoURL: string,
    uid: string
}

interface IActionHandler {
    [key: string]: (state: ICurrentUserState, action: any | any) => ICurrentUserState
}

const ACTION_HANDLERS: IActionHandler = {
    [CURRENT_USER_UPDATE]: (state: ICurrentUserState, { user }: ICurrentUserAction) => ({ ...user })
};

// ------------------------------------
// Reducer
// ------------------------------------

export interface ICurrentUserState {
    uid?: string
    displayName?: string
    photoURL?: string
}

export const initialState: ICurrentUserState = {

};

export default (state = initialState, action: any) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
};