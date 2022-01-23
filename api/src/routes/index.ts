import {Router} from 'express';
import login from './login';

//import admin from './admin';
//import receptions from './recept';
//import profesionals from './profesional';
import supUser from './supUser';
const routes=Router()

routes.use(login)
//routes.use(profesionals)
//routes.use(receptions)
//routes.use(admin)
routes.use(supUser)


export = routes