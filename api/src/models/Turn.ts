import { DataTypes } from "sequelize";

export=(sequelize:any)=>{
    sequelize.define('Turn', {
        id:{
            primaryKey:true,
            type:DataTypes.INTEGER,
            autoIncrement: true
          },
        hourHand:{
            type: DataTypes.STRING
        }
    },{timestamps:false})
}