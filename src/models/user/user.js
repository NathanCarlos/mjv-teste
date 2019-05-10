const sqlize = require('../../../config/sequelize')
const Sequelize = require('sequelize')
const userType = require('./userType')
const address = require('./address')

const User = sqlize.define('users', {
  firstname: { type: Sequelize.STRING(50), allowNull: false },
  lastname: { type: Sequelize.STRING(50), allowNull: false },
  password: { type: Sequelize.STRING(255), allowNull: false },
  email: { type: Sequelize.STRING(255), unique: true, allowNull: false, validate: { isEmail: true } },
  userTypeId: { type: Sequelize.INTEGER, allowNull: false, validate: { isInt: true } },
  telephone: { type: Sequelize.STRING(20) },
  addressId: { type: Sequelize.INTEGER, allowNull: false, validate: { isInt: true } }
})

User.belongsTo(userType)
User.belongsTo(address)

module.exports = User
