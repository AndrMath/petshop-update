import db from "../repository/db.js";
import Sequelize from 'sequelize'
import owner from "./proprietario.model.js";

const animal = db.define('animais', {
  animalId:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nome:{
    type: Sequelize.STRING,
    allowNull: false
  },
  tipo:{
    type:  Sequelize.STRING,
    allowNull: false
  }
}, {underscored: true})

animal.belongsTo(owner, { foreignKey: 'proprietarioId' })

export default animal
