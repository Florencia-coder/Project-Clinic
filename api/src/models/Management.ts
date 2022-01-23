import {DataTypes} from "sequelize";


export=(sequelize:any)=>{
    sequelize.define('Management', {
        id:{
          allowNull:false,
          primaryKey:true,
          type:DataTypes.UUID,
          defaultValue:DataTypes.UUIDV4
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password:{
          type:DataTypes.STRING,
          allowNull:false
        },
        mail:{
          type:DataTypes.STRING,
          allowNull:false
        },
        role:{
          type: DataTypes.ENUM('management'), //esto significa que el dato que tiene que se ingresa unicamente es un string 'professional'
          allowNull: false
        }
      },{timestamps:false});
}