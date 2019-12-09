import React from "react"
import firebase from "firebase"

export default () => {
    var provider = new firebase.auth.GithubAuthProvider();

    const handleButtonPress = () => {
        firebase.auth().signInWithRedirect(provider);
    }

    return (
        <button onClick={handleButtonPress}>Sign In</button>
    )
}