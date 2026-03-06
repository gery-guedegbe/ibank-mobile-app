import * as LocalAuthentication from "expo-local-authentication";

export const biometricService = {
  async isAvailable() {
    try {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      const enrolled = await LocalAuthentication.isEnrolledAsync();

      console.log("[Biometric] hardware:", compatible);
      console.log("[Biometric] enrolled:", enrolled);

      return compatible && enrolled;
    } catch (error) {
      console.error("[Biometric] availability error:", error);
      return false;
    }
  },

  async authenticate() {
    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: "Authenticate to login",
        fallbackLabel: "Use password",
        disableDeviceFallback: false,
      });

      console.log("[Biometric] auth result:", result);

      return result.success;
    } catch (error) {
      console.error("[Biometric] auth error:", error);
      return false;
    }
  },
};
