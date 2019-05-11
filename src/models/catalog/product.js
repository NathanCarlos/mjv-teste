const sqlize = require('../../../database/sequelize')
const Sequelize = require('sequelize')
const Category = require('./category')

const Product = sqlize.define('products', {
  status: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
  sku: { type: Sequelize.STRING(50), allowNull: false },
  name: { type: Sequelize.STRING(255), allowNull: false },
  content: { type: Sequelize.STRING(2000), allowNull: false },
  price: { type: Sequelize.FLOAT, allowNull: false, validate: { isFloat: true } },
  quantity: { type: Sequelize.FLOAT, allowNull: false, validate: { isFloat: true }, defaultValue: 0 },
  image: { type: Sequelize.STRING },
  categoryId: { type: Sequelize.INTEGER, allowNull: false }
})

Category.hasMany(Product)
Product.belongsTo(Category)

module.exports = Product
