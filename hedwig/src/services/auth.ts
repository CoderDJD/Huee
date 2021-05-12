import firebase from "./firebase";
export default async function socialMediaAuth(provider) {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(res => {
      return res;
    })
    .catch(err => {
      return console.error(err);
    });
}

export function logOut() {
  return firebase
    .auth()
    .signOut()
    .catch(err => {
      return err;
    });
}
