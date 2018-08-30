import firebase from '@firebase/app'
import "@firebase/database";

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyBZYQSg0pHfLghSA2Zfp7NCyvuS-28Y1Gw",
      authDomain: "csendor-fdc9d.firebaseapp.com",
      databaseURL: "https://csendor-fdc9d.firebaseio.com",
      projectId: "csendor-fdc9d",
      storageBucket: "csendor-fdc9d.appspot.com",
      messagingSenderId: "288431688625"
    }
  )
}

export default firebase
