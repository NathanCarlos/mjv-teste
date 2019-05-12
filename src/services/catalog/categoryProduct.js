const CategoryProduct = require('../../models/catalog/category_product')
const Sequelize = require('../../../database/sequelize')

class CategoryProductServices {
  static async getCategoryProducts () {
    try {
      const response = await CategoryProduct.findAll()
      return response
    } catch (err) {
      throw err.message
    }
  }

  static async createManyCategoryProduct (categorys, product) {
    for (let category of categorys) {
      await this.createCategoryProduct(category, product)
    }
  }

  static async createCategoryProduct (categoryId, productId) {
    try {
      const response = await Sequelize.transaction(t => {
        return CategoryProduct.create({
          categoryId,
          productId
        })
      })
      return response
    } catch (err) {
      console.log(err)
      throw err.message
    }
  }

  static async updateCategoryProduct (id, categoryId, productId) {
    try {
      const response = await Sequelize.transaction(t => {
        return CategoryProduct.update({
          categoryId,
          productId
        },
        { where: { id } })
      })
      return response
    } catch (err) {
      throw err.message
    }
  }

  static async deleteCategoryProduct (id) {
    try {
      const response = await Sequelize.transaction(t => {
        return CategoryProduct.destroy({
          where: { id }
        })
      })
      return response
    } catch (err) {
      throw err.message
    }
  }

  static async deleteProductCategory (productId) {
    try {
      const response = await Sequelize.transaction(t => {
        return CategoryProduct.destroy({
          where: { productId }
        })
      })
      return response
    } catch (err) {
      throw err.message
    }
  }
}

module.exports = CategoryProductServices
