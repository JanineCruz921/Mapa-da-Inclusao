import { Router} from "express";
import { getDeficiency, deleteDeficiency,createNewDeficiency,editDeficiency } from "../controllers/deficiencyController.js";
const routerDeficiency = Router();

export const routerGetDeficiency = routerDeficiency.get('/seeDeficiency', getDeficiency);
export const routerCreateDeficiency = routerDeficiency.post('/addDeficiency', createNewDeficiency);
export const routerDeleteDeficiency = routerDeficiency.delete('/deleteDeficiency', deleteDeficiency);
export const routerEditDeficiency = routerDeficiency.put('/editDeficiency', editDeficiency);


