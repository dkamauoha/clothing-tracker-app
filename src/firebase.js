const firebase = require('firebase/app');
require('firebase/auth');

const { REACT_APP_FBASE_API_KEY, REACT_APP_FBASE_AUTH_DOMAIN, REACT_APP_FBASE_DATABASE_URL, REACT_APP_FBASE_PROJECT_ID, REACT_APP_FBASE_STORAGE_BUCKET, REACT_APP_FBASE_MESSAGING_SENDER_ID } = process.env;

var config = {
    apiKey: REACT_APP_FBASE_API_KEY,
    authDomain: REACT_APP_FBASE_AUTH_DOMAIN,
    databaseURL: REACT_APP_FBASE_DATABASE_URL,
    projectId: REACT_APP_FBASE_PROJECT_ID,
    storageBucket: REACT_APP_FBASE_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_FBASE_MESSAGING_SENDER_ID
}

firebase.initializeApp(config);

//Auth

firebase.auth().useDeviceLanguage();

module.exports = {
    auth: firebase.auth(),
    googleProvider: new firebase.auth.GoogleAuthProvider()
};


