const {Professional,Management} = require('../../db');
import {Request,Response} from 'express';

async function getAdmins(req:Request,res:Response):Promise<void>{
    //traigo todos los administradores registrados
    await Management.findAll()
    .then((r:Array<object>)=>{
        res.status(200).json(r)
    },(err:any)=>{
        res.status(401).send(err)
    })
}
// Admins atributos obligatorios para el registro
// dni mail password role
async function postAdmin(req:Request,res:Response){
    const {mail,password,role,username}= req.body
    if(mail&&password&&role){
        let [user,created]= await Management.findOrCreate({where:{mail:mail},defaults:{password,role,username}})
        if(created){
            return res.status(201).json({msg:"Admin registered successfully"})
        }else{
            return res.status(401).json({msg:"The user is already registered"})
        }
    }else{
        res.status(400).json({error:"check that the data is correct"})
    }
}

function updateAdmin(req:Request,res:Response){
    const {id}= req.params
    const dataUpdate= req.body
    console.log(req.params.id,dataUpdate)
    if(req.params?.id&& dataUpdate){
        Management.update(dataUpdate,{where:{id:id}})
        .then((r:any)=>{
            res.status(200).json({msg:"Admin update sucessfully",inf:r})
        },(error:any)=>{
            res.status(400).json({msg:"Error in update Admin",inf:error})
        })
        
    }else{
        res.status(400).json({msg:"id not found or data not provider"})
    }
}
function deleteAdmin(req:Request,res:Response){
    const {id}=req.params
    if(!id){
        return res.status(400).json({msg:"you need at least one identifier to remove a user"})
    }
    Management.destroy({where:{id:id}})
    .then((r:any)=>{
        res.status(200).json({msg:"Admin delete",inf:r})
    },(error:any)=>{
        res.status(400).json({msg:"Failed to delete user",inf:error})
    })
}

module.exports={
    getAdmins,
    postAdmin,
    updateAdmin,
    deleteAdmin
}