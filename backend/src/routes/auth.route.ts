import { Router } from "express";
import { signup, signin, logout, getProfile } from "../controllers/auth.controller";
import { verifyJWT } from "../middleware/index";

const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/logout", verifyJWT, logout);
router.get("/me", verifyJWT, getProfile);

export default router;
