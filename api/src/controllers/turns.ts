import { Response, Request, NextFunction } from 'express';
import getIdParam from '../utils/helpers/verificIDParams';
let {Patient, Professional} = require('../db')

async function postTurn(req: Request, res: Response, next: NextFunction){
    const id = getIdParam(req);
    const {lastname, hourHand } = req.body
    try{
        const doctor = await Professional.findOne({where:{lastname}})

        if(doctor){
            const patient = await Patient.findByPk(id)

            if(patient){   
                await patient.addProfessional(doctor,{through: {hourHand}})
                return res.status(200).send('turn created successfully')
            }
            else{
                return res.status(404).send('sorry, the patient with that id was not found')
            }
        }
        else{
            return res.status(404).send('Sorry, the professional whit that lastname was not found ')
        }
    }
    catch(error:any){
        next({message:error, status:500})
    }

}

async function deleteTurn(req: Request, res: Response, next: NextFunction){
    const id = getIdParam(req);
    const {lastname, hourHand } = req.body
    try{
        const doctor = await Professional.findOne({where:{lastname}})

        if(doctor){
            const patient = await Patient.findByPk(id)

            if(patient){   
                await patient.removeProfessional(doctor,{through: {hourHand}})
                return res.status(200).send('turn removed successfully')
            }
            else{
                return res.status(404).send('sorry, the patient with that id was not found')
            }
        }
        else{
            return res.status(404).send('Sorry, the professional whit that lastname was not found ')
        }
    }
    catch(error:any){
        next({message:error, status:500})
    }

}

async function getTurnPatient(req: Request, res: Response, next: NextFunction) {
    const id = getIdParam(req);
    try{
        const turnPatient = await Patient.findOne({
            where:{
                id
            },
            attributes:['name', 'lastname'],
            include:{
                model :  Professional,
                attributes: ['name', 'lastname'],
                through: {
                    attributes: ['hourHand']
                  }
            },
        })
        if(turnPatient){
            return res.status(200).json(turnPatient)
        }
        else{
            return res.status(404).send('the patient with that id cannot be found')
        }
    }
    catch(error:any){
        next({message:error, status:500})
    }
}
export = {
    postTurn,
    deleteTurn,
    getTurnPatient
}