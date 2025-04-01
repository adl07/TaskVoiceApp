//funcion encargada de manejar los errores
// si hay un error a nivel de servidor
import express from "express"

export const errorHandle = (err, req, res,netx) => {
  console.log(err);
  res.status(500).json({ message: "Server error" });
};
