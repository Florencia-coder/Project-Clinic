const {conn,Patient, Professional}=require("./src/db");
import server from "./src/server";
import config from "./src/utils/config";
import superuserLoad from "./src/utils/helpers/SupuserLoad";


let credentials= {dni:30031024,mail:"sebadjkevin@gmail.com",password:'1997',role:"superuser"}


conn.sync({force:true}).then(async ()=>{
    await superuserLoad(credentials)
    server.listen(config.PORT,()=>{
        console.log(`the server is listening on the port ${config.PORT}`)
    })
},(error:any)=>{
    console.log(error)
}).then(async ()=>{
    try{
        const patient1 = await Patient.create({
            "name" : "Florencia",
            "lastname" : "Flandes",
            "DNI" : "43.453.577",
            "birth" : "20/12/2000",
            "adress" : "Julio A. Roca 4321 B° Observatorio",
            "mail" : "florenciaflandes@gmail.com",
            "phone" : 3516539214 
        })

        const patient2 = await Patient.create({
            "name" : "Agus",
            "lastname" : "Sangari",
            "DNI" : "41.111.347",
            "birth" : "13/08/1997",
            "adress" : "Schuman 435",
            "mail" : "Sangarini@gmail.com",
            "phone" : 154326598 
        })

        const patient3 = await Patient.create({
            "name" : "Carlos",
            "lastname" : "Gonzales",
            "DNI" : "32.543.211",
            "birth" : "15/07/1986",
            "adress" : "Independencia 600 B° Nueva Cordoba",
            "mail" : "fichitas@gmail.com",
            "phone" : 154362713 
        })

        const patient4 = await Patient.create({
            "name" : "Milena",
            "lastname" : "Flandes",
            "DNI" : "32.543.212",
            "birth" : "1975",
            "adress" : "Misiones 1230 B° Observatorio",
            "mail" : "milenaflandes@gmail.com",
            "phone" : 3512343234,
        })

        const patient5 = await Patient.create({
            "name" : "Eugenia",
            "lastname" : "Gomez",
            "DNI" : "43.543.133",
            "birth" : "1934",
            "adress" : "Misiones 4321 B° Observatorio",
            "mail" : "EugeniaGomez@gmail.com",
            "phone" : 154324321,
        })

        const professional1 = await Professional.create({
            "name" : "Alexander ",
            "lastname" : "Fleming ",
            "DNI" : "23.453.577",
            "birth" : "14/05/1996",
            "adress" : "Saendr 342",
            "mail" : "Alexander@gmail.com",
            "phone" : 3514632713,
            "password": "sdcsvf",
            "role":"professional"
        })
        const professional2 = await Professional.create({
            "name" : "Edward  ",
            "lastname" : "Jenner  ",
            "DNI" : "23.453.577",
            "birth" : "11/11/1889",
            "adress" : "reasti 342",
            "mail" : "edwar@gmail.com",
            "phone" : 3512345263,
            "password": 'dsfdc',
            "role":"professional"
        })

        const proffesional3 = await Professional.create({
            "name" : "Sigmund",
            "lastname" : "Freud ",
            "DNI" : "23.111.577",
            "birth" : "1976",
            "adress" : "Fister 342",
            "mail" : "Sigmund@gmail.com",
            "phone" : 354653921,
            "password": "sdcsvf",
            "role":"professional"
        })

        const professional4 = await Professional.create({
            "name" : "Louis",
            "lastname" : "Louis ",
            "DNI" : "23.654.577",
            "birth" : "1985",
            "adress" : "Polver 342",
            "mail" : "Louislousi@gmail.com",
            "phone" : 3514632713,
            "password": "sdcsvf",
            "role":"professional"
        })

        const professional5 = await Professional.create({
            "name" : "Elizabeth ",
            "lastname" : "Blackwell  ",
            "DNI" : "23.453.577",
            "birth" : "1987",
            "adress" : "figma 342",
            "mail" : "Blackwell@gmail.com",
            "phone" : 3514634563,
            "password": "sdcsvf",
            "role":"professional"
        })

        patient1.addProfessional(professional1, {through: {hourHand: "15:00"}})
        patient1.addProfessional(professional2, {through: {hourHand: "16:00"}})
        patient3.addProfessional(professional2, {through: {hourHand: "17:00"}})
        patient2.addProfessional(professional2, {through: {hourHand: "17:00"}})


    }
    catch(error:any){
        console.log(error)
    }
},(error:any)=>{
    console.log(error)
})