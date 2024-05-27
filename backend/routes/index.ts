//Archivo donde se encontran todas las rutas centralizadas 
import express from "express"
import authRouts from "./auth"
import panelRouts from "./panel"

const router = express.Router()

router.use("/auth", authRouts)
router.use("/panel", panelRouts)

export default router