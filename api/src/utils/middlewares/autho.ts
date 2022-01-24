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
const roles:r={superuser:Superuser,admin:Management}
async function authoVerify(req:any, res: any, next:any) {
  //extraigo el token que el cliente manda desde el header
  let token= req.headers[`authorization`].replace('Bearer ', '')
  // si no hay token no lo dejo seguir
  if(!token){
    res.send({succes:false,error:"Token not provider"})
  }
  //si existe el token verifico que sea valido o no este expirado
  try{
    // si existe el token lo verifico y decodifico
    let decode:any= jwt.verify(token,TK_S,{complete:true})
    if(decode){
      const {path}=req.route // si paso la verificacion obtengo la ruta a la cual se hizo la peticion
      let us=await roles[`${decode.payload.role}`].findOne({where:{id:decode.payload.id,mail:decode.payload.mail}}) //busco el usario segun su rol
      if(us){
        // si existe el usuario
        // verifico que  esta ruta este en los permitidos de este rol
        if(!getRoutesPermition(decode.payload.role).includes(path)){
          return res.send('Not autorized access in this section')
        }else{
          // si esta todo ok prosigue
          next()
        }
      }else{
        // en caso de que exista el token pero el usario no existe , se le niega el paso
        return res.status(400).json({success:true,inf:"User not register"})
      }
    }
  }catch(e){
    // en caso de que ocurra un error al verificar el token, mandar el aviso, sin dejarlo pasar
    res.status(400).json({success:false,error:"Error in token verify"})
  } 
}
export = authoVerify

