import { Router} from "express";
import { getDeficiency, deleteDeficiency,createNewDeficiency,editDeficiency } from "../controllers/deficiencyController.js";
export const routerDeficiency = Router();

const routerGetDeficiency = routerDeficiency.get('/seeDeficiency', getDeficiency);
const routerCreateDeficiency = routerDeficiency.post('/addDeficiency', createNewDeficiency);
const routerDeleteDeficiency = routerDeficiency.delete('/deleteDeficiency', deleteDeficiency);
const routerEditDeficiency = routerDeficiency.put('/editDeficiency', editDeficiency);


