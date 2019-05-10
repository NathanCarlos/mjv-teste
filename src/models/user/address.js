const sqlize = require('../../../config/sequelize')
const Sequelize = require('sequelize')

const Address = sqlize.define('adresses', {
  postcode: { type: Sequelize.STRING(9), allowNull: false },
  street: { type: Sequelize.STRING(100), allowNull: false },
  number: { type: Sequelize.INTEGER, allowNull: false, validate: { isInt: true } },
  neighborhood: { type: Sequelize.STRING(100), allowNull: false },
  complement: { type: Sequelize.STRING(100), allowNull: true },
  city: { type: Sequelize.STRING(100), allowNull: false },
  state: { type: Sequelize.STRING(100), allowNull: false }
})

module.exports = Address
