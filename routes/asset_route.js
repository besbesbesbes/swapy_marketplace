import express from "express";
import { createAsset, updateAsset } from "../controllers/asset-controller.js";
const router = express.Router();

router.post("/create", createAsset);
router.patch("/update", updateAsset);
export default router;
