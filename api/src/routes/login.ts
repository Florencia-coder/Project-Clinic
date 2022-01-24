import {Router} from 'express'
import login from '../controllers/login/login'
const log= Router()



log.post('/login',login.postLogin)

export=log