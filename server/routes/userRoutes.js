import { Router} from "express";
import { createNewUser, deleteUser, editUser, getUser } from "../controllers/userController.js";
export const routerUser = Router();

const routerGetUser = routerUser.get('/seeUser', getUser);
const routerCreateUser = routerUser.post('/addUser', createNewUser);
const routerDeleteUser = routerUser.delete('/deleteUser', deleteUser);
const routerEditUser= routerUser.put('/editUser', editUser);