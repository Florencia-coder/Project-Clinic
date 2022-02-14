import { readdirSync } from "fs"
import path from "path"
import {Sequelize } from "sequelize-typescript"
require('dotenv').config()
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE } = process.env

const sequelize= new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}`,
  {
    logging: false,
    native: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
)
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch((err: any) => {
    console.error('Unable to connect to the database:', err)
  })
let modelsDefine: any = []
let files = readdirSync(path.join(__dirname, '/models'))
if(files?.length>0){
    files.filter((files: string) => files.slice(-3) === '.ts'|| files.slice(-3)=== '.js').forEach((element: string) => {
    modelsDefine.push(require(path.join(__dirname,'/models', element)))
  })
}
modelsDefine.forEach((model: any) =>model(sequelize))


const{ MedicalSpecialties, Professional, Patient,Turn, WorkingHours, ConsultingRoom, ClinicHistory}= sequelize.models;


// Profesionales puede tener muchas especialidades 
Professional.belongsToMany(MedicalSpecialties,{through:"profesional_Specialties"});
// las especialiades pueden pertencer a muchos profesionales
MedicalSpecialties.belongsToMany(Professional,{through:"profesional_Specialties"});

// un paciente tiene muchas historias clinicas
Patient.hasMany(ClinicHistory)
// y una historia clnica pertence a un paciente
ClinicHistory.belongsTo(Patient)

//Profesional puede hacer mas de un horario
Professional.belongsToMany(WorkingHours, {through: 'WorkingHours_Professional'})

//Y un horario puede tener muchos profesionales
WorkingHours.belongsToMany(Professional, {through: 'WorkingHours_Professional'})

//Profesionales tienen muchos pacientes
Professional.belongsToMany(Patient, {through: Turn})

//Pacientes tienen muchos profesionales
Patient.belongsToMany(Professional, {through: Turn})

//Professional.hasMany(Workinghours); 

//Consultingroom.hasOne(Professional); 


  
module.exports={
   ...sequelize.models,
  conn: sequelize,
}
