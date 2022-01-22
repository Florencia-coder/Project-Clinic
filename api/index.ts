const {conn}=require("./src/db");
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
})