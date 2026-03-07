import { auth, db } from "@/config/firebase";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

import {
  LoginPayload,
  SignupPayload,
  User,
  UserRole,
} from "@/types/user.types";
import { getAuthErrorMessage } from "@/utils/errorsHandler";

export const authService = {
  async login(payload: LoginPayload) {
    const { email, password } = payload;

    const result = await signInWithEmailAndPassword(auth, email, password);

    const token = await result.user.getIdToken();

    const userRef = doc(db, "users", result.user.uid);

    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      throw new Error("User profile not found");
    }

    const userData = userSnap.data() as User;

    return {
      user: userData,
      token,
    };
  },

  async signup(payload: SignupPayload) {
    try {
      const { email, password, name } = payload;

      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const token = await result.user.getIdToken();

      const userData = {
        id: result.user.uid,
        email,
        name,
        role: UserRole.USER,
        emailVerified: result.user.emailVerified,
        createdAt: new Date(),
      };

      await setDoc(doc(db, "users", result.user.uid), userData);

      return {
        user: userData,
        token,
      };
    } catch (error: any) {
      console.error("[AuthService] Signup error:", error);

      // Si l'utilisateur a été créé mais pas le profil, nettoyer
      if (error.code === "auth/email-already-in-use") {
        throw new Error("Email already registered");
      }

      throw new Error(getAuthErrorMessage(error));
    }
  },

  async resetPassword(email: string) {
    await sendPasswordResetEmail(auth, email);
  },

  async logout() {
    await signOut(auth);
  },
};
