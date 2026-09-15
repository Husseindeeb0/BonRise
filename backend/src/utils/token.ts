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

  const cookieOptions = {
    httpOnly: true,
    secure: isProduction,
    sameSite: (isProduction ? "none" : "lax") as "none" | "lax",
    path: "/",
  };

  res.cookie("access_token", accessToken, {
    ...cookieOptions,
    maxAge: 60 * 60 * 1000, // 1 hour
  });

  res.cookie("refresh_token", refreshToken, {
    ...cookieOptions,
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  });
};

export const clearTokenCookies = (res: Response) => {
  const isProduction = process.env.NODE_ENV === "production";

  const cookieOptions = {
    httpOnly: true,
    secure: isProduction,
    sameSite: (isProduction ? "none" : "lax") as "none" | "lax",
    path: "/",
  };

  res.clearCookie("access_token", cookieOptions);
  res.clearCookie("refresh_token", cookieOptions);
};
