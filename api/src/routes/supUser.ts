import {Router} from 'express';
import authoVerify from '../utils/middlewares/autho';
const {getAdmins,postAdmin,updateAdmin,deleteAdmin} = require('./../controllers/supuser/ctrSupUser')

const supUser= Router()
// metodos para cargar ,editar y borrar administradores
supUser.get('/supuser/admins',getAdmins)
supUser.post('/supuser/admins',postAdmin)
supUser.put('/supuser/admins/:id',updateAdmin)
supUser.delete('/supuser/admins/:id',deleteAdmin)


export= supUser