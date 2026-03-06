import { useAuthStore } from "@/store/auth.store";

export const useAuth = () => {
  const { login, signup, resetPassword, logout, user, token, isLoading } =
    useAuthStore();

  return {
    login,
    signup,
    resetPassword,
    logout,
    user,
    token,
    isLoading,
  };
};
