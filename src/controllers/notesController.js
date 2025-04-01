//recibir y responder al cliente//
import { Note } from "../models/notesModel.js";

export const createNote = async (req, res, next) => {
  try {
    //los datos que queremos obtener del body de la req
    const { text } = req.body;
    //pasamos el dato como valor de text al schema
    const newNote = new Note({ text });
    //guardamos el valor y devolvemos un 201
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    next(error);
  }
};

export const getNotes = async () => {};
export const getNotesById = async ({ id }) => {};
export const updateNote = async ({ id }) => {};
export const deleteNote = async ({ id }) => {};
