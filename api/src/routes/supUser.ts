import {Router} from 'express';
import authoVerify from '../utils/middlewares/autho';
const {getAdmins,postAdmin,updateAdmin,deleteAdmin} = require('./../controllers/supuser/ctrAdmin')

const supUser= Router()
// metodos para cargar ,editar y borrar administradores
supUser.get('/supuser/admins',authoVerify,getAdmins)
supUser.post('/supuser/admins',authoVerify,postAdmin)
supUser.put('/supuser/admins/:id',authoVerify,updateAdmin)
supUser.delete('/supuser/admins/:id',authoVerify,deleteAdmin)


export= supUser