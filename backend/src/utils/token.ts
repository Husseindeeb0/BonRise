import jwt from "jsonwebtoken";
import { Response } from "express";
import { TokenPayload } from "../types/authTypes";

export const generateToken = (payload: TokenPayload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET as string, {
    expiresIn: "1h",
  });
};

export const generateRefreshToken = (payload: TokenPayload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET as string, {
    expiresIn: "24h",
  });
};

export const verifyToken = (
  token: string,
  type: "access" | "refresh",
): TokenPayload | null => {
  try {
    const secret =
      type === "access"
        ? (process.env.ACCESS_TOKEN_SECRET as string)
        : (process.env.REFRESH_TOKEN_SECRET as string);
    return jwt.verify(token, secret) as TokenPayload;
  } catch {
    return null;
  }
};

export const setTokenCookies = (
  res: Response,
  accessToken: string,
  refreshToken: string,
) => {
  const isProduction = process.env.NODE_ENV === "production";

  res.cookie("access_token", accessToken, {
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax",
    maxAge: 60 * 60 * 1000, // 1 hour
  });

  res.cookie("refresh_token", refreshToken, {
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax",
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  });
};

export const clearTokenCookies = (res: Response) => {
  res.clearCookie("access_token");
  res.clearCookie("refresh_token");
};
