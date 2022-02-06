import { Router } from "express";
const{
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
}= require('../controllers/Admin/ctrAdmin')

const AdminRoute=Router()

// Recepcionistas

AdminRoute.get('/admin/recept',getReceptionistById,getReceptionist)
AdminRoute.post('/admin/recept',postReceptionist)
AdminRoute.put('/admin/recept',putReceptionist)
AdminRoute.delete('/admin/recept',deleteReceptionist)

//Profesionales

AdminRoute.get('/admin/recept',getProfessional,getProfessionalById)
AdminRoute.post('/admin/recept', postProfessional)
AdminRoute.put('/admin/recept',putProfessional)
AdminRoute.delete('/admin/recept',deleteProfessional)


export =AdminRoute