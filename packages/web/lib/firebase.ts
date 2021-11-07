import { getApps, initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectStorageEmulator, getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

if (!getApps().length) {
  const app = initializeApp(firebaseConfig);
  connectStorageEmulator(getStorage(), "localhost", 9199);
  connectAuthEmulator(getAuth(), "http://localhost:9099", {
    disableWarnings: true,
  });
  connectFirestoreEmulator(getFirestore(), "localhost", 8080);
}

export const auth = getAuth();
export const firestore = getFirestore();
export const storage = getStorage();
