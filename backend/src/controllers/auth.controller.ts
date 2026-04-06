import { Request, Response } from "express";
import User from "../models/user.model";
import {
  generateToken,
  generateRefreshToken,
  setTokenCookies,
  clearTokenCookies,
} from "../utils/token";
import { hashPassword, comparePassword } from "../utils/hash";
import {
  AuthRequest,
  ApiResponse,
  TokenPayload,
  AuthResponse,
} from "../types/authTypes";

export const signup = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({
        state: "ERROR",
        message: "User already exists",
      } as ApiResponse);
    }

    const hashedPassword = await hashPassword(password);
    const newUser = new User({ username, email, password: hashedPassword });

    const payload: TokenPayload = {
      id: (newUser._id as any).toString(),
      email: newUser.email,
      role: newUser.role,
    };

    const accessToken = generateToken(payload);
    const refreshToken = generateRefreshToken(payload);

    newUser.refreshToken = refreshToken;
    await newUser.save();

    setTokenCookies(res, accessToken, refreshToken);

    const authResponse: AuthResponse = {
      _id: (newUser._id as any).toString(),
      username: newUser.username,
      email: newUser.email,
      role: newUser.role,
      message: "User created successfully",
    };

    res.status(201).json({
      state: "SUCCESS",
      message: "User created successfully",
      data: authResponse,
    } as ApiResponse);
  } catch (err: any) {
    res
      .status(500)
      .json({ state: "ERROR", message: err.message } as ApiResponse);
  }
};

export const signin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await comparePassword(password, user.password))) {
      return res.status(401).json({
        state: "ERROR",
        message: "Invalid credentials",
      } as ApiResponse);
    }

    const payload: TokenPayload = {
      id: (user._id as any).toString(),
      email: user.email,
      role: user.role,
    };

    const accessToken = generateToken(payload);
    const refreshToken = generateRefreshToken(payload);

    user.refreshToken = refreshToken;
    await user.save();

    setTokenCookies(res, accessToken, refreshToken);

    const authResponse: AuthResponse = {
      _id: (user._id as any).toString(),
      username: user.username,
      email: user.email,
      role: user.role,
      message: "Logged in successfully",
    };

    res.status(200).json({
      state: "SUCCESS",
      message: "Logged in successfully",
      data: authResponse,
    } as ApiResponse);
  } catch (err: any) {
    res
      .status(500)
      .json({ state: "ERROR", message: err.message } as ApiResponse);
  }
};

export const logout = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId;
    if (userId) {
      await User.findByIdAndUpdate(userId, { refreshToken: "" });
    }

    clearTokenCookies(res);
    res.status(200).json({
      state: "SUCCESS",
      message: "Logged out successfully",
    } as ApiResponse);
  } catch (err: any) {
    res
      .status(500)
      .json({ state: "ERROR", message: err.message } as ApiResponse);
  }
};

export const getProfile = async (req: AuthRequest, res: Response) => {
  try {
    const user = await User.findById(req.userId).select(
      "-password -refreshToken",
    );
    if (!user) {
      return res
        .status(404)
        .json({ state: "ERROR", message: "User not found" } as ApiResponse);
    }

    res.status(200).json({
      state: "SUCCESS",
      message: "Profile fetched successfully",
      data: {
        _id: (user._id as any).toString(),
        username: user.username,
        email: user.email,
        role: user.role,
      },
    } as ApiResponse);
  } catch (err: any) {
    res
      .status(500)
      .json({ state: "ERROR", message: err.message } as ApiResponse);
  }
};
