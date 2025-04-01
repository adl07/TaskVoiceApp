//funcion encargada de manejar los errores
// si hay un error a nivel de servidor

export const errorHandler = (err, req, res) => {
  console.log(err);
  res.status(500).json({ message: "Server error" });
};
