import express, { json } from "express";
import cors from "cors";
import { connectDB } from "./config/mogoConnection.js";
import { notesRouter } from "./routes/notesRoutes.js";
import {errorHandle} from "./middleware/errorHandler.js"

const app = express();

app.use(cors());

app.use(express.json());

connectDB();

app.use("/api/notes", notesRouter);
app.use(errorHandle);

export { app };
