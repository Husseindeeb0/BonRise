import { Response, NextFunction } from "express";
import User from "../models/user.model";
import {
  verifyToken,
  generateToken,
  generateRefreshToken,
  setTokenCookies,
} from "../utils/token";
import { AuthRequest, ApiResponse, TokenPayload } from "../types/authTypes";

export const verifyJWT = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const accessToken = req.cookies.access_token;
    const refreshToken = req.cookies.refresh_token;

    if (!accessToken && !refreshToken) {
      return res.status(401).json({
        state: "ERROR",
        message: "AUTH_REQUIRED",
      } as ApiResponse);
    }

    let decoded = accessToken ? verifyToken(accessToken, "access") : null;

    if (!decoded && refreshToken) {
      const refreshDecoded = verifyToken(refreshToken, "refresh");

      if (refreshDecoded) {
        const user = await User.findById(refreshDecoded.id);

        // Strict DB Check
        if (user && user.refreshToken === refreshToken) {
          // Rotate Tokens
          const payload: TokenPayload = {
            id: (user._id as any).toString(),
            email: user.email,
            role: user.role,
          };

          const newAccessToken = generateToken(payload);
          const newRefreshToken = generateRefreshToken(payload);

          user.refreshToken = newRefreshToken;
          await user.save();

          setTokenCookies(res, newAccessToken, newRefreshToken);

          decoded = verifyToken(newAccessToken, "access");
        }
      }
    }

    if (!decoded || !("id" in decoded)) {
      return res.status(401).json({
        state: "ERROR",
        message: "Invalid or expired session",
      } as ApiResponse);
    }

    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({
      state: "AUTH_FAILED",
      message: "Authentication failed",
    });
  }
};
