import express from "express";
import cors from "cors";
import { connectDB } from "./config/mogoConnection.js";

const app = express();

app.use(cors());

connectDB();

export { app };
