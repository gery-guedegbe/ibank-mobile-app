import { AuthError } from "@/types/auth.types";

export const getAuthErrorMessage = (error: AuthError): string => {
  switch (error.code) {
    case "auth/email-already-in-use":
      return "This email is already registered";
    case "auth/invalid-email":
      return "Invalid email address";
    case "auth/weak-password":
      return "Password is too weak";
    case "auth/user-not-found":
      return "No account found with this email";
    case "auth/wrong-password":
      return "Incorrect password";
    case "auth/too-many-requests":
      return "Too many failed attempts. Try again later";
    default:
      return "An error occurred. Please try again";
  }
};
