import firebase from "firebase/app";
import "firebase/auth";
if (!firebase.apps.length)
  firebase.initializeApp({
    apiKey: "AIzaSyAFDd5zCnpojBLCuJyGzQxnuHVCL5Mdzm8",
    authDomain: "hoot-api.firebaseapp.com",
    projectId: "hoot-api",
    storageBucket: "hoot-api.appspot.com",
    messagingSenderId: "194298476453",
    appId: "1:194298476453:web:d5cc5c47dc06d1a5759a4c",
  });

export default firebase;
export function onAuthStateChange(callback) {
  return firebase.auth().onAuthStateChanged(user => {
    if (user) {
      callback({ user: user });
    } else callback({ user: null });
  });
}
