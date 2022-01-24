import { Router } from 'express';
const receptions= Router();
const ROUTE = '/receptions';
import patients from '../controllers/patients';
import turns from '../controllers/turns';

receptions.get(ROUTE ,(req:any,res:any)=>{
    const {userSession} = req.session
    userSession && res.send("estas en receptions") && console.log(req.session)

    res.json({redirect:'/login'})
})

//Obteniendo información de pacientes
receptions.get( `${ROUTE}/patients`, patients.getAllPatients )

//Obtengo información de 1 paciente en particular 
receptions.get( `${ROUTE}/patient/:DNI`, patients.getOnePatient )

//Publicar información de 1 paciente en particular
receptions.post( `${ROUTE}/patient`, patients.createPatient )

//Eliminar información de 1 paciente en particular
receptions.delete(`${ROUTE}/patient/:DNI`, patients.deletePatient)

//Modificar información de 1 paciente en particular
receptions.put(`${ROUTE}/patient/:DNI`, patients.updatePatient)

//Ruta para crear un turno a un paciente con ese id
receptions.post(`${ROUTE}/:id/turn`, turns.postTurn)

//Ruta para eliminar turno a un paciente con ese id
receptions.delete(`${ROUTE}/:id/turn`, turns.deleteTurn)

//Ruta para ver los turnos de un paciente con ese id
receptions.get(`${ROUTE}/:id/turn`, turns.getTurnPatient)
export= receptions