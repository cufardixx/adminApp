//Rutas de la app

import  express  from "express";
import { getAll } from "../controllers/panel";



const router = express.Router()

router.get('/', getAll)


export default router