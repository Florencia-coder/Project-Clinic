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
    res.send({succes:false,error:"Token not provider"})
  }
  //si existe el token verifico que sea valido o no este expirado
  try{
    let decode:any= jwt.verify(token,TK_S,{complete:true})
    if(decode){
      const {path}=req.route
      console.log(path)
      if(!getRoutesPermition(decode.role).includes(path)){
        res.send('Not autorized access in this section')
      }
      // en caso contrario pasa 
      req.token = decode
      next()
    }
  }catch(e){
    res.status(400).json({success:false,error:e})
  } 
}
export = authoVerify
