import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
 
import publicationsRoutes from "./src/publications/publication.routes.js";
import mongoose from "mongoose"
 
mongoose.connect("mongodb://127.0.0.1:27017/gestor_opiniones")
    .then(() => console.log("Base de datos conectada"))
    .catch((err) => console.log("Error conectando a Mongo:", err))
 
const app = express()
 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())
app.use(morgan("dev"))
 
app.use("/gestor_opiniones/v1/publications", publicationsRoutes)
 
const PORT = 3021
 
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)
})