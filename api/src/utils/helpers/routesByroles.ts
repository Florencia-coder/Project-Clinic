
function getRoutesPermition(role:string){
    interface rt{
        [key:string]:Array<string>
    }
    let routes:rt={
        superuser:['/supuser','/supuser/admins','/supuser/admins/:id']
    }
    return routes[role]
}



export =getRoutesPermition