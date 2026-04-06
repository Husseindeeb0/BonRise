import { Request } from "express";
import { Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role: string;
  refreshToken: string | null;
}

export interface TokenPayload {
  id: string;
  email: string;
  role: string;
  iat?: number;
  exp?: number;
}

export interface SignupRequest {
  username: string;
  email: string;
  password: string;
}

export interface SigninRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  _id: string;
  username: string;
  email: string;
  role: string;
  message: string;
}

export interface ApiResponse {
  state: "SUCCESS" | "ERROR";
  message: string;
  data?: any;
}

export interface AuthRequest extends Request {
  userId?: string;
}
