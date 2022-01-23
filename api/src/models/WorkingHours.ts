import {DataTypes} from "sequelize";

export=(sequelize:any)=>{
    sequelize.define('WorkingHours', {
        id:{
          allowNull:false,
          primaryKey:true,
          type:DataTypes.INTEGER,
          autoIncrement:true
        },
        since: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        until:{
          type:DataTypes.INTEGER,
          allowNull:false
        }
      },{timestamps:false});
}