
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Initialize Firebase

firebase.initializeApp({
  apiKey: "AIzaSyBPL9xiIDIzxquEpYmHw9Neh5NdQOontzU",
  authDomain: "react-firebase-auth-857ff.firebaseapp.com",
  projectId: "react-firebase-auth-857ff",
  storageBucket: "react-firebase-auth-857ff.appspot.com",
  messagingSenderId: "11115227716",
  appId: "1:11115227716:web:365cec3681f4ad6d6a6a11",
  measurementId: "G-TR7T3FW1YY"
})
// chỗ này a phải set cho nó truyền vô key của  firebase mình cần
const storeThietBi = firebase.firestore().collection("thietBi");
const storeDichVu = firebase.firestore().collection("dichVu"); 
const storeCapSo = firebase.firestore().collection("capSo"); 

export { storeThietBi, storeDichVu,storeCapSo}
export default firebase;