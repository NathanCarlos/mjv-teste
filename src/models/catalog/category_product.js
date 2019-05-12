const sqlize = require('../../../database/sequelize')
const Sequelize = require('sequelize')
const Category = require('./category')
const Product = require('./product')

const CategoryProduct = sqlize.define('category_product', {
  categoryId: { type: Sequelize.INTEGER, allowNull: false },
  productId: { type: Sequelize.INTEGER, allowNull: false }
})

Product.hasMany(CategoryProduct)
CategoryProduct.belongsTo(Product)
Category.hasMany(CategoryProduct)
CategoryProduct.belongsTo(Category)

module.exports = CategoryProduct
