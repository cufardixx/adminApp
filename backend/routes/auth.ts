//Rutas de la app

import  express  from "express";
import { login, generateCode } from "../controllers/auth";


const router = express.Router()

router.post('/login/:email', login)
router.post('/login/:email/code', generateCode)

export default router