import Sequelize from "sequelize";
import db from "../repository/db.js";

const owner = db.define('proprietarios',{
  proprietarioId:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull:false
  },
  nome:{
    type: Sequelize.STRING,
    allowNull: false
  },
  telefone:{
    type: Sequelize.STRING,
    allowNull: false
  }
}, {underscored:  true})

export default owner