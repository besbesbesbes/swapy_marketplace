import express from "express";
import cors from "cors";
import { hdlError } from "./middlewares/error.js";
import { notFoundHdl } from "./middlewares/not-found.js";
import authRoutes from "./routes/auth-route.js";
import userRoutes from "./routes/user-route.js";
import searchRotes from "./routes/search-route.js";
import assetRoutes from "./routes/asset_route.js";
import authenticate from "./middlewares/authenticate.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/user", authenticate, userRoutes);
app.use("/search", searchRotes);
app.use("/asset", authenticate, assetRoutes);
app.use(hdlError);
app.use("*", notFoundHdl);
//start server
app.listen(8000, () => console.log("Server is running on :8000"));
