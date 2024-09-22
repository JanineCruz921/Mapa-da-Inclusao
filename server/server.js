import express from 'express'
import { routerDeficiency} from './routes/deficiencyRoutes.js';
import { routerOng } from './routes/ongRoutes.js';
import { routerUser } from './routes/userRoutes.js';
const server = express()
server.listen(3095)

server.use(express.json());

server.use(routerDeficiency);

server.use(routerOng)

server.use(routerUser);