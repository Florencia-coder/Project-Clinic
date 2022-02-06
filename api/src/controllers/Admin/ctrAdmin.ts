const { Professional, Receptionist } = require('../../db')
import {} from 'sequelize'
import { Request, Response,NextFunction} from 'express'

function getReceptionist(req: Request, res: Response) {
  try {
    Receptionist.findAll()
      .then((result: Array<object>) => {
        if (result.length > 0) {
          res
            .status(200)
            .json({ succcess: true, inf: 'Data exist', data: result })
        } else {
          res.status(204).json({ succcess: true, inf: 'Not has content' })
        }
      })
      .catch((err: object) => {
        res.status(400).json({ success: false, inf: 'Error database search' })
      })
  } catch (e) {
    res.status(500).json({ success: false, inf: 'Error in search Data' })
  }
}
function getReceptionistById(req:Request,res:Response,next:NextFunction){
    const {id}= req.query
    if(id){
        Receptionist.findOne({where:{id:id}})
        .then((result:object) => {
            res.status(200).json({success:true,data:result})
        }).catch((err:any) => {
            res.status(401).json({success:false,inf:"User not found with this id: "+err})
        });
    }else{
        next()
    }
}
function postReceptionist(req: Request, res: Response) {
  try {
    const {
      name,
      lastname,
      DNI,
      birth,
      mail,
      phone,
      username,
      password,
      role,
    } = req.body
    if (
      !name &&
      !lastname &&
      !DNI &&
      !birth &&
      !mail &&
      !phone &&
      !username &&
      !password &&
      !role
    ) {
      res.status(400).json({ success: false, inf: 'Error data received' })
    } else {
      Receptionist.create({
        name,
        lastname,
        DNI,
        birth,
        mail,
        phone,
        username,
        password,
        role,
      })
        .then((result: any) => {
          res.status(200).json({ success: true, inf: result })
        })
        .catch((err: any) => {
          res.status(400).json({ success: false, inf: 'Error in create User' })
        })
    }
  } catch(error) {
      res.status(500).json({success:false,inf:'Error in post process: '+error})
  }
}
function putReceptionist(req: Request, res: Response){
    const {id}= req.query
    const dataToUpdate=req.body
    if(id&&dataToUpdate){
        Receptionist.update(dataToUpdate,{where:{id:id}})
        .then((result:any) => {
            res.status(200).json({success:true,inf:result})
        }).catch((err:any) => {
            res.status(400).json({success:false,inf:err})
        });
    }else{
        res.status(400).json({success:false,inf:"Id or Data to update not provided"})
    }
}
function deleteReceptionist(req: Request, res: Response){
    const {id}= req.query
    try{
        if(!id){
            res.status(400).json({success:false,inf:"Id not provided"})
        }else{
            Receptionist.destroy({where:{id:id}})
            .then((result:any) => {
                res.status(200).json({success:true,inf:result})
            }).catch((err:any) => {
                res.status(400).json({success:false,inf:err})
            });
        }
    }catch(e){
        res.status(500).json({success:false,inf:e})
    }
}
function getProfessional(req: Request, res: Response) {
    try {
      Professional.findAll()
        .then((result: Array<object>) => {
          if (result.length > 0) {
            res
              .status(200)
              .json({ succcess: true, data: result })
          } else {
            res.status(204).json({ succcess: true, inf: 'Not has content' })
          }
        })
        .catch((err: object) => {
          res.status(400).json({ success: false, inf: 'Error database search' })
        })
    } catch (e) {
      res.status(500).json({ success: false, inf: 'Error in search Data' })
    }
  }
  function getProfessionalById(req:Request,res:Response,next:NextFunction){
      const {id}= req.query
      if(id){
          Professional.findOne({where:{id:id}})
          .then((result:object) => {
              res.status(200).json({success:true,data:result})
          }).catch((err:any) => {
              res.status(401).json({success:false,inf:"User not found with this id: "+err})
          });
      }else{
          next()
      }
  }
  function postProfessional(req: Request, res: Response) {
    try {
      const {
        name,
        lastname,
        DNI,
        birth,
        mail,
        phone,
        username,
        password,
        role,
      } = req.body
      if (
        !name &&
        !lastname &&
        !DNI &&
        !birth &&
        !mail &&
        !phone &&
        !username &&
        !password &&
        !role
      ) {
        res.status(400).json({ success: false, inf: 'Error data received' })
      } else {
        Professional.create({
          name,
          lastname,
          DNI,
          birth,
          mail,
          phone,
          username,
          password,
          role,
        })
          .then((result: any) => {
            res.status(200).json({ success: true, inf: result })
          })
          .catch((err: any) => {
            res.status(400).json({ success: false, inf: 'Error in create User' })
          })
      }
    } catch(error) {
        res.status(500).json({success:false,inf:'Error in post process: '+error})
    }
  }
  function putProfessional(req: Request, res: Response){
      const {id}= req.query
      const dataToUpdate=req.body
      if(id&&dataToUpdate){
          Professional.update(dataToUpdate,{where:{id:id}})
          .then((result:any) => {
              res.status(200).json({success:true,inf:result})
          }).catch((err:any) => {
              res.status(400).json({success:false,inf:err})
          });
      }else{
          res.status(400).json({success:false,inf:"Id or Data to update not provided"})
      }
  }
  function deleteProfessional(req: Request, res: Response){
      const {id}= req.query
      try{
          if(!id){
              res.status(400).json({success:false,inf:"Id not provided"})
          }else{
              Professional.destroy({where:{id:id}})
              .then((result:any) => {
                  res.status(200).json({success:true,inf:result})
              }).catch((err:any) => {
                  res.status(400).json({success:false,inf:err})
              });
          }
      }catch(e){
          res.status(500).json({success:false,inf:e})
      }
  }
module.exports ={
  getReceptionist,
  getReceptionistById,
  postReceptionist,
  putReceptionist,
  deleteReceptionist,
  getProfessional,
  getProfessionalById,
  postProfessional,
  putProfessional,
  deleteProfessional
}
