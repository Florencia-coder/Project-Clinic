const{Superuser}= require('../../db');


async function superuserLoad(credentials:object){
    let user = await Superuser.create(credentials)
}

export = superuserLoad