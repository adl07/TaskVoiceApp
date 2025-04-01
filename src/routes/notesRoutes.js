// endpoints del crud
// obtener notas -> "/"
// modificar nota -> "/:id"

import { Router } from "express";
import {
  getNotes,
  createNote,
  getNotesById,
  updateNote,
  deleteNote,
} from "../controllers/notesController.js";

const notesRouter = Router();

notesRouter.get("/", getNotes);
notesRouter.post("/", createNote)
notesRouter.get("/:id", getNotesById);
notesRouter.patch("/:id", updateNote);
notesRouter.delete("/id", deleteNote);

export { notesRouter };
