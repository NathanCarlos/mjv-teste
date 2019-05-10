const sqlize = require('../../../config/sequelize')
const Sequelize = require('sequelize')

const UserType = sqlize.define('usersType', {
  description: { type: Sequelize.STRING(20), unique: true, allowNull: false }
})

module.exports = UserType
