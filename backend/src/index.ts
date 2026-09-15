import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route";
import corsOptions from "./configs/corsOptions";
import connectDB from "./configs/connectDb";

dotenv.config();

const app = express();

// Trust reverse proxy (Render, Heroku, etc.) so secure cookies work properly
app.set("trust proxy", 1);

const PORT = process.env.PORT || 5000;

connectDB();

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
