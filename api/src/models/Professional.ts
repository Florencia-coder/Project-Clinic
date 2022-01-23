import {DataTypes} from "sequelize";


export=(sequelize:any)=>{
    sequelize.define('Professional', {
        id:{
          allowNull:false,
          primaryKey:true,
          type:DataTypes.INTEGER,
          autoIncrement: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lastname:{
          type:DataTypes.STRING,
          allowNull:false
        },
        DNI:{
          type:DataTypes.STRING,
          allowNull:false
        },
        birth:{
          type:DataTypes.STRING,
          allowNull:false
        },
        adress:{
            type: DataTypes.STRING,
            allowNull: false
        },
        mail:{
            unique:true,
            type: DataTypes.STRING,
            allowNull:false
        },
        password:{
            type: DataTypes.STRING,
            allowNull:false
        },
        phone:{
            type: DataTypes.STRING,
            allowNull: false
        },
        role:{
          type: DataTypes.ENUM('professional'), //esto significa que el dato que tiene que se ingresa unicamente es un string 'professional'
          allowNull: false
        }
      },{timestamps:false});
}