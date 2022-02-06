import {DataTypes} from "sequelize";
const bcrypt =require('bcrypt')


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
          allowNull:false,
        },
        DNI:{
          type:DataTypes.STRING,
          allowNull:false
        },
        birth:{
          type:DataTypes.STRING,
          allowNull:true
        },
        adress:{
            type: DataTypes.STRING,
            allowNull: true
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
            allowNull: true
        },
        role:{
          type: DataTypes.STRING, 
          allowNull: false
        }
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
      }});
}