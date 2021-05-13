import firebase from "./firebase";
import { TwitterProvider, GithubProvider } from "./authProviders";
export default async function socialMediaAuth(
  provider: typeof GithubProvider | typeof TwitterProvider,
) {
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
