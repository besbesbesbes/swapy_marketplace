import express from "express";
import {
  searchBy,
  searchAll,
  searchHighlight,
} from "../controllers/search-controller.js";
const router = express.Router();

router.get("/", searchBy);
router.get("/all", searchAll);
router.get("/highlight", searchHighlight);
export default router;
