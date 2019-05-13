const Sequelize = require('sequelize')
let DB = 'mjv'

const sequelize = new Sequelize(DB, 'root', 'root', {
  dialect: 'mysql',
  operatorsAliases: false,
  host: process.env.DB_HOST || 'localhost',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

module.exports = sequelize
