const application = require("./app");

const { initializeDB } = require("./config/db");

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await initializeDB();
  application.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
};

startServer();
