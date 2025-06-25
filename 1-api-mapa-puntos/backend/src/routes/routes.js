import { Router } from "express";
import {
    getPuntos
} from "../controller/controller.js"

const router = Router()


router.get("/puntos", getPuntos)


export default router