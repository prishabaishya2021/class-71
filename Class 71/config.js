import firebase from "firebase";
require("@firebase/firestore");
const firebaseConfig = {
  apiKey: "AIzaSyBiW1OY1yvJwCo-8DCSPFbQDWe9ZhvtlcI",
  authDomain: "p71u-78a97.firebaseapp.com",
  projectId: "p71u-78a97",
  storageBucket: "p71u-78a97.appspot.com",
  messagingSenderId: "821136624797",
  appId: "1:821136624797:web:275ec55f297324a2529874"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
