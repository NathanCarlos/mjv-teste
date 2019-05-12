const Product = require('../../models/catalog/product')
const Sequelize = require('../../../database/sequelize')
const CategoryProduct = require('../../models/catalog/category_product')
const CategoryProductServices = require('./categoryProduct')

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
      const response = await Product.findAll({
        include: [{
          model: CategoryProduct,
          where: { categoryId: id }
        }]
      })
      return response
    } catch (err) {
      throw err.message
    }
  }

  static async createProduct (status, sku, name, content, price, quantity, image = '', categorys) {
    try {
      const response = await Sequelize.transaction(t => {
        return Product.create({
          status,
          sku,
          name,
          content,
          price,
          quantity,
          image
        })
      })
      await CategoryProductServices.createManyCategoryProduct(categorys, response.id)
      return response
    } catch (err) {
      throw err.message
    }
  }

  static async updateProduct (id, status, sku, name, content, price, quantity) {
    try {
      const response = await Sequelize.transaction(t => {
        return Product.update({
          status,
          sku,
          name,
          content,
          price,
          quantity
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
      await CategoryProductServices.deleteProductCategory(id)

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
