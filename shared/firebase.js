/* Firebase app init — single source of truth, imported by auth-gate.js,
 * app.js's cloud sync bridge, and admin/admin.js. */
import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import {
  getAuth, initializeAuth, indexedDBLocalPersistence, browserLocalPersistence, GoogleAuthProvider, OAuthProvider,
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";
import { firebaseConfig } from "./firebase-config.js";

export const isFirebaseConfigured = !!firebaseConfig.apiKey && !firebaseConfig.apiKey.startsWith("YOUR_");

// Inside a Capacitor native app, window.Capacitor is injected by the native
// bridge itself (no import needed to detect it). Plain getAuth()'s automatic
// persistence detection doesn't behave on either native platform, so both
// need initializeAuth() with an explicit persistence — see shared/README
// notes in auth-gate.js's native sign-in path for why this pairs with the
// native Google Sign-In bridge.
//
// The two platforms need different persistence, though: Android's WebView
// doesn't reliably survive app restarts with the plain browser (localStorage)
// persistence, so it needs indexedDBLocalPersistence. iOS's WKWebView serves
// the app over a custom `capacitor://` scheme (not http/https), and
// initializeAuth's IndexedDB-based persistence throws inside the SDK under
// that non-http origin, producing a blank screen — browserLocalPersistence
// avoids that code path and works fine there.
const platform = typeof window !== "undefined" && window.Capacitor && window.Capacitor.getPlatform && window.Capacitor.getPlatform();
const nativePersistence = platform === "android" ? indexedDBLocalPersistence : platform === "ios" ? browserLocalPersistence : null;

// Browsers partition storage between the site and Firebase's own sign-in
// domain (iOS Safari always, desktop Safari/Chrome when third-party storage
// is blocked), so the popup can't hand the result back and sign-in ends as
// "cancelled" or "missing initial state". The fix is to serve Firebase's
// /__/auth/* handler from the app's own domain (vercel.json proxies it) and
// use a full-page redirect rather than a popup — but that ALSO requires
// registering "https://<this-host>/__/auth/handler" as an authorized
// redirect URI on the Google OAuth web client in Google Cloud Console
// (APIs & Services -> Credentials -> the client Firebase auto-created for
// Google Sign-In), or Google rejects the redirect with
// "Error 400: redirect_uri_mismatch". That registration hasn't been done
// for this project yet, so this list stays empty for now — every host uses
// the plain popup on the default Firebase authDomain, which works fine
// outside Safari / strict-privacy browsers. Add a hostname here (and do the
// Google Cloud Console step above) if Safari support becomes a priority.
const PROXIED_AUTH_HOSTS = [];
export const usesRedirectSignIn = !nativePersistence &&
  typeof location !== "undefined" && PROXIED_AUTH_HOSTS.includes(location.hostname);

const activeConfig = usesRedirectSignIn
  ? { ...firebaseConfig, authDomain: location.host }
  : firebaseConfig;

const app = isFirebaseConfigured
  ? (getApps().length ? getApps()[0] : initializeApp(activeConfig))
  : null;

export const auth = app
  ? (nativePersistence ? initializeAuth(app, { persistence: nativePersistence }) : getAuth(app))
  : null;
export const db = app ? getDatabase(app) : null;

export const googleProvider = new GoogleAuthProvider();
export const appleProvider = new OAuthProvider("apple.com");
