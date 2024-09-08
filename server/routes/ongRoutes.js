import { Router} from "express";
import { createNewOng, deleteOng, editOng, getOng } from "../controllers/ongController.js";
const routerOng = Router();

export const routerGetOng = routerOng.get('/seeOng', getOng);
export const routerCreateOng = routerOng.post('/addOng', createNewOng);
export const routerDeleteOng = routerOng.delete('/deleteOng', deleteOng);
export const routerEditOng = routerOng.put('/editOng', editOng);