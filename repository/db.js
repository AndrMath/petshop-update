import sequelize from 'sequelize'

const Sequelize = new sequelize(
  "postgres://jxuvurwe:rEpRXu4lHSZgNDCdxD0lebKtRXaButf7@babar.db.elephantsql.com/jxuvurwe",
  {
    dialect: 'postgres',
    define: {
      timestamps: false
    }
  }
)

export default Sequelize