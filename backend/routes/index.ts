//Archivo donde se encontran todas las rutas centralizadas 
import express from "express"
import authRouts from "./auth"

const router = express.Router()

router.use("/auth", authRouts)

export default router