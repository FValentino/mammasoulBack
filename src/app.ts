import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes";

const app = express();


app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/products", productRoutes);

export default app;