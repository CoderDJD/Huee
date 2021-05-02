import firebase from "firebase/app";
import "firebase/auth";
require("dotenv").config();
var myApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
});
export const auth = myApp.auth();
export function authWithGithub() {
  var provider = new firebase.auth.GithubAuthProvider();
  provider.addScope("public_auth");
  provider.addScope("read:user");
  auth.signInWithPopup(provider);
}
export function logOut() {
  auth.signOut();
}
