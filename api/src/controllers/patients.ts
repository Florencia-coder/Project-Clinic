import { Response , Request , NextFunction } from 'express';
let {Patient} = require('../db')


async function getAllPatients(req:Request,res:Response,next:NextFunction){
    try{
        const allPatients = await Patient.findAll()
        if(allPatients){
            return res.status(200).json({
                data: allPatients
            })
        }
        else{
            return res.status(404).send('Patients not exist.')
        }
    }
    catch(error:any){
        next({message:error, status:500})
    }
}

async function getOnePatient(req:Request, res:Response, next: NextFunction){
    const { DNI } = req.params;
    if(!DNI){
        return res.send('DNI attibute is required')
    }
    try{
        const patient = await Patient.findOne({
            where: {
                DNI
            }
        })
        if(patient){
            return res.status(200).json(patient)
        }
        else{
            return res.status(404).send('No encontrado')
        }
    }
    catch(error:any){
        next({message:error, status:500})
    }
}

async function createPatient(req:Request, res:Response, next: NextFunction){
    const { name, lastname, DNI, birth, adress, mail, phone } = req.body;

    if(!name || !lastname || !DNI || !birth || !adress || !mail || !phone){
        return res.send('All attributes are required!')
    }

    try{
        await Patient.findOrCreate({
            where: { DNI },
            defaults:{
                name,
                lastname,
                DNI,
                birth,
                adress,
                mail,
                phone
            }
    })
    return res.status(200).send('Patient created successfully!')
    }
    catch(error:any){
        next({message:error, status:500})
    }
}

async function deletePatient(req:Request, res:Response, next: NextFunction){
    const { DNI } = req.params;
    if(!DNI){
        return res.status(200).send('DNI attribute is required')
    }
    try{
        const deleteRowCount = await Patient.destroy({
        where: {
            DNI
        }
    })
    if(deleteRowCount >=1){
        return res.status(200).send('Patient removed successfully')
    }
    else{
        return res.status(404).send('Patient not found')
    }
    }
    catch(error:any){
        next({message:error, status:500})
    }
}

async function updatePatient(req:Request, res:Response, next: NextFunction){
    const { DNI } = req.params;
    if(!DNI){
        return res.status(404).send('id attribute is required.')
    }

    const { name, lastname, birth, adress, mail, phone } = req.body;

    try{
        const patients = await Patient.findAll({
        attributes: ['id', 'name', 'lastname', 'birth','DNI', 'adress', 'mail', 'phone'],
        where: {
            DNI: DNI
        }})
        if(patients.length > 0) {
            patients.forEach(async (element:any) => {
                await Patient.update({
                    name: name,
                    lastname:lastname,
                    DNI: DNI,
                    birth: birth,
                    adress: adress,
                    mail: mail,
                    phone: phone
                },
                {where:{
                    DNI
                }}
                )
                return res.status(200).json('Patient updated successfully')
            });
        }
        else{
            return res.status(404).send('Patient not found.')
        }
    }catch(error:any){
        next({message:error, status:500})
    }
}

export ={ 
    getAllPatients,
    getOnePatient,
    createPatient,
    deletePatient,
    updatePatient
 }