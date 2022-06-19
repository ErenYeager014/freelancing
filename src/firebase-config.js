import firebase from "firebase"
const firebaseConfig ={} // to add your configuration to this object 

const firebaseapp=firebase.initializeApp(firebaseConfig);
const db=firebaseapp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export  {auth,provider};
export default db;