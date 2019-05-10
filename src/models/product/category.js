const sqlize = require('../../../config/sequelize')
const Sequelize = require('sequelize')

const Category = sqlize.define('categorys', {
  status: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
  name: { type: Sequelize.STRING(20), allowNull: false }
})

module.exports = Category
