import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const { Superuser,Management,Receptionist,Professional}=require('../../db') 
import config from '../../utils/config';
let {TK_S}:any= config
import {Request,Response} from 'express'
// rutas  '/spuser' '/admin' '/professionals' '/receptions'
async function postLogin(req:Request, res: any){
  try {
   const {mail, password,role} = req.body
    if(!mail&& !password&&!role){
      return res.send("you have not entered the email or password or role")
    }

    let us:any
    // compruebo el usuario segun el rol dado
    role==="superuser"?
    us =  await Superuser.findOne({ where: { mail: mail }})
    :role==="admin"?
    us = await Management.findOne({ where: { mail: mail } })
    :role==="receptionist"?
    us= await Receptionist.findOne({where: { mail: mail }})
    :role==="professional"?
    us= await Professional.findOne({where: { mail: mail }})
    :null
    // verifico que la contraseña sea la misma que el de la base de dato
    us? bcrypt.compare(password,us.password,(error,success)=>{
      if (success) {
        // si la verificacion es exitosa 
        // procedo a crear el token
        const tokenData = {
          id:us.id,
          mail: us.mail,
          role:us.role
        }
        let TokenCreate = jwt.sign(tokenData,TK_S,{expiresIn:60*60*24})
        res.status(200).json({msg:"Autenticacion Correcta",token:TokenCreate,user:{
          fullName:us.fullName,
          dni:us.dni,
          mail:us.mail,
          role:us.role
        }})
      } else if(error) {
        res.status(400).send('Autenticacion Fallida'+ error)
      }

    })
    :res.status(401).send('User not found')
  }catch (e) {
    // caso de que ocurra algun error en el proceso mando un objeto con informacion
    res.status(400).json({error:e,msg:"Ocurrio un error al validar los datos extraidos"})
  }
}


export = {postLogin }
