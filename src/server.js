import { app } from "./app.js";

process.loadEnvFile();

const PORT = process.env.PORT;


app.listen(PORT, () => {
  console.log("Ejecutando desde el http://localhost:" + PORT);
});
