import firebase from "@firebase/app";
import "@firebase/database";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.firebase.apiKey,
    authDomain: process.env.firebase.authDomain,
    databaseURL: process.env.firebase.databaseUrl,
    projectId: process.env.firebase.projectId,
    storageBucket: process.env.firebase.storageBucket,
    messagingSenderId: process.env.firebase.messagingSenderId
  });
}

export default firebase;
