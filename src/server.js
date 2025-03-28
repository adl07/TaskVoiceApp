import { app } from "./app.js";

process.loadEnvFile();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({
    a: 1,
  });
});

app.listen(PORT, () => {
  console.log("Ejecutando desde el http://localhost:" + PORT);
});
