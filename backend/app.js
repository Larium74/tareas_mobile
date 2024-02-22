import express from "express";
import cors from "cors";
import connectiondb from "./database/connection.js";
import router from "./routes/tareas.routes.js";

const PORT = 3000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use (express.urlencoded ({extended: false}))
// Rutas
app.use(router);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log("Server on port ", PORT);
});