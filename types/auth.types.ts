import { User } from "./user.types";

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken?: string;
}

export interface AuthError {
  code: string;
  message: string;
}
