// endpoints del crud
// obtener notas -> "/"
// modificar nota -> "/:id"

import { Router } from "express";
import {
  getNotes,
  getNotesById,
  updateNote,
  deleteNote,
} from "../controllers/notesController.js";

const notesRouter = Router();

notesRouter.get("/", getNotes);
notesRouter.get("/", getNotesById);
notesRouter.patch("/", updateNote);
notesRouter.delete("/", deleteNote);

export { notesRouter };
