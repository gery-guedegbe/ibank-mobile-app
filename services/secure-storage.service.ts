import * as SecureStore from "expo-secure-store";

const BIOMETRIC_KEY = "biometric_token";

export const secureStorage = {
  async saveToken(token: string) {
    try {
      await SecureStore.setItemAsync(BIOMETRIC_KEY, token, {
        keychainAccessible: SecureStore.AFTER_FIRST_UNLOCK,
      });

      // console.log("[SecureStore] token saved");
    } catch (error) {
      console.error("[SecureStore] save error:", error);
    }
  },

  async getToken() {
    try {
      const token = await SecureStore.getItemAsync(BIOMETRIC_KEY);

      // console.log("[SecureStore] token:", token);

      return token;
    } catch (error) {
      console.error("[SecureStore] get error:", error);
      return null;
    }
  },

  async removeToken() {
    try {
      await SecureStore.deleteItemAsync(BIOMETRIC_KEY);
      // console.log("[SecureStore] token removed");
    } catch (error) {
      console.error("[SecureStore] remove error:", error);
    }
  },
};
