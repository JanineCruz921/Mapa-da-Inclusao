import express from 'express'
import { routerCreateDeficiency, routerDeleteDeficiency, routerEditDeficiency, routerGetDeficiency} from './routes/deficiencyRoutes.js';
import { routerCreateOng, routerDeleteOng, routerEditOng, routerGetOng } from './routes/ongRoutes.js';
import { routerCreateUser, routerDeleteUser, routerEditUser, routerGetUser } from './routes/userRoutes.js';
const server = express()
server.listen(3095)

server.use(express.json())
server.use(routerCreateDeficiency);
server.use(routerGetDeficiency);
server.use(routerEditDeficiency);
server.use(routerDeleteDeficiency);

server.use(routerCreateOng);
server.use(routerEditOng);
server.use(routerGetOng);
server.use(routerDeleteOng);

server.use(routerCreateUser);
server.use(routerEditUser);
server.use(routerGetUser);
server.use(routerDeleteUser);