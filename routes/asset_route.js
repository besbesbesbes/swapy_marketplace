import express from "express";
import {
  createAsset,
  updateAsset,
  getAsset,
} from "../controllers/asset-controller.js";
const router = express.Router();

router.get("/", getAsset);
router.post("/create", createAsset);
router.patch("/update", updateAsset);
export default router;
