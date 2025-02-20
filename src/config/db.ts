import "reflect-metadata"
import { DataSource } from "typeorm"
import dotenv from "dotenv"

dotenv.config()

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "valu386060",
  database: "mammasoul",
  entities: ["src/models/*.ts"],
  migrations: ["src/migrations/*.ts"],
  subscribers: []
})

export const initializeDB = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Conexión a la base de datos establecida");
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
    process.exit(1);
  }
};