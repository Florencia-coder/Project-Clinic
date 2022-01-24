import {DataTypes} from "sequelize";
const bcrypt =require('bcrypt')


export=(sequelize:any)=>{
    sequelize.define('Receptionist', {
        id:{
          allowNull:false,
          primaryKey:true,
          type:DataTypes.UUID,
          defaultValue:DataTypes.UUIDV4
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
          type:DataTypes.INTEGER,
          allowNull:false
        },
        birth:{
          type:DataTypes.STRING,
          allowNull:false
        },
        mail:{
            unique:true,
            type: DataTypes.STRING,
            allowNull:false
        },
        phone:{
            type: DataTypes.STRING,
            allowNull: false
        },
        username:{
            type:DataTypes.INTEGER,
            allowNull:false
          },
        password:{
            type: DataTypes.STRING,
            allowNull: false
          },
        role:{
          type: DataTypes.ENUM('receptionist'), //esto significa que el dato que tiene que se ingresa unicamente es un string 'receptionist'
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