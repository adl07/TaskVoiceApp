//recibir y responder al cliente//
import mongoose from "mongoose";
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

export const getNotes = async (req, res, next) => {
  try {
    const notes = await Note.find()
    res.json(notes);
  } catch (error) {
    next(error)
  }
};

export const getNotesById = async (req, res, next) => {
  try {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({message: "Invalid objectId format"})
    }
    const note = await Note.findById(id)

    if(!note) res.status(400).json({
      message: "Note not found"
    })
    res.json(note)
  } catch (error) {
    next(error)
  }
};

export const updateNote = async (req, res, next) => {
  try {
    const {id} = req.params;
    const {body} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({message: "Invalid objectId format"})
    }

    const updateNote = await Note.findByIdUpdate(id,body, {new: true})
    if(!updateNote){
      res.status(404).json({message: "note fot found"})
    }
    res.json(updateNote)

  } catch (error) {
    next(error)
  }
};

export const deleteNote = async (req, res, next) => {
  try {
    
  } catch (error) {
    next(error)
  }
};
