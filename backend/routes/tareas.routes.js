import {Router} from "express"
import { deleteTarea, enviarDatos, showOnlyTarea, showTareas, updateTarea } from "../controllers/tareas.controllers.js"

const router = Router ()

router.get ("/tareas", showTareas)
router.get ("/tareas/:id", showOnlyTarea)
router.delete ("/deleteTarea/:id", deleteTarea)
router.post ("/tareas", enviarDatos)
router.put ("/uTarea/:id", updateTarea)


export default router;