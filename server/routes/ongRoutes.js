import { Router} from "express";
import { createNewOng, deleteOng, editOng, getOng, getOngIntelectual, getOngPhysical, getOngVisual, } 
from "../controllers/ongController.js";
export const routerOng = Router();

const routerGetOng = routerOng.get('/seeOng', getOng);
const routerGetOngVisual = routerOng.get('/seeOngVisual', getOngVisual);
const routerGetOngIntelectual = routerOng.get('/seeOngIntelectual', getOngIntelectual);
const routerGetOngPhysical = routerOng.get('/seeOngPhysical', getOngPhysical);
const routerCreateOng = routerOng.post('/addOng', createNewOng);
const routerDeleteOng = routerOng.delete('/deleteOng', deleteOng);
const routerEditOng = routerOng.put('/editOng', editOng);