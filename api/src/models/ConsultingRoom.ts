import {DataTypes} from "sequelize";


export=(sequelize:any)=>{
    sequelize.define('ConsultingRoom', {
       id:{
        allowNull:false,
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement: true
      },
        floor: {
          type: DataTypes.STRING,
        }
      },{timestamps:false});
}