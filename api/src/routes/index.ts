import {Router} from 'express';
import AdminRoute from './admin';
import login from './login';

AdminRoute
//import receptions from './recept';
//import profesionals from './profesional';
import supUser from './supUser';
const routes=Router()

routes.use(login)
//routes.use(profesionals)
//routes.use(receptions)
routes.use(AdminRoute)
routes.use(supUser)


export = routes