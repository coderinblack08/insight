import { v4 } from "uuid";
import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

if (process.env.NODE_ENV === "development") {
  process.env["FIRESTORE_EMULATOR_HOST"] = "localhost:8080";
  process.env["FIREBASE_AUTH_EMULATOR_HOST"] = "localhost:9099";
}

const firebase = initializeApp(
  {
    credential: cert({
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
      privateKey: (process.env.ADMIN_KEY || "").replace(/\\n/g, "\n"),
      clientEmail: process.env.ADMIN_CLIENT_EMAIL,
    }),
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  },
  v4()
);

export const admin = {
  auth: getAuth(firebase),
  db: getFirestore(firebase),
};

admin.db.settings({ ignoreUndefinedProperties: true });
