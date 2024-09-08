import { Router} from "express";
import { createNewUser, deleteUser, editUser, getUser } from "../controllers/userController.js";
const routerUser = Router();

export const routerGetUser = routerUser.get('/seeUser', getUser);
export const routerCreateUser = routerUser.post('/addUser', createNewUser);
export const routerDeleteUser = routerUser.delete('/deleteUser', deleteUser);
export const routerEditUser= routerUser.put('/editUser', editUser);