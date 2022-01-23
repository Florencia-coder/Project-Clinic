import {DataTypes} from "sequelize";
const bcrypt =require('bcrypt')

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
    age:{
      type:DataTypes.INTEGER,
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
    },
  },{timestamps:false,
    hooks:{
    beforeCreate: async (user:any) => {
      if (user.password) {
       const salt = await bcrypt.genSaltSync(10, 'a');
       user.password = bcrypt.hashSync(user.password, salt);
      }
     },
     beforeUpdate:async (user:any) => {
      if (user.password) {
       const salt = await bcrypt.genSaltSync(10, 'a');
       user.password = bcrypt.hashSync(user.password, salt);
      }
     }
  }},)
}