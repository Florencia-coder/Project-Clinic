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
          allowNull: true,
        },
        lastname:{
          type:DataTypes.STRING,
          allowNull:true
        },
        DNI:{
          type:DataTypes.INTEGER,
          allowNull:true
        },
        birth:{
          type:DataTypes.STRING,
          allowNull:true
        },
        mail:{
            unique:true,
            type: DataTypes.STRING,
            allowNull:false
        },
        phone:{
            type: DataTypes.STRING,
            allowNull: true
        },
        username:{
            type:DataTypes.STRING,
            allowNull:true
          },
        password:{
            type: DataTypes.STRING,
            allowNull: false
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