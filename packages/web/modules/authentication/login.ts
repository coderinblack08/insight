import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../lib/firebase";

const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/userinfo.profile");
provider.addScope("https://www.googleapis.com/auth/userinfo.email");

export async function login() {
  const { user } = await signInWithPopup(auth, provider);
  const newUser = user.metadata.creationTime === user.metadata.lastSignInTime;
}
