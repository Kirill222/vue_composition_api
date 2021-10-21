import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBUfySHa3xbDFosFWBXHlR1o4E7zVcUOSw",
    authDomain: "vue-projects-8b935.firebaseapp.com",
    projectId: "vue-projects-8b935",
    storageBucket: "vue-projects-8b935.appspot.com",
    messagingSenderId: "76226660680",
    appId: "1:76226660680:web:c608f7f6ff11a5fa91cb7d"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init firestore service
  const projectFirestore = firestore()

  export {projectFirestore}