/* Firebase project configuration.
 *
 * Backend is Firebase Authentication + Realtime Database — chosen
 * specifically because Realtime Database works on the free Spark plan
 * with no billing account required (unlike Firestore, which now requires
 * upgrading to the Blaze plan just to create a database, even to stay
 * within its free tier).
 *
 * These values are not secret — they identify your project, not authorize
 * access to it. Real access control lives in database.rules.json, not here.
 */
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

/* The single owner account. Auto-approved as "owner" on first sign-in,
 * bypassing the request queue. Also checked independently in
 * database.rules.json — that server-side copy is the real security
 * boundary, this one is just so the client UI knows to skip the request
 * screen. */
export const OWNER_EMAIL = "abdujalilov7707@gmail.com";
