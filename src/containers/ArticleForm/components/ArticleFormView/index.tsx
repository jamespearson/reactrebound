import React from "react"
import firebase from "firebase"

import { ICurrentUserState, IUser } from "../../../../reducers/currentUser"
import { useInput } from "../../../../hooks/useInput"
import { IArticle } from "../../../../actions/articles";



interface IArticleFormViewProps {
    articleCreate: (article: IArticle) => void,
    currentUser?: ICurrentUserState,
    isLoggedIn: boolean,
}

export default (props: IArticleFormViewProps) => {

    const { isLoggedIn } = props
    const { value: title, bind: bindTitle, reset: resetTitle } = useInput('');
    const { value: url, bind: bindUrl, reset: resetUrl } = useInput('');
    const { value: description, bind: bindDescription, reset: resetDescription } = useInput('');

    const handleSubmission = () => {
        const { articleCreate, currentUser } = props
        articleCreate({
            description,
            title,
            url,
            user: { ...currentUser } as IUser
        })
    }

    const handleSignIn = () => {
        var provider = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithPopup(provider);
    }

    return (
        <div>
            <input type="text" {...bindTitle} />

            <input type="text" {...bindUrl} />

            <textarea {...bindDescription} />

            {isLoggedIn ?
                (<button onClick={handleSubmission}>Submit</button>) :
                (<button onClick={handleSignIn}>Sign In</button>)}
        </div>
    )
}