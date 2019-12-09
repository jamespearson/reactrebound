import React from "react"
import SignIn from "../../../../components/SignIn"
import { ICurrentUserState } from "../../../../reducers/currentUser"

interface ISiteHeaderProps {
    currentUser: ICurrentUserState
}

export default (props: ISiteHeaderProps) => {
    const { currentUser: { uid, displayName } } = props
    const isLoggedIn = uid !== null

    return (
        <header>
            ReactRebound

            <nav>
                <ul>
                    <li>Submit</li>
                    <li>Twitter</li>
                    <li>RSS</li>
                    <li>
                        {isLoggedIn ? (<div>Welcome {displayName}</div>) : (<SignIn></SignIn>)}
                    </li>
                </ul>
            </nav>
        </header>
    )
}