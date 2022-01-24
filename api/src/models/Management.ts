import {DataTypes} from "sequelize";
const bcrypt =require('bcrypt')


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