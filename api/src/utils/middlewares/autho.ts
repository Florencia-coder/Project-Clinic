const {
  Superuser,
  Management,
  Receptionist,
  Professional,
}=require('../../db')
import config from '../config/index'
import jwt from 'jsonwebtoken'
import { Request, NextFunction, Response } from 'express'
import getRoutesPermition from '../helpers/routesByroles'




// traigo la key para la firma
const {TK_S}:any= config
type r={
  [key:string]:any
}
//agrupo segun el rol una tabla
const roles:r={superuser:Superuser}
async function authoVerify(req:any, res: any, next:any) {
  //extraigo el token que el cliente manda desde el header
  let token= req.headers[`authorization`].replace('Bearer ', '')
  // si no hay token no lo dejo seguir
  if(!token){
    res.send('Token not found')
  }
  //si existe el token verifico que sea valido o no este expirado
  jwt.verify(token,TK_S,undefined,async (error:any, sucess:any) => {
    if (error) {
      res.status(401).send(error)
    } else {
      // aqui verifico la ruta en la que estamos
      const {path}=req.route
      console.log(path)
      // cada rol tendra una lista de rutas que podra acceder, si la ruta actual no se 
      // encuentra en las permitidas a este rol , no se lo deja seguir
      if(!getRoutesPermition(sucess.role).includes(path)){
        res.send('Not autorized access in this section')
      }
      // en caso contrario pasa 
      req.token = sucess
      next()
    }
  })
  
}
export = authoVerify
