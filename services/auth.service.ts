import { auth } from "@/config/firebase";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { LoginPayload, SignupPayload } from "@/types/user.types";

export const authService = {
  async login(payload: LoginPayload) {
    const { email, password } = payload;

    const result = await signInWithEmailAndPassword(auth, email, password);

    const token = await result.user.getIdToken();

    return {
      user: result.user,
      token,
    };
  },

  async signup(payload: SignupPayload) {
    const { email, password } = payload;

    const result = await createUserWithEmailAndPassword(auth, email, password);

    const token = await result.user.getIdToken();

    return {
      user: result.user,
      token,
    };
  },

  async resetPassword(email: string) {
    await sendPasswordResetEmail(auth, email);
  },

  async logout() {
    await signOut(auth);
  },
};
