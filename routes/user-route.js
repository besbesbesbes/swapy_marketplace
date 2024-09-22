import express from "express";
import { userInfo, updateUserInfo } from "../controllers/user-controller.js";
const router = express.Router();

router.get("/", userInfo);
router.patch("/update-user", updateUserInfo);
export default router;
