import {DataTypes} from "sequelize";


export=(sequelize:any)=>{
  sequelize.define('Superuser', {
    id:{
      allowNull:true,
      primaryKey:true,
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    surname:{
      type:DataTypes.STRING,
      allowNull:true
    },
    birth:{
      type:DataTypes.STRING,
      allowNull:true
    },
    dni:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    mail:{
      unique:true,
      type:DataTypes.STRING,
      allowNull:false
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    role:{
      type:DataTypes.STRING,
      allowNull:false
    }
})
}