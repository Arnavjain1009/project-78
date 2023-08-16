import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyC_m_z11THM3YYzxLuVmiyuiyVIbnvAUEY",
  authDomain: "complainr-forum.firebaseapp.com",
  projectId: "complainr-forum",
  storageBucket: "complainr-forum.appspot.com",
  messagingSenderId: "328590113844",
  appId: "1:328590113844:web:d51283c1b0a19427049e61"
};




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


