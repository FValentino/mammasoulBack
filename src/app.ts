const express = require("express")
import "reflect-metadata"
const cors = require("cors")
const productRoutes = require("./routes/productRoutes")

const app = express()

app.use(cors())
app.use(express.json())

// Rutas
app.use("/api/products", productRoutes)

module.exports = app;
