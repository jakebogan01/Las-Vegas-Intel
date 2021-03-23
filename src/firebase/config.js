import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD8KdjdBOCEuzapNQwWJcq1_uItYKw_AJs",
  authDomain: "las-vegas-intel.firebaseapp.com",
  projectId: "las-vegas-intel",
  storageBucket: "las-vegas-intel.appspot.com",
  messagingSenderId: "886142722789",
  appId: "1:886142722789:web:e3ee3f5a1ddfe8acf2aa0c"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }