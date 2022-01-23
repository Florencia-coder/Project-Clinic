import {DataTypes} from "sequelize";

export=(sequelize:any)=>{
    sequelize.define('MedicalSpecialties', {
        id:{
          allowNull:false,
          primaryKey:true,
          type:DataTypes.INTEGER,
          autoIncrement: true
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description:{
          type:DataTypes.TEXT,
          allowNull:false
        },
        value:{
          type:DataTypes.INTEGER,
          allowNull:false
        }
      },{timestamps:false});
}