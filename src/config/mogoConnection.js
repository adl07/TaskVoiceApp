//Este archivo se va encargar de la conexion a la DB//

import mongoose from "mongoose";

process.loadEnvFile();

const URI_DB = process.env.URI_DB;

const connectDB = async () => {
  try {
    await mongoose.connect(URI_DB);
    console.log("mongo db exitoso");
  } catch (error) {
    console.log("error de conexion a mongo db");
  }
};

export { connectDB };
