import {DataTypes} from "sequelize";

export=(sequelize:any)=>{
    sequelize.define('ClinicHistory', {
        id:{
          allowNull:false,
          primaryKey:true,
          type:DataTypes.INTEGER,
          autoIncrement: true
        },
        nameDoctor: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        MedicalSpeciality:{
          type:DataTypes.INTEGER,
        },
        observations:{
          type:DataTypes.INTEGER,
          allowNull:false
        },
        image:{
          type:DataTypes.STRING,
        }
      },{timestamps:false});
}