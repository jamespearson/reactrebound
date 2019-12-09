import firebase from '@firebase/app';
import '@firebase/firestore'
import { FirebaseNamespace } from '@firebase/app-types';

export const loadDB = (): FirebaseNamespace => {
    try {
        const {
            REACT_APP_FIREBASE_APIKEY: apiKey,
            REACT_APP_FIREBASE_AUTHDOMAIN: authDomain,
            REACT_APP_FIREBASE_DATABASEURL: databaseURL,
            REACT_APP_FIREBASE_PROJECTID: projectId,
            REACT_APP_FIREBASE_STORAGEBUCKET: storageBucket,
            REACT_APP_FIREBASE_MESSAGINGSENDERID: messagingSenderId,
            REACT_APP_FIREBASE_APPID: appId,
            REACT_APP_FIREBASE_MESSUREMENTID: measurementId
        } = process.env

        firebase.initializeApp({
            apiKey,
            authDomain,
            databaseURL,
            projectId,
            storageBucket,
            messagingSenderId,
            appId,
            measurementId
        });

    } catch (err) {
        // we skip the "already exists" message which is
        // not an actual error when we're hot-reloading
        if (!/already exists/.test(err.message)) {
            console.error('Firebase initialization error', err.stack);
        }
    }

    return firebase;
}