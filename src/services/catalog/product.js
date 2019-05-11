const Product = require('../../models/catalog/product')
const Sequelize = require('../../../database/sequelize')

class ProductServices {
  static async getProducts () {
    try {
      const response = await Product.findAll()
      return response
    } catch (err) {
      throw err.message
    }
  }

  static async getProductById (id) {
    try {
      const response = await Product.findByPk(id)
      return response
    } catch (err) {
      throw err.message
    }
  }

  static async getProductsByCategoryId (id) {
    try {
      const response = await Product.findAll({ where: { categoryId: id } })
      return response
    } catch (err) {
      throw err.message
    }
  }

  static async createProduct (status, sku, name, content, price, quantity, image = '', categoryId) {
    try {
      const response = await Sequelize.transaction(t => {
        return Product.create({
          status,
          sku,
          name,
          content,
          price,
          quantity,
          image,
          categoryId
        })
      })
      return response
    } catch (err) {
      throw err.message
    }
  }

  static async updateProduct (id, status, sku, name, content, price, quantity, categoryId) {
    try {
      const response = await Sequelize.transaction(t => {
        return Product.update({
          status,
          sku,
          name,
          content,
          price,
          quantity,
          categoryId
        },
        { where: { id } })
      })
      return response
    } catch (err) {
      throw err.message
    }
  }

  static async deleteProduct (id) {
    try {
      const response = await Sequelize.transaction(t => {
        return Product.destroy({
          where: { id }
        })
      })
      return response
    } catch (err) {
      throw err.message
    }
  }
}

module.exports = ProductServices
