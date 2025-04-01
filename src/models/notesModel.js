// la declaracion del esquima o modelo de una nota para mongodb

import mongoose from "mongoose";

const noteSchema = mongoose.Schema(
  {
    //se validan los datos del schema
    text: { type: String, require: true },
    done: { type: Boolean, default: false },
  },
  { timestamps: true, versionKey: false }
);

const Note = mongoose.model("Note", noteSchema);

export { Note };
