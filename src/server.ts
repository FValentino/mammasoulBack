import app from "./app";
import { initializeDB } from "./config/db";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await initializeDB();
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
};

startServer();
