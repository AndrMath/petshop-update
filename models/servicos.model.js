import db from "../repository/db.js";
import Sequelize from 'sequelize'
import animal from "./animais.model.js";

const servico = db.define('servicos', {
  servicoId:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  descricao:{
    type: Sequelize.STRING,
    allowNull: false
  },
  valor:{
    type: Sequelize.DOUBLE,
    allowNull: false
  }
},{underscored:true})

servico.belongsTo(animal, {foreignKey: 'animalId'})

export default servico