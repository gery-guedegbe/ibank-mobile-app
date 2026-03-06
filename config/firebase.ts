import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
// @ts-ignore: getReactNativePersistence exists in the RN bundle
import { getReactNativePersistence, initializeAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBISJ4tVYeuwqr5gKn5PDieD-TDInTgnVc",
  authDomain: "ibank-mobile-app.firebaseapp.com",
  projectId: "ibank-mobile-app",
  storageBucket: "ibank-mobile-app.firebasestorage.app",
  messagingSenderId: "160824508991",
  appId: "1:160824508991:web:c4cf7ae3f970d6a4f66e8a",
  measurementId: "G-TRBC02NQQV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
