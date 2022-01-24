import {DataTypes} from "sequelize";

export=(sequelize:any)=>{
    sequelize.define('Patient', {
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
            type: DataTypes.STRING,
            allowNull: false
        },
        phone:{
            type: DataTypes.BIGINT, //integer 64 bits, pero se trabaja como string
            allowNull: false
        },
      },{timestamps:false});
}