import { biometricService } from "@/services/biometric.service";
import { secureStorage } from "@/services/secure-storage.service";

export const useBiometricAuth = () => {
  const loginWithBiometric = async () => {
    try {
      const available = await biometricService.isAvailable();

      if (!available) {
        console.log("[Biometric] not available");
        return null;
      }

      const success = await biometricService.authenticate();

      if (!success) {
        console.log("[Biometric] authentication failed");
        return null;
      }

      const token = await secureStorage.getToken();

      if (!token) {
        console.log("[Biometric] no token stored");
        return null;
      }

      console.log("[Biometric] login success");

      return token;
    } catch (error) {
      console.error("[Biometric] login error:", error);
      return null;
    }
  };

  return { loginWithBiometric };
};
