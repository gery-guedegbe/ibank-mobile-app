import { ImageSourcePropType } from "react-native";

export interface User {
  id: string;
  email: string;
  name: string | null;
  phone?: string;
  avatar?: string | ImageSourcePropType;
  token?: string;
  emailVerified: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  role: UserRole;
}

export enum UserRole {
  USER = "user",
  ADMIN = "admin",
  PREMIUM = "premium",
}

export interface SignupPayload {
  email: string;
  password: string;
  name: string;
  phone?: string;
  acceptTerms: boolean;
}

export interface LoginPayload {
  email: string;
  password: string;
}
