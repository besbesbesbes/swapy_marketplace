import express from "express";
import {hdlError} from "./middlewares/error.js";
import { notFoundHdl } from "./middlewares/not-found.js";
import authRoutes from "./routes/auth-route.js"

const app = express();

app.use(express.json());
app.use("/auth", authRoutes)
app.use(hdlError);
app.use("*", notFoundHdl);
//start server
app.listen(8000, () => console.log("Server is running on :8000"))