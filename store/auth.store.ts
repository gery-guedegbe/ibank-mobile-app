import { authService } from "@/services/auth.service";
import { secureStorage } from "@/services/secure-storage.service";
import { LoginPayload, SignupPayload, User } from "@/types/user.types";
import { create } from "zustand";

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  login: (payload: LoginPayload) => Promise<void>;
  signup: (payload: SignupPayload) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,

  login: async (payload) => {
    try {
      set({ isLoading: true });

      const { user, token } = await authService.login(payload);

      await secureStorage.saveToken(token);

      set({
        user,
        token,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      console.log("[Auth Login Error]", error);
      set({ isLoading: false });
      throw error;
    }
  },

  signup: async (payload) => {
    try {
      set({ isLoading: true });

      const { user, token } = await authService.signup(payload);

      await secureStorage.saveToken(token);

      set({
        user,
        token,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      console.log("[Auth Signup Error]", error);
      set({ isLoading: false });
      throw error;
    }
  },

  resetPassword: async (email) => {
    try {
      set({ isLoading: true });

      await authService.resetPassword(email);

      set({ isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      console.log("[Reset Password Error]", error);
      throw error;
    }
  },

  logout: async () => {
    await authService.logout();
    await secureStorage.removeToken();

    set({
      user: null,
      token: null,
      isAuthenticated: false,
    });
  },
}));
